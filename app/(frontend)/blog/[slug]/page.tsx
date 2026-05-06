import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { getNavigation } from '@/lib/getNavigation'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const navData = await getNavigation()

  const payload = await getPayload({ config })
  const { docs } = await (payload as any).find({
    collection: 'blogs',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  })

  const blog = docs[0]
  if (!blog) return notFound()

  // ✅ Format date
  const formattedDate = blog.publishedDate
    ? new Date(blog.publishedDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  // ✅ Render rich text content
  const renderContent = (content: any) => {
    if (!content?.root?.children) return null
    return content.root.children.map((node: any, i: number) => {
      if (node.type === 'heading') {
        const Tag = `h${node.tag}` as any
        return (
          <Tag key={i} className="text-[22px] md:text-[26px] font-extrabold text-gray-900 mb-4 font-['Avenir']">
            {node.children?.map((child: any) => child.text).join('')}
          </Tag>
        )
      }
      if (node.type === 'paragraph') {
        return (
          <p key={i} className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-4">
            {node.children?.map((child: any) => child.text).join('')}
          </p>
        )
      }
      if (node.type === 'quote') {
        return (
          <blockquote key={i} className="rounded-xl px-6 py-5 mb-10 text-[16px] leading-relaxed border-l-4 border-[#0052C6] bg-blue-50">
            {node.children?.map((child: any) => child.text).join('')}
          </blockquote>
        )
      }
      return null
    })
  }

  return (
    <>
      <Navbar navData={navData} />

      <article className="py-10 md:py-16 bg-white mt-17.5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-7xl">

            {/* Breadcrumb */}
            <p className="text-[16px] font-bold tracking-[0.15em] text-[#0052C6] uppercase mb-3">
              <Link href="/blog">Blog</Link>
              {blog.category && <> &gt; {blog.category}</>}
            </p>

            {/* Title */}
            <h1 className="text-[32px] md:text-[42px] font-extrabold mb-5 font-['Avenir']">
              {blog.title}
            </h1>

            {/* Author row */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold">{blog.author || 'Jones Paint & Glass'}</p>
                  <p className="text-[11px]">{formattedDate} {blog.readTime && `• ${blog.readTime}`}</p>
                </div>
              </div>

              {/* Social share icons */}
              <div className="flex items-center gap-2">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded flex items-center justify-center bg-[#0077B5] hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded flex items-center justify-center bg-[#1877F2] hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href={`https://www.instagram.com`} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded flex items-center justify-center bg-[#E1306C] hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" /></svg>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded flex items-center justify-center bg-black hover:opacity-80 transition-opacity">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {blog.image?.url && (
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#EEF4FB] mb-10">
              <Image
                src={blog.image.url}
                alt={blog.image.alt || blog.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}

          <div className="mx-auto max-w-7xl">

            {/* ✅ Rich text content */}
            <div className="mb-10">
              {renderContent(blog.content)}
            </div>

            {/* Share + Keywords row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-gray-200 mb-10">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-semibold text-gray-700">Share this post</span>
                <div className="flex items-center gap-2">
                  <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#0077B5]"><svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg></a>
                  <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#1877F2]"><svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                  <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#E1306C]"><svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" /></svg></a>
                  <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-black"><svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                </div>
              </div>

              {/* Keywords */}
              {blog.keywords && blog.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blog.keywords.map((kw: any, i: number) => (
                    <span key={i} className="text-[11px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                      {kw.keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom author */}
            <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-gray-900">{blog.author || 'Jones Paint & Glass'}</p>
                <p className="text-[11px] text-gray-400">{formattedDate} {blog.readTime && `• ${blog.readTime}`}</p>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
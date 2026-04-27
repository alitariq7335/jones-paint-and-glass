import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getLocations() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'locations' as any,
      limit: 100,
      sort: 'name',
      depth: 2,
    })
    return result.docs ?? []
  } catch {
    return []
  }
}

export async function getLocationBySlug(slug: string) {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'locations' as any,
      where: {
        or: [
          { slug: { equals: slug } },
          { slug: { equals: `/${slug}` } },
        ],
      },
      depth: 2,
      limit: 1,
    })
    return result.docs[0] ?? null
  } catch {
    return null
  }
}
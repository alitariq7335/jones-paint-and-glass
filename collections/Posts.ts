import type { CollectionConfig } from 'payload'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    update: ({ req }) => !!req.user, // ✅ any logged in user can update
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media' as any,
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}

export default Posts
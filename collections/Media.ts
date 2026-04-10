import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: () => true, // Allow public access to read/view media
    create: ({ req }) => !!req.user, // Only authenticated users can upload
    update: ({ req }) => !!req.user, // Only authenticated users can update
    delete: ({ req }) => !!req.user, // Only authenticated users can delete
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export default Media
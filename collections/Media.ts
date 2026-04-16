import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  upload: {
    disableLocalStorage: true, // ✅ Cloudinary handles storage
    mimeTypes: ['image/*', 'video/*', 'application/pdf'], // ✅ allowed file types
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      admin: {
        description: 'Describe the image for accessibility and SEO',
      },
    },
    // ✅ Store Cloudinary URL directly
    {
      name: 'url',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Cloudinary URL (auto-filled on upload)',
      },
    },
    // ✅ Store Cloudinary public ID for deletion
    {
      name: 'cloudinaryPublicId',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Cloudinary Public ID (auto-filled on upload)',
      },
    },
  ],
}

export default Media
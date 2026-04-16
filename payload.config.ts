import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import Media from './collections/Media'
import Navigation from './collections/Navigation'
import Pages from './collections/Pages'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { cloudinaryAdapter } from './lib/cloudinaryAdapter'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'mysecret123',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),

  cors: [
    'http://localhost:3000',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),

  csrf: [
    'http://localhost:3000',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),

  admin: {
    user: 'users',
  },

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'role',
          type: 'select',
          options: ['admin', 'user'],
          defaultValue: 'user',
        },
      ],
    },
    Media,
    Pages,       // ✅ Navigation removed from here
  ],

  // ✅ Navigation moved here as a global
  globals: [
    Navigation,
  ],

  plugins: [
  cloudStoragePlugin({
    collections: {
      media: {
        adapter: cloudinaryAdapter({
          folder: 'paint-media',
          config: {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
            api_key: process.env.CLOUDINARY_API_KEY!,
            api_secret: process.env.CLOUDINARY_API_SECRET!,
          },
        }),
        disableLocalStorage: true,
      },
    },
  }),
],


})
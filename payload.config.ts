import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import Media from './collections/Media'
import Posts from './collections/Posts'
import Navigation from './collections/Navigation'
import Pages from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'mysecret123',

  // ✅ Fix 1: Use environment variable for serverURL
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',

  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),

  // ✅ Fix 2: Add CORS and CSRF for live domain
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
    Posts,
    Navigation,
    Pages,
  ],
})
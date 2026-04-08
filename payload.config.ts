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
  // Secret key for auth tokens
  secret: process.env.PAYLOAD_SECRET || 'mysecret123',

  // Where your app runs
  serverURL: 'http://localhost:3000',

  // Rich text editor
  editor: lexicalEditor(),

  // Database connection
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),

  // Admin panel settings
  admin: {
    user: 'users',
  },

  // TypeScript types auto-generation
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // All collections
  collections: [
    // Users - handles authentication
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

    // Media and Posts from separate files
    Media,
    Posts,
    Navigation,
    Pages,
  ],
})
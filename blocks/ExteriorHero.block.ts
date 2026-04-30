import type { Block } from 'payload'

export const ExteriorHero: Block = {
  slug: 'exteriorHero',
  imageURL: '/assets/blocks-preview/exteriorhero.png',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  admin: {
    group: 'Content',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Exterior Paint',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Not all paint is the same. Exterior paint has characteristics that make it better suited for outdoor environments and surfaces.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media' as any,
      required: true,
    },
  ],
}
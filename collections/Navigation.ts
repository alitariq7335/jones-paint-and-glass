import type { GlobalConfig } from 'payload'

const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: {
    group: 'Globals',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media' as any,
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Get a Quote',
    },
    {
      name: 'ctaLink',
      type: 'text',
      defaultValue: '/contact',
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Nav Items',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: ['link', 'dropdown'],
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'link',
          },
        },
        {
          name: 'items',
          type: 'array',
          label: 'Dropdown Items',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'dropdown',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

export default Navigation
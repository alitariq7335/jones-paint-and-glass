import type { Block } from 'payload'

export const DiySliderBlock: Block = {
  slug: 'diySlider',
  labels: {
    singular: 'DIY Slider',
    plural: 'DIY Sliders',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Get More DIY Tips & Ideas',
      required: true,
    },
    {
      name: 'subtext',
      type: 'textarea',
      defaultValue:
        'Follow us on social media for how-to videos and product info from the same pros who will help you in our stores.',
    },
    {
      name: 'showInstagram',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Instagram Tab',
    },
    {
      name: 'showTiktok',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show TikTok Tab',
    },
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Location Name',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media' as any,
          required: true,
        },
      ],
    },
  ],
}
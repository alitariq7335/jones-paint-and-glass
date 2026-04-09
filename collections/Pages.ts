import type { CollectionConfig } from 'payload'
import { DiySliderBlock } from '../blocks/DiySlider.block'
import { HeroBlock } from '../blocks/Hero.block'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL path e.g. "about" → /about  |  leave "home" for /',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Page Blocks',
      blocks: [
        DiySliderBlock,
        HeroBlock,
      ],
    },
  ],
}

export default Pages
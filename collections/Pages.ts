import type { CollectionConfig } from 'payload'
import { DiySliderBlock } from '../blocks/DiySlider.block'
import { HeroBlock } from '../blocks/Hero.block'
import { ProductServicesBlock } from '@/blocks/ProductService.block'
import { ImageSliderBlock } from '@/blocks/ImageSlider.block'
import { Contractor } from '@/blocks/Contractor.block'
import { DiySupportBlogBlock } from '@/blocks/DiySupportBlog.block'
import { JpgMedia } from '@/blocks/JpgMedia.block'
import { DiySliderMediaBlock } from '@/blocks/DiySliderMedia.block'
import { DiyHeroBlock } from '@/blocks/Diyhero.block'
import { VideoSliderBlock } from '@/blocks/Videoslider.block'

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
        HeroBlock,
        ProductServicesBlock,
        ImageSliderBlock,
        DiySliderBlock,
        Contractor,
        DiySupportBlogBlock,
        JpgMedia,
        DiySliderMediaBlock,
        DiyHeroBlock,
        VideoSliderBlock,
        
      ],
    },
  ],
}

export default Pages
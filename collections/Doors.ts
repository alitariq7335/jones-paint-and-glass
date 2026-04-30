import { BrandsBlock } from '@/blocks/Brandsblock.block'
import { ExteriorHero } from '@/blocks/ExteriorHero.block'
import { ExteriorServicesBlock } from '@/blocks/ExteriorServices.block'
import { FaqTipsSlider } from '@/blocks/FaqTipsSlider.block'
import { FeatureCardsBlock } from '@/blocks/FeatureCards.block'
import { FeaturedBrandBlock } from '@/blocks/FeaturedBrandBlock'
import { FeatureListBlock } from '@/blocks/FeatureListBlock'
import { HeroBlock } from '@/blocks/Hero.block'
import { ImageSliderBlock } from '@/blocks/ImageSlider.block'
import type { CollectionConfig } from 'payload'

const Doors: CollectionConfig = {
  slug: 'doors',
  admin: {
    useAsTitle: 'name',
    group: 'Products & Services',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
   {
      name: 'name',
      type: 'text',
      label: 'Page Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Location Slug',
      required: true,
      unique: true,
      admin: {
        description: 'e.g. "vernal" → /locations/vernal',
      },
    },
   
    
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Page Blocks',
      blocks: [
        ExteriorHero,
        FeatureListBlock,
        FeaturedBrandBlock,
        ExteriorServicesBlock,
        ImageSliderBlock,
        FaqTipsSlider,
        BrandsBlock,
        FeatureCardsBlock,
      ],
    },
  ],
}

export default Doors
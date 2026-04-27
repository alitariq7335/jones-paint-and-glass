import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { getLocations } from './getLocations'

export async function getNavigation() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await (payload as any).findGlobal({
      slug: 'navigation',
      depth: 2,
    })

    // ✅ Fetch all locations
    const locations = await getLocations()

    // ✅ Build locations dropdown from database
    const locationsNavItem = {
      type: 'dropdown',
      label: 'Locations',
      href: '/locations',
      items: locations.map((loc: any) => ({
        label: loc.name,
        href: `/${loc.slug}`
      })),
    }

    // ✅ Get existing nav items
    const navItems = result?.navItems ?? []

    // ✅ Replace Locations nav item with dynamic one
    const hasLocations = navItems.some(
      (item: any) => item.label?.toLowerCase() === 'locations'
    )

    return {
      ...result,
      navItems: hasLocations
        ? navItems.map((item: any) =>
            item.label?.toLowerCase() === 'locations'
              ? locationsNavItem
              : item
          )
        : navItems,
    }

  } catch {
    return null
  }
}
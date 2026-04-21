import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getNavigation() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.findGlobal({
      slug: 'navigation' as any,
      depth: 2, // ✅ depth 2 to get nested logo image url
    })
    return result ?? null
  } catch {
    return null
  }
}
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getNavigation() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await (payload as any).findGlobal({
      slug: 'navigation',
      depth: 2,
    })
    return result ?? null
  } catch {
    return null
  }
}
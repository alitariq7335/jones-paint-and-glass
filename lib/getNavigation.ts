import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getNavigation() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'navigation' as any,
      limit: 1,
    })
    return (result.docs[0] as any) ?? null
  } catch {
    return null
  }
}
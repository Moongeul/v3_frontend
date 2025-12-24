import { apiCallServer } from '@/lib/api.server'
import { CategoryResponseType } from '@/types/write'

export async function GET() {
  try {
    const { data, error } = await apiCallServer<CategoryResponseType>('/v2/category', {
      method: 'GET',
    })

    if (error) {
      console.error('❌ API Route - Backend error:', error)
      return Response.json({ error }, { status: 400 })
    }

    console.log('✅ API Route - Successfully fetched data:', data)
    return Response.json(data)
  } catch (error) {
    console.error('❌ API Route - Internal error:', error)
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}

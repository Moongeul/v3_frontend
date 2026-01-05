import { apiFetchServer } from '@/lib/api.server'

export const serverFetchAllPosts = async (page: number, size: number) => {
  const searchParams = new URLSearchParams()
  searchParams.append('page', page.toString())
  searchParams.append('size', size.toString())

  const response = await apiFetchServer(`/api/v2/post?${searchParams.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

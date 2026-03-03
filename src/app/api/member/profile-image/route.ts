// app/api/member/profile-image/route.ts (예시)

import { apiCallServer } from '@/lib/api.server'

export async function PATCH(request: Request) {
  try {
    const incomingFormData = await request.formData()
    const file = incomingFormData.get('profileImage')

    if (!file || !(file instanceof File)) {
      return Response.json({ error: 'File is required' }, { status: 400 })
    }

    const formDataForBackend = new FormData()
    formDataForBackend.append('profileImage', file)

    // apiCallServer에 별도의 headers를 넘기지 않습니다.
    // 내부 로직이 FormData를 감지하여 Content-Type을 비워줄 것입니다.
    const { data, error, success } = await apiCallServer('/v2/member/profile-image', {
      method: 'PATCH',
      body: formDataForBackend,
    })

    if (!success) return Response.json({ error }, { status: 400 })
    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}

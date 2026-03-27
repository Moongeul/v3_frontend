'use client'

import { useEffect } from 'react'
import { useModalStore } from '@/store/modalStore'
import Cookies from 'js-cookie'

interface Props {
  results?: any
  error?: string | undefined
}

export default function AuthWatcher({ results, error }: Props) {
  const setModal = useModalStore((state) => state.setModal)

  useEffect(() => {
    // 1. 이미 토큰이 있다면 (로그인 상태거나 갱신 중) 모달을 띄우지 않음
    const accessToken = Cookies.get('accessToken')
    const refreshToken = Cookies.get('refreshToken')
    if (accessToken || refreshToken) return

    // 2. 인증/로그인 유도가 필요한 에러 메시지 정의
    const AUTH_ERROR_MESSAGES = [
      'AUTH_REQUIRED',
      '해당 사용자를 찾을 수 없습니다.',
      '로그인이 필요합니다',
      '401',
      'HTTP Error: 403',
    ]

    // 에러 판별 함수
    const isAuthError = (msg: string | undefined) => msg && AUTH_ERROR_MESSAGES.some((errMsg) => msg.includes(errMsg))

    // 3. 직접 전달된 error 프롭스 확인
    const hasDirectError = isAuthError(error)

    // 4. InfiniteData(results) 내부의 페이지 에러 확인
    const hasResultsError = results?.pages?.some((page: any) => {
      if (!page) return false

      const is401Status = page.status === 401 || String(page.status) === '401'
      const hasErrorMsg = isAuthError(page.message) || isAuthError(page.error)
      const isUnsuccessful = page.success === false && hasErrorMsg

      return is401Status || isUnsuccessful
    })

    // 5. 조건 충족 시 모달 오픈
    if (hasDirectError || hasResultsError) {
      console.warn('🔑 AuthWatcher: 인증 에러 또는 사용자 없음 감지. 로그인 모달을 띄웁니다.')
      setModal('isRequiredLoginModalOpen', true)
    }
  }, [results, error, setModal]) // error 의존성 추가

  return null
}

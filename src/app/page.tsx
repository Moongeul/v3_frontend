import Link from 'next/link'

export default function Home() {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`

  return (
    <main>
      <Link href={googleAuthUrl}>구글 로그인</Link>
      <Link href={kakaoAuthUrl}>카카오 로그인</Link>
      <Link href={'/home?tab=PUBLIC'}>로그인 없이 이동(에러날 수 있음)</Link>
    </main>
  )
}

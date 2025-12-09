import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link
        href={
          'https://accounts.google.com/o/oauth2/v2/auth?client_id=658535792763-1tgi5ps8edn2iphbfh6h9tpf0r4v58i8.apps.googleusercontent.com&redirect_uri=http://localhost:3000/redirect&response_type=code&scope=email%20profile'
        }
      >
        구글 로그인
      </Link>
    </main>
  )
}

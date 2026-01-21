'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface BookProps {
  bookImage: string
  isbn: string
}

export default function Book({ bookImage, isbn }: BookProps) {
  const router = useRouter()
  return (
    <Image
      onClick={() => {
        router.push(`/book/${isbn}`)
      }}
      src={bookImage}
      alt={bookImage}
      width={72}
      height={108}
      style={{ borderRadius: 4 }}
    />
  )
}

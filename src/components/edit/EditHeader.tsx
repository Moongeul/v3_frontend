'use client'

import { useRouter } from 'next/navigation'
import { useBookStore } from '@/store/bookStore'
import Header from '../common/Header'
import { useEditStore } from '@/store/editStore'
import EditButton from '@/components/edit/EditButton'

interface EditHeaderProps {
  postId: number
}

export default function EditHeader({ postId }: EditHeaderProps) {
  const router = useRouter()
  const { setSearchValue } = useBookStore((state) => state)
  const { resetEditData } = useEditStore((state) => state)
  return (
    <Header
      onClick={() => {
        router.push('/home?tab=PUBLIC')
        setSearchValue('')
        resetEditData()
      }}
      headerType={'dynamic'}
      rightIcon={<EditButton postId={postId} />}
    >
      글쓰기
    </Header>
  )
}

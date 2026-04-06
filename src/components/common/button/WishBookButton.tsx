'use client'

import { Button } from '@/components/common'
import { GrayWishIcon, SecondWishIcon } from '@/assets/svgComponents'
import { baseColor } from '@/styles/theme'
import { useModal } from '@/hooks/common/useModal'
import Modal from '@/components/common/Modal'
import { clientDeleteWishReadBookIsbn, clientPostWishReadBookIsbn } from '@/lib/client/book'
import { useToast } from '@/components/common/toast/ToastContext'
import { useRouter } from 'next/navigation'

interface WishBookButtonProps {
  isbn: string
  isWishRead: boolean
}

export default function WishBookButton({ isbn, isWishRead }: WishBookButtonProps) {
  const { isOpen, toggleModalState } = useModal()
  const { success, error } = useToast()
  const router = useRouter()

  const handleSubmit = async (isbn: string, isWishRead: boolean) => {
    if (isWishRead) {
      const result = await clientDeleteWishReadBookIsbn(isbn)
      if (result.success) {
        success('책 담기 취소 성공', '읽고 싶은 책장에서 책을 지웠어요.')
        router.refresh()
        toggleModalState()
      } else {
        error('책 담기 취소 실패', '읽고 싶은 책장에서 책을 지우지 못했어요.')
        router.refresh()
      }
    } else {
      const result = await clientPostWishReadBookIsbn(isbn)
      if (result.success) {
        success('책 담기 성공', '읽고 싶은 책장에 저장했어요.')
        router.refresh()
        toggleModalState()
      } else {
        error('책 담기 실패', '읽고 싶은 책장에 저장하지 못했어요.')
        router.refresh()
      }
    }
  }

  return (
    <>
      <Modal
        footerButtons={
          <>
            <Button onClick={toggleModalState} size={'lg'} variant={'secondary'}>
              다음에
            </Button>
            <Button onClick={() => handleSubmit(isbn, isWishRead)} size={'lg'} variant={'primary'}>
              네, 할래요
            </Button>
          </>
        }
        title={'읽고 싶은 책에 등록할까요?'}
        isOpen={isOpen}
        onClose={toggleModalState}
      />
      <Button
        variant={'secondary'}
        isActive={!isWishRead}
        size={'sm'}
        width={65}
        buttonType={'button'}
        onClick={toggleModalState}
        textColor={baseColor.gray300}
        leftIcon={isWishRead ? <GrayWishIcon width={20} height={20} /> : <SecondWishIcon width={20} height={20} />}
      >
        {isWishRead ? '취소' : '담기'}
      </Button>
    </>
  )
}

'use client'

import { Button } from '@/components/common'
import { GrayWishIcon } from '@/assets/svgComponents'
import { baseColor } from '@/styles/theme'
import { useModal } from '@/hooks/common/useModal'
import Modal from '@/components/common/Modal'
import { clientPostWishReadBookIsbn } from '@/lib/client/book'

interface WishBookButtonProps {
  isbn: string
}

export default function WishBookButton({ isbn }: WishBookButtonProps) {
  const { isOpen, toggleModalState } = useModal()

  const handleSubmit = async (isbn: string) => {
    const result = await clientPostWishReadBookIsbn(isbn)
    console.log('책 담기 성공', result)
    if (result.success) {
      toggleModalState()
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
            <Button onClick={() => handleSubmit(isbn)} size={'lg'} variant={'primary'}>
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
        isActive={false}
        size={'sm'}
        width={65}
        buttonType={'button'}
        onClick={toggleModalState}
        textColor={baseColor.gray300}
        leftIcon={<GrayWishIcon width={20} height={20} />}
      >
        담기
      </Button>
    </>
  )
}

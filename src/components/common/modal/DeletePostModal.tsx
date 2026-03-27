'use client'

import Modal from '@/components/common/Modal'
import { ModalKey, useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'
import { deletePost } from '@/lib/client/post'

interface DeletePostModalProps {
  postId: number | string
}

export default function DeletePostModal({ postId }: DeletePostModalProps) {
  const { toggleModal, modals } = useModalStore()
  return modals.isDeletePostModalOpen ? (
    <Modal
      isOpen={modals.isDeletePostModalOpen}
      onClose={() => toggleModal('isDeletePostModalOpen')}
      title={'게시글을 삭제할까요?'}
      footerButtons={<FooterButtons postId={postId} toggleModal={toggleModal} />}
    />
  ) : null
}
function FooterButtons({ toggleModal, postId }: { postId: number | string; toggleModal: (key: ModalKey) => void }) {
  const router = useRouter()
  const { success, error } = useToast()

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={() => {
          toggleModal('isDeletePostModalOpen')
        }}
      >
        다음에
      </Button>
      <Button
        onClick={async () => {
          const result = await deletePost(postId)
          if (result.success) {
            success('게시글 삭제 성공', '게시글을 삭제했어요.')
            router.push('/question')
            router.refresh()
            toggleModal('isDeletePostModalOpen')
          } else {
            error('게시글 삭제 실패', '게시글을 삭제하지 못했어요.')
            toggleModal('isDeletePostModalOpen')
          }
        }}
      >
        네, 할래요
      </Button>
    </>
  )
}

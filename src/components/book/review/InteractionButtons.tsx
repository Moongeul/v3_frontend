'use client'

import { Button } from '@/components/common'
import { LikesCntType, LikeType, MyLikesStatusType } from '@/types/record'
import { StyleContainerRow } from '@/styles/common/InteractionButtons.styles'
import { postLikeId } from '@/lib/client/post'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import ThemeInteractionIcon from '@/components/common/icon/ThemeInteractionIcon'
import { useToast } from '@/components/common/toast/ToastContext'

interface InteractionButtonProps {
  postId: number
  likesCnt: LikesCntType
  myLikesStatus: MyLikesStatusType
  content: string
}

export default function InteractionButtons({ postId, likesCnt, myLikesStatus, content }: InteractionButtonProps) {
  const router = useRouter()
  const { interaction } = useToast()
  const queryClient = useQueryClient()

  const renderTitle = (likeType: LikeType) => {
    switch (likeType) {
      case 'RELATABLE':
        return '공감되었어요'
      case 'HELPFUL':
        return '도움이 되었어요'
      case 'SAME_TASTE':
        return '취향이 통했어요!'
      case 'IMPRESSIVE_EXPRESSION':
        return '인상 깊었어요'
      case 'WANT_TO_READ':
        return '읽고 싶어요'
    }
  }

  const truncateContent = (text: string) => {
    return text.length > 10 ? `${text.slice(0, 10)}...` : text
  }

  const renderDescription = (likeType: LikeType) => {
    const truncated = truncateContent(content)
    switch (likeType) {
      case 'RELATABLE':
        return `${truncated}에 마음을 남겼어요.`
      case 'HELPFUL':
        return `${truncated}이 와닿았어요.`
      case 'SAME_TASTE':
        return `${truncated}에 공감했어요.`
      case 'IMPRESSIVE_EXPRESSION':
        return `${truncated}에 마음을 남겼어요.`
      case 'WANT_TO_READ':
        return `${truncated}를 보고 읽고 싶어졌어요.`
    }
  }

  const handleSubmit = async (e: React.MouseEvent, likeType: LikeType) => {
    e.stopPropagation()

    const result = await postLikeId(postId, likeType)

    if (result.success) {
      // invalidateQueries만으로 충분해요. refetchType: 'active'로 현재 마운트된 쿼리만 리페치
      await queryClient.invalidateQueries({
        queryKey: ['post'],
        refetchType: 'active',
      })

      interaction(
        renderTitle(likeType),
        <ThemeInteractionIcon width={40} height={40} type={likeType} />,
        renderDescription(likeType)
      )
    }
  }

  return (
    <StyleContainerRow>
      <Button
        leftIcon={<ThemeInteractionIcon type={'SAME_TASTE'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.sameTasteCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.sameTasteCount}
        onClick={(e) => handleSubmit(e, 'SAME_TASTE')}
      >
        {likesCnt.sameTasteCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'IMPRESSIVE_EXPRESSION'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.impressiveExpressionCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.impressiveExpressionCount}
        onClick={(e) => handleSubmit(e, 'IMPRESSIVE_EXPRESSION')}
      >
        {likesCnt.impressiveExpressionCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'WANT_TO_READ'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.wantToReadCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.wantToReadCount}
        onClick={(e) => handleSubmit(e, 'WANT_TO_READ')}
      >
        {likesCnt.wantToReadCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'RELATABLE'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.relatableCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.relatableCount}
        onClick={(e) => handleSubmit(e, 'RELATABLE')}
      >
        {likesCnt.relatableCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'HELPFUL'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.helpfulCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.helpfulCount}
        onClick={(e) => handleSubmit(e, 'HELPFUL')}
      >
        {likesCnt.helpfulCount}
      </Button>
    </StyleContainerRow>
  )
}

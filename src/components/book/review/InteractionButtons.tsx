'use client'

import { Button } from '@/components/common'
import {
  HelpfulIcon,
  ImpressiveExpressionIcon,
  RelatableIcon,
  SameTasteIcon,
  WantToReadIcon,
} from '@/assets/svgComponents'
import { LikesCntType, LikeType, MyLikesStatusType } from '@/types/record'
import { StyleContainerRow } from '@/styles/common/InteractionButtons.styles'
import { postLikeId } from '@/lib/client/post'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import ThemeInteractionIcon from '@/components/common/icon/ThemeInteractionIcon'

interface InteractionButtonProps {
  postId: number
  likesCnt: LikesCntType
  myLikesStatus: MyLikesStatusType
}

export default function InteractionButtons({ postId, likesCnt, myLikesStatus }: InteractionButtonProps) {
  const router = useRouter()
  const queryClient = useQueryClient()

  const handleSubmit = async (e: React.MouseEvent, likeType: LikeType) => {
    e.stopPropagation() // 함수 시작하자마자 전파 중단

    const result = await postLikeId(postId, likeType)
    if (result.success) {
      await queryClient.invalidateQueries({ queryKey: ['post'] })
      router.refresh()
    }
  }

  return (
    <StyleContainerRow>
      <Button
        leftIcon={<ThemeInteractionIcon type={'SameTasteType'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.sameTasteCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.sameTasteCount}
        onClick={(e) => handleSubmit(e, 'SAME_TASTE')}
      >
        {likesCnt.sameTasteCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'ImpressiveExpressionType'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.impressiveExpressionCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.impressiveExpressionCount}
        onClick={(e) => handleSubmit(e, 'IMPRESSIVE_EXPRESSION')}
      >
        {likesCnt.impressiveExpressionCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'WantToReadType'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.wantToReadCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.wantToReadCount}
        onClick={(e) => handleSubmit(e, 'WANT_TO_READ')}
      >
        {likesCnt.wantToReadCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'RelatableType'} />}
        width={70}
        size={'sm'}
        variant={myLikesStatus.relatableCount ? 'secondary' : 'outline'}
        isActive={myLikesStatus.relatableCount}
        onClick={(e) => handleSubmit(e, 'RELATABLE')}
      >
        {likesCnt.relatableCount}
      </Button>
      <Button
        leftIcon={<ThemeInteractionIcon type={'HelpfulType'} />}
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

import * as S from '@/styles/common/Common.styles'

interface SpinnerProps {
  size?: 'sm' | 'm' | 'lg'
}

export default function Spinner({ size = 'm' }: SpinnerProps) {
  return (
    <S.SpinnerWrapper>
      <S.Spinner size={size} />
    </S.SpinnerWrapper>
  )
}

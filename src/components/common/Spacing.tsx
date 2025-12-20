import { StyledSpacing } from '@/styles/common/Common.styles'

interface SpacingProps {
  height?: number
  width?: number
}

export default function Spacing({ height, width }: SpacingProps) {
  return <StyledSpacing $height={height} $width={width} />
}

import { StyledBackGroundList, StyledBackGroundSelector } from '@/styles/story/Story.styles'
import { CheckIcon, UncheckIcon } from '@/assets/svgComponents'

interface BackgroundOptionProps {
  bgColor: string
  selectBgColor: (bgColor: string) => void
}

export default function BackgroundOption({ bgColor, selectBgColor }: BackgroundOptionProps) {
  return (
    <StyledBackGroundList>
      <StyledBackGroundSelector
        onClick={() => selectBgColor('#FFFEF6')}
        $background={'#FFFEF6'}
        $isActive={bgColor === '#FFFEF6'}
      >
        {bgColor === '#FFFEF6' ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}
      </StyledBackGroundSelector>
      <StyledBackGroundSelector
        onClick={() => selectBgColor('#EFEFEE')}
        $background={'#EFEFEE'}
        $isActive={bgColor === '#EFEFEE'}
      >
        {bgColor === '#EFEFEE' ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}
      </StyledBackGroundSelector>
      <StyledBackGroundSelector
        onClick={() => selectBgColor('#E9FAFA')}
        $background={'#E9FAFA'}
        $isActive={bgColor === '#E9FAFA'}
      >
        {bgColor === '#E9FAFA' ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}
      </StyledBackGroundSelector>
      <StyledBackGroundSelector
        onClick={() => selectBgColor('#FFEFF0')}
        $background={'#FFEFF0'}
        $isActive={bgColor === '#FFEFF0'}
      >
        {bgColor === '#FFEFF0' ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}
      </StyledBackGroundSelector>
      <StyledBackGroundSelector
        onClick={() => selectBgColor('#FFE8BD')}
        $background={'#FFE8BD'}
        $isActive={bgColor === '#FFE8BD'}
      >
        {bgColor === '#FFE8BD' ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}
      </StyledBackGroundSelector>
    </StyledBackGroundList>
  )
}

import { Button, Label, Spacing } from '@/components/common'
import { baseColor, typography } from '@/styles/theme'
import { PrimaryDropDownIcon } from '@/assets/svgComponents'
import { RecordCards } from '@/components/mypage'

export default function Record() {
  return (
    <>
      <Label
        labelStyle={typography.subtitleLg}
        labelElement={
          <Button
            rightIcon={<PrimaryDropDownIcon width={20} height={20} />}
            variant={'ghost'}
            size={'sm'}
            width={85}
            textColor={baseColor.primary500}
          >
            펼치기
          </Button>
        }
      >
        기록
      </Label>
      <Spacing height={4} />
      <RecordCards />
    </>
  )
}

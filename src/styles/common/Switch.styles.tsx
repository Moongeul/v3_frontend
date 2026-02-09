import styled from '@emotion/styled'
import * as SwitchPrimitives from '@radix-ui/react-switch'

export const StyledSwitch = styled(SwitchPrimitives.Root)`
  all: unset;
  width: 60px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.iconStarFilled};
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  transition: background-color 200ms;

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.buttonActiveSecondary};
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`

// 2. 버튼(Thumb) 스타일링
export const StyledThumb = styled(SwitchPrimitives.Thumb)`
  display: block;
  width: 28px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.textFieldDefaultLine};
  border-radius: 9999px;
  transition: transform 200ms;
  transform: translateX(4px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(26px);
    background-color: ${({ theme }) => theme.colors.buttonActivePrimary};
  }
`

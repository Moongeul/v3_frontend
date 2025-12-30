import { CSSObject } from '@emotion/react'
import styled from '@emotion/styled'
import { TypographyType } from '@/styles/emotion'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
export const Label = styled.div<{ $labelStyle?: TypographyType }>`
  flex-shrink: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme, $labelStyle }) => ($labelStyle ? ($labelStyle as CSSObject) : (theme.typography.subtitleMd as CSSObject))}
`
export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.baseColor.secondary500};
  ${({ theme }) => theme.typography.subtitleMd as CSSObject}
`

export const Row = styled.div`
  display: flex;
  row-gap: 4px;
  align-items: start;
`

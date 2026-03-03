import { CSSObject } from '@emotion/react'
import styled from '@emotion/styled'
import { TypographyType } from '@/styles/emotion'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
export const Label = styled.div<{ $labelStyle?: TypographyType; $labelColor: string | undefined }>`
  flex-shrink: 0;
  white-space: pre-wrap; /* \\n 혹은 자연스러운 줄바꿈을 허용합니다 */
  word-break: keep-all; /* 한글 단어가 끊기지 않게 하려면 추가하세요 */
  color: ${({ theme, $labelColor }) => ($labelColor ? $labelColor : theme.colors.headerText)};
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
  width: 100%;
`

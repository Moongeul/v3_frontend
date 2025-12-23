'use client'

import styled from '@emotion/styled'

export const StyledSpacing = styled.div<{ $height?: number; $width?: number }>`
  flex: none;
  height: ${({ $height }) => ($height ? `${$height}px` : `0px`)};
  width: ${({ $width }) => ($width ? `${$width}px` : `0px`)};
`
export const BottomBorder = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.iconStarFilled};
`
export const PencilSketchEffect = () => {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id="pencil-texture">
        <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
      </filter>
    </svg>
  )
}

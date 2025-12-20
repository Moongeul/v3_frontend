'use client'

import styled from '@emotion/styled'

type HeaderType = 'default' | 'dynamic' | 'title'

export const Container = styled.div`
  padding: 8px 20px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`
export const Title = styled.h1<{ $headerType: HeaderType }>`
  ${({ theme, $headerType }) =>
    $headerType === 'default'
      ? theme.typography.titleLg
      : $headerType === 'title'
        ? theme.typography.titleMd
        : theme.typography.subtitleMd}
`
export const IconColumn = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`
export const EmptyIcon = styled.div`
  width: 36px;
  height: 36px;
`

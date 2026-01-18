'use client'

import * as Style from '@/styles/common/Header.styles'

import { useRouter } from 'next/navigation'
import { HeaderLeftArrowIcon, MoongeulIcon } from '@/assets/svgComponents'
import { HeaderLeftArrowIconPadding } from '@/styles/common/Header.styles'

type HeaderType = 'default' | 'dynamic' | 'title'

interface HeaderProps {
  headerType: HeaderType
  children?: React.ReactNode // 헤더 제목
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isBottomBorder?: boolean
  path?: string //dynamic 일 때 뒤로가기 경로
}

export default function Header({ headerType, children, leftIcon, rightIcon, isBottomBorder, path }: HeaderProps) {
  const router = useRouter()

  const onBack = () => {
    if (path) {
      router.push(path)
    } else {
      router.back()
    }
  }

  const renderHeaderType = (headerType: HeaderType) => {
    switch (headerType) {
      case 'dynamic':
        return (
          <Style.Header $isBottomBorder={isBottomBorder}>
            {leftIcon ? (
              <HeaderLeftArrowIconPadding>{leftIcon}</HeaderLeftArrowIconPadding>
            ) : (
              <HeaderLeftArrowIconPadding>
                <HeaderLeftArrowIcon onClick={onBack} width={20} height={20} />
              </HeaderLeftArrowIconPadding>
            )}
            <Style.Title $headerType={headerType}>{children}</Style.Title>
            {rightIcon ? rightIcon : <Style.EmptyIcon />}
          </Style.Header>
        )
      case 'default':
        return (
          <Style.Header $isBottomBorder={isBottomBorder}>
            <MoongeulIcon width={143} height={35} />
            <Style.IconColumn>
              {leftIcon ? leftIcon : <Style.EmptyIcon />}
              {rightIcon ? rightIcon : <Style.EmptyIcon />}
            </Style.IconColumn>
          </Style.Header>
        )
      case 'title':
        return (
          <Style.Header $isBottomBorder={isBottomBorder}>
            <Style.Title $headerType={headerType}>{children}</Style.Title>
            <Style.IconColumn>
              {leftIcon ? leftIcon : <Style.EmptyIcon />}
              {rightIcon ? rightIcon : <Style.EmptyIcon />}
            </Style.IconColumn>
          </Style.Header>
        )
    }
  }
  return renderHeaderType(headerType)
}

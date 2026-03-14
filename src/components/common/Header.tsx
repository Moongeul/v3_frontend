'use client'

import * as Style from '@/styles/common/Header.styles'

import { useRouter } from 'next/navigation'
import { HeaderLeftArrowIcon, MoongeulIcon } from '@/assets/svgComponents'
import { HeaderLeftArrowIconPadding } from '@/styles/common/Header.styles'
import { useTheme } from '@emotion/react'
import { DarkHeaderArrowIcon, DarkMoongeulIcon } from '@/assets/svgComponents/dark'

type HeaderType = 'default' | 'dynamic' | 'title'

interface HeaderProps {
  headerType: HeaderType
  children?: React.ReactNode // 헤더 제목
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isBottomBorder?: boolean
  onClick?: () => void
  path?: string //dynamic 일 때 뒤로가기 경로
}

export default function Header({
  headerType,
  onClick,
  children,
  leftIcon,
  rightIcon,
  isBottomBorder,
  path,
}: HeaderProps) {
  const router = useRouter()
  const theme = useTheme()

  // 현재 테마가 다크모드인지 확인 (테마 구조에 따라 theme.isDark 혹은 theme.mode === 'dark' 등으로 변경)
  const isDarkMode = theme.colors.background !== '#FFFFFD'

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
                {isDarkMode ? (
                  <DarkHeaderArrowIcon onClick={onClick ? onClick : onBack} width={32} height={32} />
                ) : (
                  <HeaderLeftArrowIcon onClick={onClick ? onClick : onBack} width={20} height={20} />
                )}
              </HeaderLeftArrowIconPadding>
            )}
            <Style.Title $headerType={headerType}>{children}</Style.Title>
            {rightIcon ? rightIcon : <Style.EmptyIcon />}
          </Style.Header>
        )
      case 'default':
        return (
          <Style.Header $isBottomBorder={isBottomBorder}>
            {isDarkMode ? <DarkMoongeulIcon width={143} height={35} /> : <MoongeulIcon width={143} height={35} />}

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

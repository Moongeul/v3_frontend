// src/styles/emotion.d.ts
import '@emotion/react'
import { memoment } from '@/styles/font'

export interface TypographyType {
  fontFamily: string
  fontSize: string
  fontWeight: number
  lineHeight: string
  letterSpacing: string
  fontStyle: string
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string
      headerText: string
      iconStarFilled: string
      famousSection: string
      rating: string
      textFieldFill: string
      textFieldDefaultLine: string
      textFieldDefaultText: string
      textFieldFocusLine: string
      textFieldFocusText: string
      textFieldFilledLine: string
      textFieldFilledText: string
      textFieldError: string
      buttonDefaultPrimary: string
      buttonActivePrimary: string
      buttonDefaultSecondary: string
      buttonActiveSecondary: string
      buttonTextSecondary: string
      buttonActiveGhost: string
      modalBackground: string
      modalFill: string
      baseColor: {
        //light-yellow
        lightYellow50: string
        lightYellow100: string
        lightYellow200: string
        lightYellow300: string
        lightYellow400: string
        lightYellow500: string
        lightYellow600: string
        lightYellow700: string
        lightYellow800: string
        lightYellow900: string
        //red
        red50: string
        red100: string
        red200: string
        red300: string
        red400: string
        red500: string
        red600: string
        red700: string
        red800: string
        red900: string
        //orange
        orange50: string
        orange100: string
        orange200: string
        orange300: string
        orange400: string
        orange500: string
        orange600: string
        orange700: string
        orange800: string
        orange900: string
        //green
        green50: string
        green100: string
        green200: string
        green300: string
        green400: string
        green500: string
        green600: string
        green700: string
        green800: string
        green900: string
        //gray
        gray50: string
        gray100: string
        gray200: string
        gray300: string
        gray400: string
        gray500: string
        gray600: string
        gray700: string
        gray800: string
        gray900: string
        //secondary
        secondary50: string
        secondary100: string
        secondary200: string
        secondary300: string
        secondary400: string
        secondary500: string
        secondary600: string
        secondary700: string
        secondary800: string
        secondary900: string
        //primary
        primary50: string
        primary100: string
        primary200: string
        primary300: string
        primary400: string
        primary500: string
        primary600: string
        primary700: string
        primary800: string
        primary900: string
      }
    }
    typography: {
      myeongjoBody: TypographyType
      memomentBody: TypographyType
      memomentTitle: TypographyType
      titleLg: TypographyType
      titleMd: TypographyType
      titleSm: TypographyType
      subtitleLg: TypographyType
      subtitleMd: TypographyType
      subtitleSm: TypographyType
      bodyMd: TypographyType
      bodySm: TypographyType
      buttonMd: TypographyType
      small: TypographyType
      badgeMd: TypographyType
      badgeSm: TypographyType
      caption: TypographyType
    }
  }
}

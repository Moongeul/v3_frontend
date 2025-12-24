'use client'

import * as Style from '@/styles/common/DropDown.styles'

import PrivacyDropDown from '@/components/common/dropdown/PrivacyDropDown'
import CategoryDropDown from '@/components/common/dropdown/CategoryDropDown'
import { CategoryType } from '@/types/write'

interface DropDownContainerProps {
  categories: CategoryType[] | undefined
}

export default function DropDownContainer({ categories }: DropDownContainerProps) {
  return (
    <Style.DropDownContainer>
      <PrivacyDropDown />
      <CategoryDropDown categories={categories} />
    </Style.DropDownContainer>
  )
}

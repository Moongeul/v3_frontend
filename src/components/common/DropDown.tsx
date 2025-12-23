'use client'

import { ReactNode } from 'react'
import { DropDownIcon, DropUpIcon, InitDropDownIcon } from '@/assets/svgComponents'
import * as Style from '@/styles/common/DropDown.styles'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

interface DropDownProps {
  isDropDownOpen: boolean
  dropDownHandler: () => void
  defaultValue: string
  selectedValue: string | undefined
  children: ReactNode
  width?: number
}
export default function DropDown({
  isDropDownOpen,
  dropDownHandler,
  defaultValue,
  children,
  selectedValue,
  width,
}: DropDownProps) {
  return (
    <Style.DropDown $width={width}>
      <PencilSketchEffect />
      <SelectBox
        isDropDownOpen={isDropDownOpen}
        dropDownHandler={dropDownHandler}
        defaultValue={defaultValue}
        selectedValue={selectedValue}
      />
      {isDropDownOpen ? <SelectOption>{children}</SelectOption> : null}
    </Style.DropDown>
  )
}

function SelectBox({
  defaultValue,
  selectedValue,
  dropDownHandler,
  isDropDownOpen,
}: {
  defaultValue: string
  selectedValue: string | undefined
  dropDownHandler: () => void
  isDropDownOpen: boolean
}) {
  return (
    <Style.SelectBox onClick={dropDownHandler} $isSelectedValue={selectedValue !== undefined} $isFocus={isDropDownOpen}>
      {!selectedValue ? <p>{defaultValue}</p> : <p>{selectedValue}</p>}
      {!selectedValue && !isDropDownOpen ? (
        <InitDropDownIcon width={20} height={20} />
      ) : isDropDownOpen ? (
        <DropUpIcon width={20} height={20} />
      ) : (
        <DropDownIcon width={20} height={20} />
      )}
    </Style.SelectBox>
  )
}

function SelectOption({ children }: { children: ReactNode }) {
  return <>{children}</>
}

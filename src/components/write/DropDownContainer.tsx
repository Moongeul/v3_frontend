'use client'

import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import * as Style from '@/styles/common/DropDown.styles'
import DropDown from '@/components/common/DropDown'
import Button from '@/components/common/Button'
import { AddBlackIcon, AddIcon } from '@/assets/svgComponents'

export default function DropDownContainer() {
  const [selectedDropDownPrivacy, setSelectedDropDownPrivacy] = useState<string | undefined>('전체 보기')
  const [selectedDropDownCategory, setSelectedDropDownCategory] = useState<string | undefined>()
  const [isDropDownPrivacyOpen, setIsDropDownPrivacyOpen] = useState(false)
  const [isDropDownCategoryOpen, setIsDropDownCategoryOpen] = useState(false)

  const privacyOptionList = ['전체 보기', '팔로워 공개', '나만보기']
  const [categoryOptionList, setCategoryOptionList] = useState([])

  const selectedDropDownHandler = useCallback(
    (content: string, setSelectedDropDown: Dispatch<SetStateAction<string | undefined>>) => {
      setSelectedDropDown(content)
    },
    []
  )

  const dropDownPrivacyHandler = useCallback(() => {
    setIsDropDownPrivacyOpen(!isDropDownPrivacyOpen)
  }, [isDropDownPrivacyOpen])

  const dropDownCategoryHandler = useCallback(() => {
    setIsDropDownCategoryOpen(!isDropDownCategoryOpen)
  }, [isDropDownCategoryOpen])

  return (
    <Style.DropDownContainer>
      <DropDown
        isDropDownOpen={isDropDownPrivacyOpen}
        dropDownHandler={dropDownPrivacyHandler}
        defaultValue={'팔로워 공개'}
        selectedValue={selectedDropDownPrivacy}
        width={180}
      >
        <Style.SelectOption>
          {privacyOptionList.map((privacyOption) => (
            <Style.SelectOptionItem
              onClick={() => {
                selectedDropDownHandler(privacyOption, setSelectedDropDownPrivacy)
                dropDownPrivacyHandler()
              }}
            >
              {privacyOption}
            </Style.SelectOptionItem>
          ))}
        </Style.SelectOption>
      </DropDown>
      <DropDown
        isDropDownOpen={isDropDownCategoryOpen}
        dropDownHandler={dropDownCategoryHandler}
        defaultValue={'카테고리'}
        selectedValue={selectedDropDownCategory}
      >
        <Style.SelectOption>
          {categoryOptionList.map((categoryOption) => (
            <Style.SelectOptionItem
              onClick={() => {
                selectedDropDownHandler(categoryOption, setSelectedDropDownCategory)
                dropDownCategoryHandler()
              }}
            >
              {categoryOption}
            </Style.SelectOptionItem>
          ))}
          <Button
            onClick={() => {}}
            width={50}
            leftIcon={<AddBlackIcon width={15} height={15} />}
            size={'sm'}
            variant={'ghost'}
            isActive={true}
          >
            추가
          </Button>
        </Style.SelectOption>
      </DropDown>
    </Style.DropDownContainer>
  )
}

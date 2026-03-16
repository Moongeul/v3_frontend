'use client'

import * as Style from '@/styles/common/DropDown.styles'

import DropDown from '@/components/common/DropDown'
import { PostVisibilityEnumType } from '@/types/write'
import { useDropDown } from '@/hooks'
import { useEditStore } from '@/store/editStore'

export default function EditPrivacyDropDown() {
  const privacyOptionList: { content: string; enum: PostVisibilityEnumType }[] = [
    { content: '전체 공개', enum: 'PUBLIC' },
    { content: '팔로워 공개', enum: 'FOLLOWERS' },
    { content: '나만보기', enum: 'PRIVATE' },
  ]

  const { isDropDownOpen, dropDownOpenHandler, selectedDropDownContent, selectedDropDownHandler } = useDropDown({
    initialValue: '전체 공개',
    defaultValue: '전체 공개',
  })

  const { editData, setField } = useEditStore((state) => state)

  return (
    <DropDown
      isDropDownOpen={isDropDownOpen}
      dropDownHandler={dropDownOpenHandler}
      defaultValue={'팔로워 공개'}
      selectedValue={selectedDropDownContent}
      width={180}
    >
      <Style.SelectOption>
        {privacyOptionList.map((privacyOption) => (
          <Style.SelectOptionItem
            key={privacyOption.enum}
            onClick={() => {
              setField('postVisibility', privacyOption.enum)
              selectedDropDownHandler(privacyOption.content)
              dropDownOpenHandler()
            }}
          >
            {privacyOption.content}
          </Style.SelectOptionItem>
        ))}
      </Style.SelectOption>
    </DropDown>
  )
}

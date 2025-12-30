'use client'

import * as Style from '@/styles/common/DropDown.styles'

import DropDown from '@/components/common/DropDown'
import { useWriteStore } from '@/store/writeStore'
import { PostVisibilityEnumType } from '@/types/write'
import { useDropDown } from '@/hooks'

export default function PrivacyDropDown() {
  const privacyOptionList: { content: string; enum: PostVisibilityEnumType }[] = [
    { content: '전체 보기', enum: 'PUBLIC' },
    { content: '팔로워 공개', enum: 'FOLLOWERS' },
    { content: '나만보기', enum: 'PRIVATE' },
  ]

  const { isDropDownOpen, dropDownOpenHandler, selectedDropDownContent, selectedDropDownHandler } = useDropDown({
    initialValue: '전체 보기',
    defaultValue: '전체 보기',
  })

  const setState = useWriteStore((state) => state.setState)
  const writeData = useWriteStore((state) => state.writeData)

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
              setState({
                ...writeData,
                writeData: { ...writeData, postVisibility: privacyOption.enum },
              })
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

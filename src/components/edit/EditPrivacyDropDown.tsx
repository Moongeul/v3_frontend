'use client'

import { useEffect } from 'react'
import * as Style from '@/styles/common/DropDown.styles'
import DropDown from '@/components/common/DropDown'
import { PostVisibilityEnumType } from '@/types/write'
import { useDropDown } from '@/hooks'
import { useEditStore } from '@/store/editStore'

interface EditPrivacyDropDownProps {
  selectedPrivacyDropDown: PostVisibilityEnumType
  isbn: string
}

export default function EditPrivacyDropDown({ selectedPrivacyDropDown, isbn }: EditPrivacyDropDownProps) {
  const privacyOptionList: { content: string; enum: PostVisibilityEnumType }[] = [
    { content: '전체 공개', enum: 'PUBLIC' },
    { content: '팔로워 공개', enum: 'FOLLOWERS' },
    { content: '나만보기', enum: 'PRIVATE' },
  ]

  // 전달받은 enum 값을 통해 초기 텍스트(Label) 찾기
  const initialLabel = privacyOptionList.find((opt) => opt.enum === selectedPrivacyDropDown)?.content || '전체 공개'

  const { isDropDownOpen, dropDownOpenHandler, selectedDropDownContent, selectedDropDownHandler } = useDropDown({
    initialValue: initialLabel,
    defaultValue: '전체 공개',
  })

  const { setField } = useEditStore((state) => state)

  // ✨ 핵심: 처음에 들어오자마자 스토어와 UI 라벨을 프롭 값으로 초기화
  useEffect(() => {
    if (selectedPrivacyDropDown) {
      // 1. 스토어 데이터 초기화
      setField('postVisibility', selectedPrivacyDropDown)
      setField('isbn', isbn)
      // 2. 드롭다운 UI 라벨 초기화 (이미 useDropDown에서 처리되지만, 프롭 변경 대응을 위해 유지)
      selectedDropDownHandler(initialLabel)
    }
  }, [selectedPrivacyDropDown, initialLabel, setField, selectedDropDownHandler])

  return (
    <DropDown
      isDropDownOpen={isDropDownOpen}
      dropDownHandler={dropDownOpenHandler}
      defaultValue={initialLabel}
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

import { DropDown } from '@/components/common'
import * as Style from '@/styles/common/DropDown.styles'
import { useDropDown } from '@/hooks'
import { CategoryRecordSortByType } from '@/types/mypage'
import { Dispatch, SetStateAction } from 'react'
import { StyleMyPageRecordSortByDropDownContainer } from '@/styles/mypage/Record.styles'

interface SortByDropDownProps {
  setSortBy: Dispatch<SetStateAction<CategoryRecordSortByType>>
}

export default function SortByDropDown({ setSortBy }: SortByDropDownProps) {
  const privacyOptionList: { content: string; enum: CategoryRecordSortByType }[] = [
    { content: '최신순', enum: 'LATEST' },
    { content: '오래된 순', enum: 'OLDEST' },
    { content: '평점 높은 순', enum: 'RATING_HIGH' },
    { content: '평점 낮은 순', enum: 'RATING_LOW' },
  ]

  const { isDropDownOpen, dropDownOpenHandler, selectedDropDownContent, selectedDropDownHandler } = useDropDown({
    initialValue: '최신순',
    defaultValue: '전체 공개',
  })

  return (
    <StyleMyPageRecordSortByDropDownContainer>
      <DropDown
        isDropDownOpen={isDropDownOpen}
        dropDownHandler={dropDownOpenHandler}
        defaultValue={'최신순'}
        selectedValue={selectedDropDownContent}
        width={120}
      >
        <Style.SelectOption>
          {privacyOptionList.map((privacyOption) => (
            <Style.SelectOptionItem
              key={privacyOption.enum}
              onClick={() => {
                setSortBy(privacyOption.enum)
                selectedDropDownHandler(privacyOption.content)
                dropDownOpenHandler()
              }}
            >
              {privacyOption.content}
            </Style.SelectOptionItem>
          ))}
        </Style.SelectOption>
      </DropDown>
    </StyleMyPageRecordSortByDropDownContainer>
  )
}

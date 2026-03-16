'use client'

import { useState } from 'react'
import * as Style from '@/styles/common/DropDown.styles'

import { AddBlackIcon } from '@/assets/svgComponents'

import Button from '@/components/common/Button'
import DropDown from '@/components/common/DropDown'
import { CategoryType } from '@/types/write'
import { createCategory } from '@/lib/client/write'
import { useDropDown } from '@/hooks'
import { useEditStore } from '@/store/editStore'

interface EditCategoryDropDownProps {
  categories: CategoryType[] | undefined
}

export default function EditCategoryDropDown({ categories }: EditCategoryDropDownProps) {
  const [categoryList, setCategoryList] = useState<CategoryType[]>(categories ?? [])
  const [newCategoryName, setNewCategoryName] = useState<string>('')
  const [isInputOpen, setIsInputOpen] = useState(false)

  const { isDropDownOpen, selectedDropDownContent, selectedDropDownHandler, dropDownOpenHandler } = useDropDown({
    initialValue: '카테고리',
  })

  const { editData, setField } = useEditStore()

  // 1. 카테고리 선택 핸들러
  const handleSelectCategory = (category: CategoryType) => {
    setField('categoryId', category.categoryId)
    selectedDropDownHandler(category.title)
    dropDownOpenHandler()
  }

  // 2. 새 카테고리 추가 핸들러
  const handleAddCategory = async () => {
    const trimmedName = newCategoryName.trim()
    if (!trimmedName) return

    try {
      const result = await createCategory(trimmedName)
      const newCategoryData = result.data?.data

      if (newCategoryData) {
        setCategoryList((prev) => [...prev, newCategoryData])
        setNewCategoryName('')
        setIsInputOpen(false)
      }
    } catch (error) {
      console.error('카테고리 추가 실패:', error)
      // 필요한 경우 에러 토스트 메시지 추가
    }
  }

  return (
    <DropDown
      isDropDownOpen={isDropDownOpen}
      dropDownHandler={dropDownOpenHandler}
      defaultValue={'카테고리'}
      selectedValue={selectedDropDownContent}
    >
      <Style.SelectOption>
        {categoryList?.map((categoryOption) => (
          <Style.SelectOptionItem key={categoryOption.categoryId} onClick={() => handleSelectCategory(categoryOption)}>
            {categoryOption.title}
          </Style.SelectOptionItem>
        ))}
        {isInputOpen && (
          <Style.SelectOptionInputContainer>
            <Style.SelectOptionInput
              value={newCategoryName}
              onChange={(e) => {
                setNewCategoryName(e.target.value)
              }}
              placeholder={'새 카테고리명 작성'}
            />
            <Button onClick={handleAddCategory} width={50} variant={'outline'} size={'sm'}>
              완료
            </Button>
          </Style.SelectOptionInputContainer>
        )}
        <Button
          onClick={() => {
            setIsInputOpen(true)
          }}
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
  )
}

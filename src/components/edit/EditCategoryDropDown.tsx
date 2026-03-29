'use client'

import { useState, useEffect, useMemo } from 'react'
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
  selectedCategoryId: number
}

export default function EditCategoryDropDown({ categories, selectedCategoryId }: EditCategoryDropDownProps) {
  const [categoryList, setCategoryList] = useState<CategoryType[]>(categories ?? [])
  const [newCategoryName, setNewCategoryName] = useState<string>('')
  const [isInputOpen, setIsInputOpen] = useState(false)

  const { setField } = useEditStore()

  // 1. 현재 선택된 카테고리의 객체와 타이틀을 계산
  // categories가 undefined일 수 있으므로 useMemo로 안전하게 추출합니다.
  const initialCategory = useMemo(() => {
    return categories?.find((c) => c.categoryId === selectedCategoryId)
  }, [categories, selectedCategoryId])

  const { isDropDownOpen, selectedDropDownContent, selectedDropDownHandler, dropDownOpenHandler } = useDropDown({
    initialValue: initialCategory?.title || '카테고리',
  })

  // 2. 외부 props(categories)가 로드되거나 변경되면 내부 상태 업데이트
  useEffect(() => {
    if (categories) {
      setCategoryList(categories)
    }
  }, [categories])

  // 3. 수정 모드 진입 시, 선택된 ID에 맞는 타이틀을 드롭다운 라벨에 동기화
  useEffect(() => {
    if (initialCategory) {
      selectedDropDownHandler(initialCategory.title)
      setField('categoryId', initialCategory.categoryId)
    }
  }, [initialCategory, selectedDropDownHandler, setField])

  // 카테고리 선택 핸들러
  const handleSelectCategory = (category: CategoryType) => {
    setField('categoryId', category.categoryId)
    selectedDropDownHandler(category.title)
    dropDownOpenHandler()
  }

  // 새 카테고리 추가 핸들러
  const handleAddCategory = async () => {
    const trimmedName = newCategoryName.trim()
    if (!trimmedName) return

    try {
      const result = await createCategory(trimmedName)
      const newCategoryData = result.data?.data

      if (newCategoryData) {
        setCategoryList((prev) => [...prev, newCategoryData])
        setField('categoryId', newCategoryData.categoryId) // 추가 후 바로 선택되게 설정
        selectedDropDownHandler(newCategoryData.title)
        setNewCategoryName('')
        setIsInputOpen(false)
      }
    } catch (error) {
      console.error('카테고리 추가 실패:', error)
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
          <Style.SelectOptionItem
            key={categoryOption.categoryId}
            onClick={() => handleSelectCategory(categoryOption)}
            style={{ fontWeight: categoryOption.categoryId === selectedCategoryId ? 'bold' : 'normal' }} // 선택된 항목 강조 (옵션)
          >
            {categoryOption.title}
          </Style.SelectOptionItem>
        ))}

        {isInputOpen ? (
          <Style.SelectOptionInputContainer>
            <Style.SelectOptionInput
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder={'새 카테고리명 작성'}
              autoFocus
            />
            <Button onClick={handleAddCategory} width={50} variant={'outline'} size={'sm'}>
              완료
            </Button>
          </Style.SelectOptionInputContainer>
        ) : (
          <Button
            onClick={(e) => {
              e.stopPropagation() // 드롭다운이 닫히지 않게 방지
              setIsInputOpen(true)
            }}
            width={50}
            leftIcon={<AddBlackIcon width={15} height={15} />}
            size={'sm'}
            variant={'ghost'}
          >
            추가
          </Button>
        )}
      </Style.SelectOption>
    </DropDown>
  )
}

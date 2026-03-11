import * as Style from '@/styles/common/DropDown.styles'
import DropDown from '../DropDown'
import { useDropDown } from '@/hooks'
import { useMypageStore } from '@/store/mypageStore'

export default function WithdrawDropDown() {
  const withdrawOptionList: { content: string; enum: string }[] = [
    { content: '앱 콘탠츠가 부족하거나 만족스럽지 않아서', enum: '앱 콘탠츠가 부족하거나 만족스럽지 않아서' },
    { content: '이용이 불편하고 장애가 많아서', enum: '이용이 불편하고 장애가 많아서' },
    { content: '다른 사이트가 더 좋아서', enum: '다른 사이트가 더 좋아서' },
    { content: '기타', enum: '기타' },
  ]

  const { isDropDownOpen, dropDownOpenHandler, selectedDropDownContent, selectedDropDownHandler } = useDropDown({
    initialValue: '탈퇴 사유 선택',
    defaultValue: '탈퇴 사유 선택',
  })

  const { updateWithdrawData } = useMypageStore((state) => state)

  return (
    <DropDown
      isDropDownOpen={isDropDownOpen}
      dropDownHandler={dropDownOpenHandler}
      defaultValue={'탈퇴 사유 선택'}
      selectedValue={selectedDropDownContent}
    >
      <Style.SelectOption>
        {withdrawOptionList.map((withdrawOption) => (
          <Style.SelectOptionItem
            key={withdrawOption.enum}
            onClick={() => {
              updateWithdrawData('reason', withdrawOption.content)
              selectedDropDownHandler(withdrawOption.content)
              dropDownOpenHandler()
            }}
          >
            {withdrawOption.content}
          </Style.SelectOptionItem>
        ))}
      </Style.SelectOption>
    </DropDown>
  )
}

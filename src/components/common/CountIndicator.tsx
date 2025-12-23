import * as Style from '@/styles/common/TextInput.styles'

export default function CountIndicator({
  maxLength,
  valueLength,
  isError,
  textType,
}: {
  maxLength: number
  valueLength: number
  isError?: boolean | undefined
  textType: 'textField' | 'textArea'
}) {
  return textType === 'textField' ? (
    <Style.CountTextFieldIndicator $isError={isError}>
      {valueLength}/{maxLength.toLocaleString()}
    </Style.CountTextFieldIndicator>
  ) : (
    <Style.CountTextAreaIndicator $isError={isError}>
      {valueLength}/{maxLength.toLocaleString()}
    </Style.CountTextAreaIndicator>
  )
}

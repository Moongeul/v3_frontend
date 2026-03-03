import { StyledErrorMessage } from '@/styles/common/Message.styles'

interface ErrorMessageProps {
  message: string
}
export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <StyledErrorMessage>{message}</StyledErrorMessage>
}

import { StyledSuccessMessage } from '@/styles/common/Message.styles'

interface SuccessMessageProps {
  message: string
}
export default function SuccessMessage({ message }: SuccessMessageProps) {
  return <StyledSuccessMessage>{message}</StyledSuccessMessage>
}

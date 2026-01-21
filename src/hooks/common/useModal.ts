import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModalState = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleModalState }
}

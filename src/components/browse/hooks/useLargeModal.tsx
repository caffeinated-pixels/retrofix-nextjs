import { useState, MouseEvent } from 'react'

export const useLargeModal = () => {
  const [displayModal, setDisplayModal] = useState(false)
  console.log(
    '🚀 turbo ~ useLargeModal.tsx:5 ~ useLargeModal ~ displayModal:',
    displayModal
  )

  const handleShowModal = () => {
    console.log('turbo handle show modal')
    setDisplayModal(true)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    // add delay to stop Play button also being activated!
    setTimeout(() => {
      if (e.key === 'Enter') {
        setDisplayModal(true)
      }
    }, 10)
  }

  const handleCloseModal = (e?: MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation()
    // if the event object exists, we need to stop event bubbling up to Container & calling handleShowModal()

    setDisplayModal(false)
  }

  return { displayModal, handleShowModal, handleKeyDown, handleCloseModal }
}

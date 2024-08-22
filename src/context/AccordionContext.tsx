import { createContext, useState, useContext, PropsWithChildren } from 'react'

type AccordionContextType = {
  activeAccordionItem: string | null
  setToggle: (currentAccordionItem: string) => void
}

const AccordionContext = createContext<AccordionContextType>(
  {} as AccordionContextType
)

export const AccordionContextProvider = ({ children }: PropsWithChildren) => {
  const [activeAccordionItem, setActiveAccordionItem] = useState<string | null>(
    null
  )

  const setToggle = (currentAccordionItem: string) => {
    setActiveAccordionItem(() => {
      if (activeAccordionItem !== currentAccordionItem) {
        // set currentAccordionItem as activeAccordionItem
        return currentAccordionItem
      } else {
        // set null as activeAccordionItem
        return null
      }
    })
  }

  return (
    <AccordionContext.Provider value={{ activeAccordionItem, setToggle }}>
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordionContext = () => useContext(AccordionContext)

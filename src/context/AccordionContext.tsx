import {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useCallback,
} from 'react'

type AccordionContextType = {
  activeAccordionItem: string | null
  toggleAccordionItem: (currentAccordionItem: string) => void
}

const AccordionContext = createContext<AccordionContextType>({
  activeAccordionItem: null,
  toggleAccordionItem: () => {},
})

export const AccordionContextProvider = ({ children }: PropsWithChildren) => {
  const [activeAccordionItem, setActiveAccordionItem] = useState<string | null>(
    null
  )

  const toggleAccordionItem = useCallback((currentAccordionItem: string) => {
    setActiveAccordionItem((prev) =>
      prev !== currentAccordionItem ? currentAccordionItem : null
    )
  }, [])

  return (
    <AccordionContext.Provider
      value={{ activeAccordionItem, toggleAccordionItem }}
    >
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordionContext = () => useContext(AccordionContext)

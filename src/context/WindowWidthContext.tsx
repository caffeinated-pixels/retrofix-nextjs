import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

const WindowWidthContext = createContext<number | null>(null)

export const WindowWidthContextProvider = ({ children }: PropsWithChildren) => {
  const [width, setWidth] = useState(0)

  // useLayoutEffect runs before React renders the component making it a better choice for DOM measurement than useEffect, which runs after rendering/screen painting
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    if (width === 0) {
      setWidth(window.innerWidth)
    }

    const updateWidth = () => setWidth(window.innerWidth)

    // updates state when screen width changes
    window.addEventListener('resize', updateWidth)

    // clean up event listener
    return () => window.removeEventListener('resize', updateWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <WindowWidthContext.Provider value={width}>
      {children}
    </WindowWidthContext.Provider>
  )
}

export const useWindowWidthContext = () => useContext(WindowWidthContext)

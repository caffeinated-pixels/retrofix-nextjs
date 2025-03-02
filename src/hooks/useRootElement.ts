import { useEffect, useRef } from 'react'

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)

  document.body.appendChild(rootContainer)

  return rootContainer
}

/**
 * Creates a root element in the dom for you to use in portals, modals, tooltips, etc
 * @param id the id of the element you want to create
 * @param mounted whether or not the component is mounted, this is a special case for nextjs because we don't want to run this function server side
 * @returns the root element for you to use in a portal, modal, etc
 */
export const useRootElement = (id: string, mounted: boolean) => {
  const rootElemRef = useRef<Element | null>(null)

  useEffect(() => {
    if (!mounted) {
      return
    }

    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`)
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id)

    // Add the detached element to the parent
    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current)
    }

    return () => {
      if (rootElemRef.current) {
        rootElemRef.current.remove()
      }

      if (!parentElem.childElementCount) {
        parentElem.remove()
      }
    }
  }, [id, mounted])

  const getRootElement = () => {
    if (!rootElemRef.current && mounted) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }

  return getRootElement()
}

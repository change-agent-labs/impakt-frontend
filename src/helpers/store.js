import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()
const initialState = { region: null, menuOpened: false }

const reducer = (state, action) => {
  switch (action.type) {
    case 'setRegion':
      return {
        region: action.payload,
        menuOpened: false,
      }
    case 'toggleMenu':
      return {
        menuOpened: !state.menuOpened,
      }
    case 'reset':
      return {
        region: null,
        menuOpened: false,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)

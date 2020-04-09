import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()
const initialState = {
  region: null,
  numberOfUsers: Math.floor((Math.random() * 100) + 1),
  menuOpened: false
}

const replace = (state, keyToReplace, value) => {
  let newState = state
  newState[keyToReplace] = value
  return {
    ...newState
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setRegion':
      return replace(state, 'region', action.payload)
    case 'toggleMenu':
      return replace(state, 'menuOpened', !state.menuOpened)
    case 'reset':
      return initialState
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

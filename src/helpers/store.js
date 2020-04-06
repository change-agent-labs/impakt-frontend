import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()
const initialState = { count: 0, message: '', region: null }

const reducer = (state, action) => {
  switch (action.type) {
    case 'setRegion':
      return {
        region: action.payload,
        message: `Region ${action.payload} set`
      }
    case 'reset':
      return {
        region: null,
        message: 'Store reseted'
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

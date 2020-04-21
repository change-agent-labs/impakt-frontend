import React, { createContext, useContext, useReducer } from 'react'
import events from './dummyData/mockedNewsAndEvents.json' // mocking data with https://mockaroo.com/
import orderBy from 'lodash/orderBy'

const StoreContext = createContext()
const initialState = {
  region: null,
  numberOfUsers: Math.floor((Math.random() * 100) + 1),
  menuOpened: false,
  events: orderBy(events, (e) => new Date(e.date), 'asc'),
  focusedEvent: 1,
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
      let tempState = replace(
        state, 'events', orderBy(events.filter((e) => e.region === action.payload), (e) => new Date(e.date), 'asc'))
      return replace(tempState, 'region', action.payload)
    case 'toggleMenu':
      return replace(state, 'menuOpened', !state.menuOpened)
    case 'setFocusedEvent':
      return replace(state, 'focusedEvent', action.payload)
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

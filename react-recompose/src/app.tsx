import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { withReducer } from 'recompose'

import {
  AppAction,
  AppActionTypes,
  addNewThing,
  updateNewThingText,
} from './actions'

export interface AppState {
  things: string[]
  newThingText: string
}

export const initialState: AppState = {
  things: ['shoe'],
  newThingText: '',
}

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case AppActionTypes.AddNewThing:
      return { ...state, things: state.things.concat(action.payload) }
    case AppActionTypes.NewThingTextChange
      return { ... state, newThingText: action.payload }
    default:
      return state
  }
}

const App = withReducer('state', 'dispatch', appReducer, initialState)(
  ({ state, dispatch }) => {
    function handleNewThingInputChange ({ target }) {
      dispatch(updateNewThingText(target.value))
    }

    function handleAddNewThingButtonClick ({ preventDefault }) {
      dispatch(addNewThing(state.newThingText))
    }

    const newShoe = () => dispatch(addNewThing('another shoe'))

    return (
      <div>
        <h1>Look, some things!</h1>
        <ul>
          {state.things.map((t, i) => <li key={i} >{t}</li>)}
        </ul>
        <button onClick={newShoe}>New shoe!</button>
        <input type="text" onChange={handleNewThingInputChange} value={state.newThingText} />
        <button onClick={handleAddNewThingButtonClick}>Add Thing</button>
      </div>
    )
  }
)

// Turn App into a component that receives a reducer

ReactDOM.render(<App />, document.getElementById('main'))

export type AppAction
  = AddNewThingAction
  | NewThingTextChangeAction
  
export enum AppActionTypes {
  AddNewThing = 'App/Actions/AddNewThing',
  NewThingTextChange = 'App/Actions/NewThingTextChange',
}

// Action Creators

interface AddNewThingAction {
  type: AppActionTypes.AddNewThing
  payload: string
}

export function addNewThing (thing: string): AddNewThingAction {
  return { type: AppActionTypes.AddNewThing, payload: thing }
}

interface NewThingTextChangeAction {
  type: AppActionTypes.NewThingTextChange
  payload: string
}

export function updateNewThingText (text: string): NewThingTextChangeAction {
  return { type: AppActionTypes.NewThingTextChange, payload: text }
}

import {
  INITIALIZE_MODAL,
  DESTROY_MODAL,
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actions/modal'

const modalInitialState = { isOpen: false }

function modal(state = modalInitialState, action) {
  switch (action.type) {
    case INITIALIZE_MODAL: return modalInitialState
    case SHOW_MODAL: return {
      ...state,
      isOpen: true
    }
    case HIDE_MODAL: return {
      ...state,
      isOpen: false
    }
    default: return state
  }
}

function modalReducer (state = {}, action) {
  const modalKey = action.payload && action.payload.modalKey

  if (typeof modalKey === 'undefined') { return state }

  if(action.type === DESTROY_MODAL) {
    const { ...nextState, [modalKey]: _ } = state
    return nextState
  }

  return {
    ...state,
    [modalKey]: modal(state[modalKey], action)
  }
}

export default modalReducer

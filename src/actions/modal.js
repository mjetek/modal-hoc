export const INITIALIZE_MODAL = 'modal/INITIALIZE_MODAL'
export const DESTROY_MODAL='modal/DESTROY_MODAL'
export const SHOW_MODAL = 'modal/SHOW_MODAL'
export const HIDE_MODAL = 'modal/HIDE_MODAL'

export const initializeModal = modalKey => ({
  type: INITIALIZE_MODAL,
  payload: { modalKey }
})

export const destroyModal = modalKey => ({
  type: DESTROY_MODAL,
  payload: { modalKey }
})

export const showModal = modalKey => ({
  type: SHOW_MODAL,
  payload: { modalKey }
})

export const hideModal = modalKey => ({
  type: HIDE_MODAL,
  payload: { modalKey }
})

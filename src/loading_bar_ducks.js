export const SHOW = 'loading-bar/SHOW'
export const HIDE = 'loading-bar/HIDE'
export const RESET = 'loading-bar/RESET'

export function showLoading() {
  return {
    type: SHOW,
  }
}

export function hideLoading() {
  return {
    type: HIDE,
  }
}

export function resetLoading() {
  return {
    type: RESET,
  }
}

export function loadingBarReducer(state = 0, action = {}) {
  let newState

  switch (action.type) {
    case SHOW:
      newState = true
      break
    case HIDE:
      newState = false
      break
    case RESET:
      newState = false
      break
    default:
      return state
  }

  return newState
}
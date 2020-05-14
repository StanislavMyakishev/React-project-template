import * as types from '../common/actionTypes/dictionary'

export const initialState = {
  words: [],
}

export default function dictionary(state = initialState, action) {
  switch (action.type) {
    case types.ADD_WORD:
      return { ...state, words: [...state.words, action.data] }
    default:
      return state
  }
}

import {
  ADD_HEADER,
  TOGGLE_EDIT_HEADER,
} from '../actions'

const default_state = { desc: '', img: '', editing: false }

const IntroReducer = (state = default_state, action) => {
  const {
    type,
    desc,
    img,
    editing,
  } = action

  // cases for type of action
  switch (type) {
    case ADD_HEADER:
      return ({
        desc,
        img,
        editing,
      })
    case TOGGLE_EDIT_HEADER:
      return { ...state, editing: !state.editing }
    default:
      return state
  }
}

export default IntroReducer

import {
  ADD_POST,
  TOGGLE_DELETED,
  TOGGLE_EDITING,
} from '../actions'

const default_state = []

const PostReducer = (state = default_state, action) => {
  const {
    type,
    id,
    title,
    desc,
    img,
    editing,
    deleted,
  } = action

  // cases for type of action
  switch (type) {
    case ADD_POST:
      return [...state, {
        id,
        title,
        desc,
        img,
        editing,
        deleted,
      }]

    case TOGGLE_DELETED:
      return state.filter(post => post.id !== id)

    case TOGGLE_EDITING:
      return state.map(post => {
        if (post.id === id) {
          return { ...post, editing: !post.editing }
        }
        return post
      })

    default:
      return state
  }
}

export default PostReducer

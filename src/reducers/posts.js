import {
  ADD_POST,
  TOGGLE_DELETED,
  TOGGLE_EDITING,
  // EDIT_POST,
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
      // return state.map(post => {
      //   if (post.id === id) {
      //     return { ...post, deleted: !post.deleted }
      //   }

      //   return post
      // })
    case TOGGLE_EDITING:
      return state.map(post => {
        if (post.id === id) {
          return { ...post, editing: !post.editing }
        }

        return post
      })
      // case EDIT_POST:
      //   return state.map(post => {
      //     if (post.id === id) {
      //       return { ...post, editing: !post.editing }
      //     }

      //     return post
      //   })
    default:
      return state
  }
}

export default PostReducer

export const ADD_POST = 'ADD_POST'
export const ADD_HEADER = 'ADD_HEADER'
export const EDIT_POST = 'EDIT_POST'
export const TOGGLE_DELETED = 'TOGGLE_DELETED'
export const TOGGLE_EDITING = 'TOGGLE_EDITING'
export const TOGGLE_EDIT_HEADER = 'TOGGLE_EDITING'

export const addPost = input => ({
  type: ADD_POST,
  id: input.id,
  title: input.title,
  desc: input.desc,
  img: input.img,
  editing: false,
  deleted: false,
})

export const addHeader = input => ({
  type: ADD_HEADER,
  desc: input.desc,
  img: input.img,
  editing: false,
})

export const deletePost = id => ({
  type: TOGGLE_DELETED,
  id,
})

export const toggleEditing = id => ({
  type: TOGGLE_EDITING,
  id,
})

export const toggleEditHeader = () => ({
  type: TOGGLE_EDIT_HEADER,
})

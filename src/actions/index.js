// let id = 0

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const TOGGLE_DELETED = 'TOGGLE_DELETED'
export const TOGGLE_EDITING = 'TOGGLE_EDITING'

// export const SET_STATUS = 'SET_STATUS'

export const addPost = input => ({
  type: ADD_POST,
  id: input.id,
  title: input.title,
  desc: input.desc,
  img: input.img,
  editing: false,
  deleted: false,
})

// eslint-disable-next-line no-shadow
// export const editPost = (id, input) => ({
//   type: EDIT_POST,
//   title: input.title,
//   desc: input.desc,
//   img: input.img,
//   editing: false,
//   deleted: false,
//   id,
// })

// eslint-disable-next-line no-shadow
export const deletePost = id => ({
  type: TOGGLE_DELETED,
  id,
})

// eslint-disable-next-line no-shadow
export const toggleEditing = id => ({
  type: TOGGLE_EDITING,
  id,
})

// export const STATUS = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_DELETED: 'SHOW_DELETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE',
// }

// export const setStatus = status => ({
//   type: SET_STATUS,
//   status,
// })

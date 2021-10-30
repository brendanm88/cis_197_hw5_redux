import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import { Button, SmallTitle, InputWrap } from '../styles/StyleComps'

let id = 0

const Input = ({ dispatchAddPost }) => {
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [editing, setEditing] = useState(false)
  if (editing) {
    return (
      <>
        <SmallTitle> New Posts (most recent at bottom!) </SmallTitle>
        {' Title: '}
        <InputWrap onChange={e => setTitle(e.target.value)} value={title} />
        {' Description: '}
        <InputWrap onChange={e => setDesc(e.target.value)} value={desc} />
        {' Image Link: '}
        <InputWrap onChange={e => setImg(e.target.value)} value={img} />
        <Button
          type="button"
          onClick={() => {
            setEditing(false)
            dispatchAddPost({
              id: id++,
              title,
              desc,
              img,
            })
          }}
        >
          Post!
        </Button>
      </>
    )
  }
  return (
    <div>
      <SmallTitle> New Posts (most recent at bottom!) </SmallTitle>
      <Button type="button" onClick={() => setEditing(true)}> Add Post </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: input => dispatch(addPost(input)),
})

export default connect(null, mapDispatchToProps)(Input)

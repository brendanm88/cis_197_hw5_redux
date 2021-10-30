import React, { useState } from 'react'
import {
  Title,
  Button,
  InputWrap,
  PostWrap,
} from '../styles/StyleComps'

const Header = () => {
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')
  const [editing, setEditing] = useState(false)
  const [prevDesc, setPrevDesc] = useState('')
  const [prevImage, setPrevImage] = useState('')

  if (editing) {
    return (
      <>
        <Title>
          About Me
        </Title>
        <PostWrap>
          {' Description: '}
          <InputWrap onChange={e => setDesc(e.target.value)} value={desc} />
          {' Image: '}
          <InputWrap onChange={e => setImg(e.target.value)} value={img} />
          <Button
            type="button"
            onClick={() => {
              setPrevDesc(desc)
              setPrevImage(img)
              setEditing(false)
            }}
          >
            Update
          </Button>
          <Button
            type="button"
            onClick={() => {
              setDesc(prevDesc)
              setImg(prevImage)
              setEditing(false)
            }}
          >
            Cancel
          </Button>
        </PostWrap>
      </>
    )
  }
  return (
    <>
      <Title>
        About Me
      </Title>
      <PostWrap>
        {'Description: '}
        { desc }
        <img
          src={img}
          alt="new"
          onError={e => {
            e.target.style.display = 'none'
          }}
        />
        <Button type="button" onClick={() => setEditing(true)}> Edit </Button>
      </PostWrap>
    </>
  )
}

export default Header

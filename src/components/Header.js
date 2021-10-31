import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Title,
  Button,
  InputWrap,
  PostWrap,
} from '../styles/StyleComps'
import {
  toggleEditHeader,
  addHeader,
} from '../actions'

// if editing a post show input boxes, else show just content
const Header = ({
  intro,
  dispatchEditHeader,
  dispatchAddHeader,
}) => {
  // if editing show boxes and handle input
  if (intro.editing) {
    const [desc, setDesc] = useState(intro.desc)
    const [img, setImg] = useState(intro.img)
    const [editing, setEditing] = useState(false)
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
              setEditing(false)
              dispatchAddHeader({
                desc,
                img,
              })
            }}
          >
            Update
          </Button>
          <Button
            type="button"
            onClick={() => {
              dispatchEditHeader()
            }}
          >
            Cancel
          </Button>
        </PostWrap>
      </>
    )
  }
  // if not editing show previous input as should be displayed
  return (
    <>
      <Title>
        About Me
      </Title>
      <PostWrap>
        {'Description: '}
        { intro.desc }
        <br />
        <img
          src={intro.img}
          alt="new"
          onError={e => {
            e.target.style.display = 'none'
          }}
          style={{
            width: 200,
            height: 200,
            border: '10px solid darkgrey',
            borderRadius: '2px',
          }}
        />
        <Button type="button" onClick={() => dispatchEditHeader()}> Edit </Button>
      </PostWrap>
    </>
  )
}

const mapStateToProps = state => ({
  intro: state.intro,
  editing: state.editing,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditHeader: () => dispatch(toggleEditHeader()),
  dispatchAddHeader: input => dispatch(addHeader(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

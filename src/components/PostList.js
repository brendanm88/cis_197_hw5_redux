import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, InputWrap, PostWrap } from '../styles/StyleComps'
import {
  deletePost,
  toggleEditing,
  addPost,
} from '../actions'

// if editing a post show input boxes, else show just content
const PostList = ({
  posts,
  dispatchToggleEditing,
  dispatchDeletePost,
  dispatchAddPost,
}) => (
  <>
    {posts.map(post => {
      // show input boxes for the current post being edited
      if (!post.editing) {
        return (
          <PostWrap key={post.id}>
            <div>
              Post #
              {post.id}
              {': '}
              {post.title}
              <br />
              {'Description: '}
              {post.desc}
              <br />
              {/* 'Image: ' */ }
              <img
                src={post.img}
                alt="new"
                onError={e => {
                  e.target.style.display = 'none'
                }}
              />
              <br />

              <Button type="button" onClick={() => dispatchDeletePost(post.id)}> Delete </Button>
              <Button type="button" onClick={() => dispatchToggleEditing(post.id)}> Edit </Button>
            </div>
          </PostWrap>
        )
      }
      // show editing boxes of a post
      if (post.editing) {
        const [desc, setDesc] = useState(post.desc)
        const [title, setTitle] = useState(post.title)
        const [img, setImg] = useState(post.img)
        return (
          <PostWrap key={post.id}>
            {'Title: '}
            <InputWrap onChange={e => setTitle(e.target.value)} value={title} />
            <br />
            {'Description: '}
            <InputWrap onChange={e => setDesc(e.target.value)} value={desc} />
            <br />
            {'Image Link: '}
            <InputWrap onChange={e => setImg(e.target.value)} value={img} />
            <br />
            <Button
              type="button"
              onClick={() => {
                dispatchDeletePost(post.id)
                dispatchAddPost({
                  id: post.id,
                  title,
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
                dispatchToggleEditing(post.id)
              }}
            >
              Cancel
            </Button>
          </PostWrap>
        )
      }
      return (null)
    })}
  </>
)

const mapStateToProps = state => ({
  posts: state.posts,
  editing: state.editing,
})

const mapDispatchToProps = dispatch => ({
  dispatchDeletePost: id => dispatch(deletePost(id)),
  dispatchToggleEditing: id => dispatch(toggleEditing(id)),
  dispatchAddPost: input => dispatch(addPost(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

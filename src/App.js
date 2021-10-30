import React from 'react'

import Header from './components/Header'
import Input from './components/Input'
import PostList from './components/PostList'

import { GlobalStyle } from './styles/StyleComps'

const App = () => (
  <GlobalStyle>
    <Header />
    <Input />
    <PostList />
  </GlobalStyle>
)

export default App

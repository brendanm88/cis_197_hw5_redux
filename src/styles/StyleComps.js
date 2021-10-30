import s from 'styled-components'

// global style for fonts
export const GlobalStyle = s.div`
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: white;
`
// wraps buttons
export const Button = s.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid pebble;
  border-radius: 3px;
  box-shadow: 1px 2px 4px dimgray;
`
// title formatting
export const Title = s.h1`
  margin: 0.5em;
  color: white;
  font-size: 3.5em;
  font-weight: 530;
  text-align: left;
  word-wrap: break-word;
  box-shadow: 1px 3px 5px dimgray;
`

// title formatting
export const SmallTitle = s.h1`
  color: white;
  font-size: 2em;
  font-weight: 300;
  text-align: left;
  word-wrap: break-word;
`

// input form formatting
export const InputWrap = s.input`
  font-size: 1em;
  border: 2px solid pebble;
  border-radius: 5px;
  box-shadow: 1px 2px 3px pebble;
`
// individual comment formatting (white background really)
export const PostWrap = s.div`
  background: white;
  margin: 1em;
  border: 10px solid white;
  border-radius: 7px;
  color: black;
  word-wrap: break-word;
  box-shadow: 1px 3px 5px dimgray;
`

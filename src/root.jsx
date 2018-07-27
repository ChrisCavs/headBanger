import React from 'react'
import App from './app'
import Canvas from './components/canvas'
import Profile from './components/profile'

const Root= () => {
  return (
    <div className="root">
      <Canvas />
      <App />
      <Profile />
    </div>
  )
}

export default Root
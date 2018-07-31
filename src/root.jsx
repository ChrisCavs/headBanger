import React from 'react'
import App from './app'
import Canvas from './components/canvas'
import Profile from './components/profile'
import Modal from './components/modal'

const Root= () => {
  return (
    <div className="root">
      <Canvas />
      <App />
      <Profile />
      <Modal />
    </div>
  )
}

export default Root
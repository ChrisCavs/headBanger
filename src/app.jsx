import React from 'react'
import Key from './components/key'
import Canvas from './components/canvas'
import Constants from './constants'

const App = () => {
  const starterBinds = ['q','w','e','a','s','d','z','x','c']
  const sounds = [
    'kick', 'snare', 'tom1',
    'tom2', 'hi-hat', 'open-hat', 
    'symbol', 'clap', 'fx'
  ]

  const keys = sounds.map((sound, i) => {
    return (
      <Key 
        key={i} 
        name={sound} 
        keyTag={starterBinds[i]} 
        sound={Constants[sound][0]}
      />
    )
  })

  return (
    <div className="app">
      <Canvas />
      {keys}
    </div>
  )
}

export default App
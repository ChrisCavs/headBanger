import React from 'react'
import Key from './components/key'
import Canvas from './components/canvas'

const App = () => {
  const starterBinds = ['q','w','e','a','s','d','z','x','c']
  const sounds = [
    'kick', 'snare', 'tom1',
    'tom2', 'hi-hat', 'open-hat', 
    'symbol', 'clap', 'fx'
  ]

  const keys = sounds.map((sound, i) => {
    const soundString = `${sound}-0`
    return (
      <Key 
        key={i} 
        name={sound} 
        keyTag={starterBinds[i]} 
        sound={soundString}
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
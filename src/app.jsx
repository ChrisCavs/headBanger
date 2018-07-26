import React from 'react'
import Key from './components/key'
import Constants from './helpers/constants'

class App extends React.Component {
  state = {
    pause: false
  }

  toggleKeyListeners = () => {
    if (this.state.pause) {
      this.setState({ pause: false })
      return
    }
    this.setState({ pause: true })
  }

  render () {
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
          pause={this.state.pause}
          toggleKeyListeners={this.toggleKeyListeners} 
          name={sound} 
          keyTag={starterBinds[i]} 
          sound={Constants[sound][0]}
        />
      )
    })

    return (
      <div className="app">
        {keys}
      </div>
    )
  }
}

export default App
import React from 'react'
import Constants from '../constants'
import SoundSelection from './sound_selection'

class SoundOption extends React.Component {

  render () {
    const soundOptions = Constants[this.props.name].map((sound, i) => {
      return (
        <SoundSelection 
          key={i}
          className="sound-option" 
          change={this.props.change}
          sound={sound}
          currentSound={this.props.currentSound}
        />
      )
    })

    return (
      <div className="sound-options">
        {soundOptions}
      </div>
    )
  }
}

export default SoundOption
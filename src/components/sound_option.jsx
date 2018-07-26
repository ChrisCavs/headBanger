import React from 'react'
import Constants from '../constants'

class SoundOption extends React.Component {

  handleClick = sound => () => {
    this.props.change(sound)
  }

  render () {
    const soundOptions = Constants[this.props.name].map((sound, i) => {
      return (
        <div 
          key={i} 
          className="sound-option" 
          onClick={this.handleClick(sound)}>
          {sound}
        </div>
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
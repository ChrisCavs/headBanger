import React from 'react'
import KeyOptions from './key_options'

class Key extends React.Component {
  state = {
    keyTag: this.props.keyTag,
    sound: this.props.sound,
    hide: true,
    classes: ''
  }

  audio = React.createRef()

  change = name => val => {
    this.setState({ [name]: val })
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  
  handleKeyDown = event => {
    if (event.key === this.state.keyTag) {
      this.play()
    }
  }
  
  play = () => {
    this.audio.current.currentTime = 0
    this.audio.current.play()

    this.setState({ classes: 'playing' })
  }

  revealOptions = () => {
    this.setState({ hide: false })
  }

  hideOptions = () => {
    this.setState({ hide: true })
  }

  toggleOptions = () => {
    if (this.state.hide) {
      this.revealOptions()
      return
    }

    this.hideOptions()
  }

  removeClass = () => {
    this.setState({ classes: '' })
  }
  
  render () {
    const audioSrc = `sounds/${this.state.sound}.wav`

    return (
      <div className="key-container">
        <div 
          className={"key" + ' ' + this.state.classes}
          onClick={this.toggleOptions}
          onTransitionEnd={this.removeClass}
        >
          <kbd>{this.state.keyTag}</kbd>
          <span className="sound">{this.props.name}</span>
          <audio 
            ref={this.audio} 
            src={audioSrc}
          />

        </div>
        <KeyOptions
          hide={this.state.hide}
          hideOptions={this.hideOptions}
          change={this.change} 
        />
      </div>
    )
  }
}

export default Key
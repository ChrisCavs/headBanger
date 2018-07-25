import React from 'react'

class Key extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      key: this.props.key,
      sound: this.props.sound,
      classes: ''
    }
    this.audio = React.createRef()
  }

  change = name => val => {
    this.setState({ [name]: val })
  }

  source = () => {
    return `sounds/${this.state.sound}.wav`
  }
  
  handleKeyDown = event => {
    debugger
    if (event.key === this.state.key) {
      this.play()
    }
  }

  play = () => {
    this.audio.currentTime = 0
    this.audio.play()
    this.setState({ classes: 'playing' })
  }

  removeClass = () => {
    this.setState({ classes: '' })
  }
  
  render () {

    return (
      <div 
        class={"key" + this.state.classes}
        onClick={this.revealOptions}
        onKeyDown={this.handleKeyDown}
        onTransitionEnd={this.removeClass}
      >
        <kbd>{this.state.key}</kbd>
        <span class="sound">{this.state.sound}</span>
        <audio ref={this.audio} src={this.source} />

        <KeyOptions
          sound={this.props.sound}
          changeKey={this.change('key')}
          changeSound={this.change('sound')} 
        />
      </div>
    )
  }
}

export default Key
import React from 'react'

class Key extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      keyTag: this.props.keyTag,
      sound: this.props.sound,
      classes: ''
    }
    this.audio = React.createRef()
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

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

  removeClass = () => {
    this.setState({ classes: '' })
  }
  
  render () {
    const audioSrc = `sounds/${this.state.sound}.wav`

    return (
      <div 
        className={"key" + ' ' + this.state.classes}
        onClick={this.revealOptions}
        onTransitionEnd={this.removeClass}
      >
        <kbd>{this.state.keyTag}</kbd>
        <span className="sound">{this.props.name}</span>
        <audio ref={this.audio} src={audioSrc} />
      </div>
    )
  }
}

export default Key
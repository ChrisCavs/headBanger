import React from 'react'

class SoundSelection extends React.Component {

  handleClick = event => {
    event.stopPropagation()
    this.props.change(this.props.sound)
  }

  render () {
    let classes = 'sound-option'

    if (this.props.currentSound === this.props.sound) {
      classes += ' active'
    }

    return (
      <div 
        className={classes}
        onClick={this.handleClick}
      >{this.props.sound}
      </div>
    )
  }
}

export default SoundSelection
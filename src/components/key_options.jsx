import React from 'react'
import BindOption from './bind_option'
import SoundOption from './sound_option'

class KeyOptions extends React.Component {
  state = {
    reveal: 'sound'
  }

  switch = name => () => {
    this.setState({ reveal: name })
  }

  render () {
    if (this.props.hide) {
      return <div></div>
    }

    let option = <SoundOption change={this.props.change} />
    let click = this.switch('bind')
    let text = 'bind-settings'

    if (this.state.reveal === 'bind') {
      option = <BindOption change={this.props.change} />
      click = this.switch('sound')
      text = 'sound-settings'
    }

    return (
      <div className={'key-options'}>
        <button
          className="option-close"
          onClick={this.props.hideOptions}
        >x
        </button>

        {option}

        <button
          className="option-switch"
          onClick={click}
        >{text}
        </button>
      </div>
    )
  }
}

export default KeyOptions
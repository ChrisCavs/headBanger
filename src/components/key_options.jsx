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
    let option = <SoundOption change={this.props.change} />
    let click = this.switch('bind')

    if (this.state.reveal === 'bind') {
      option = <BindOption change={this.props.change} />
      click = this.switch('sound')
    }

    return (
      <div className={`key-options ${this.props.classes}`}>
        {option}

        <button
          className="option-switch"
          onClick={click}
        />
      </div>
    )
  }
}

export default KeyOptions
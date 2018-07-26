import React from 'react'
import BindOption from './bind_option'
import SoundOption from './sound_option'

class KeyOptions extends React.Component {
  state = {
    reveal: 'sound'
  }

  switch = name => event => {
    event.stopPropagation()
    this.setState({ reveal: name })
  }

  render () {
    if (this.props.hide) {
      return <div></div>
    }

    let option = <SoundOption change={this.props.change('sound')} name={this.props.name} />
    let click = this.switch('bind')
    let text = 'bind-settings'

    if (this.state.reveal === 'bind') {
      option = (
        <BindOption 
          change={this.props.change('keyTag')}
          name={this.props.name}
          toggleKeyListeners={this.props.toggleKeyListeners}
        />
      )
      click = this.switch('sound')
      text = 'sound-settings'
    }

    return (
      <div 
        className="key-options"
        onClick={this.props.hideOptions}
      >
        <div className={'key-options-content'}>

          {option}

          <button
            className="option-switch"
            onClick={click}
          >{text}
          </button>
        </div>
      </div>
    )
  }
}

export default KeyOptions
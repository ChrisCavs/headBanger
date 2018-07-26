import React from 'react'

class BindOption extends React.Component {
  state = {
    currentBind: ''
  }

  save = () => {
    this.props.change(this.state.currentBind)
  }

  makeSelection = event => {
    this.setState({ currentBind: event.key })
  }

  componentDidMount () {
    this.props.toggleKeyListeners()
    window.addEventListener('keydown',this.makeSelection.bind(this))
  }

  componentWillUnmount () {
    this.props.toggleKeyListeners()
    window.removeEventListener('keydown', this.makeSelection.bind(this))
  }

  render() {
    return (
      <div className="bind-options">
        <p>Press a key to modify binding</p>

        <div className="bind-display">
          {this.state.currentBind}
        </div>

        <button 
          className="option-switch" 
          onClick={this.save}
        >Save Binding
        </button>
      </div>
    )
  }
}

export default BindOption
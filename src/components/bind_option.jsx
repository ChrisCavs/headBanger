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
    window.pause = true
    window.onkeypress = this.makeSelection.bind(this)
  }

  componentWillUnmount () {
    window.pause = false
    window.onkeypress = null
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
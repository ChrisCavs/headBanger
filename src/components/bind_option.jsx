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
    window.onkeydown = this.makeSelection
  }

  componentWillUnmount () {
    this.props.toggleKeyListeners()
  }

  render() {
    return (
      <div className="bind-options">
        <p>Press a key to modify binding</p>
        <div className="bind-display">{this.state.currentBind}</div>
        <button onClick={this.save}>Save Binding</button>
      </div>
    )
  }
}

export default BindOption
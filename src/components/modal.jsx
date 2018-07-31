import React from 'react'

class Modal extends React.Component {
  state = {
    hidden: false
  }

  hideModal = () => {
    this.setState({ hidden: true })
  }

  render () {
    if (this.state.hidden) {
      return <div></div>
    }

    return (
      <div 
        className="modal"
        onClick={this.hideModal}
      >
        <div className="modal-content">
          <h1 className="modal-title">
            Instructions
          </h1>
          <h2 className="modal-subtitle">
            Changing Sounds:
          </h2>
          <ul className="modal-bullets">
            <li>Click on the key you would like to change</li>
            <li>Select a sound (the current selection is highlighted)</li>
            <li>Click anywhere else on the screen to close settings</li>
          </ul>
          <h2 className="modal-subtitle">
            Changing Key:
          </h2>
          <ul className="modal-bullets">
            <li>Click on the key you would like to change</li>
            <li>Click 'bind-settings'</li>
            <li>Press any key to select it</li>
            <li>Click 'Save Binding'</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Modal
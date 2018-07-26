import React from 'react'

class Canvas extends React.Component {

  constructor (props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount () {
    this.context = this.canvas.current
    window.addEventListener('keydown', this.animate)
    window.canvas = this.canvas.current
  }

  animate = (e) => {

  }

  render () {
    return (
      <canvas ref={this.canvas} className="canvas"></canvas>
    )
  }
}

export default Canvas
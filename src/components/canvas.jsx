import React from 'react'
import Circle from '../circle'

class Canvas extends React.Component {

  constructor (props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount () {
    this.context = this.canvas.current.getContext('2d')
    const width = window.innerWidth
    const height = window.innerHeight
    this.canvas.current.width = width
    this.canvas.current.height = height

    window.addEventListener('keydown', this.beginAnimation.bind(this))
  }

  create = (width, height) => {

    // radius between 2 and 6
    const radius = 2 + Math.random() * 3

    // velocities
    const vx = -5 + Math.random() * 10
    const vy = -5 + Math.random() * 10

    // colors
    const r = Math.round(Math.random()) * 255
    const g = Math.round(Math.random()) * 255
    const b = Math.round(Math.random()) * 255
    const rgba = `rgba(${r}, ${g}, ${b}, 0.5)`

    return new Circle(
      this.canvas,
      this.context,
      [width, height],
      [vx, vy],
      rgba,
      radius
    )
  }

  beginAnimation = event => {
    const width = window.innerWidth * Math.random()
    const height = window.innerHeight * Math.random()

    const circles = []
    for (let i = 0; i < 50; i++) {
      circles.push(this.create(width, height))
    }
    
    this.animate(circles)
  }

  animate = circles => {
    let newCircles = []

    if (circles.length === 0) return

    circles.forEach(circle => {
      if (circle.outOfBounds()) {
        return
      } 
      circle.draw()
      newCircles.push(circle)
    })

    requestAnimationFrame(this.animate(newCircles))
  }



  render () {
    return (
      <canvas ref={this.canvas} className="canvas"></canvas>
    )
  }
}

export default Canvas

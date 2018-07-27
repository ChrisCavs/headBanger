import React from 'react'
import { Circle, Color } from '../helpers/classes'

class Canvas extends React.Component {

  canvas = React.createRef()

  componentDidMount () {
    this.context = this.canvas.current.getContext('2d')
    const width = window.innerWidth
    const height = window.innerHeight
    this.canvas.current.width = width
    this.canvas.current.height = height

    window.addEventListener('keydown', this.beginAnimation.bind(this))
  }

  create = (width, height, color) => {
    const radius = 3 + Math.random() * 8

    const vx = -5 + (Math.random() * 12)
    const vy = -5 + (Math.random() * 12)

    return new Circle(
      this.canvas.current,
      this.context,
      [width, height],
      [vx, vy],
      color,
      radius
    )
  }

  getRandomColor = () => {
    const r = Math.round(Math.random()) * 255
    const g = Math.round(Math.random()) * 255
    const b = Math.round(Math.random()) * 255

    return new Color(r, g, b)
  }

  beginAnimation = event => {
    if (window.pause) return

    const width = (window.innerWidth - 300) * Math.random()
    const height = (window.innerHeight - 300) * Math.random()

    if (!this.circles) {
      this.circles = []
    }

    const color = this.getRandomColor()

    for (let i = 0; i < 40; i++) {
      this.circles.push(this.create(width, height, color))
    }
    
    this.animate(this.circles)()
  }

  animate = circles => () => {
    let newCircles = []
    if (circles.length === 0) return

    this.context.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height)

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

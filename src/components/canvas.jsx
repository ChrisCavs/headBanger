import React from 'react'

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

    return {
      width, height, radius, vx, vy, rgba
    }
  }

  beginAnimation = event => {
    const width = window.innerWidth * Math.random()
    const height = window.innerHeight * Math.random()

    const circles = []
    for (let i = 0; i < 50; i++) {
      circles.push(this.create(width, height))
    }
    debugger
  }

  render () {
    return (
      <canvas ref={this.canvas} className="canvas"></canvas>
    )
  }
}

export default Canvas


// var canvas = document.getElementById("canvas"),



// function draw() {

//   //Fill canvas with black color
//   ctx.globalCompositeOperation = "source-over";
//   ctx.fillStyle = "rgba(0,0,0,0.15)";
//   ctx.fillRect(0, 0, W, H);

//   //Fill the canvas with circles
//   for (var j = 0; j < circles.length; j++) {
//     var c = circles[j];

//     //Create the circles
//     ctx.beginPath();
//     ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2, false);
//     ctx.fillStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.5)";
//     ctx.fill();

//     c.x += c.vx;
//     c.y += c.vy;
//     c.radius -= .02;

//     if (c.radius < 0)
//       circles[j] = new create();
//   }
// }

// function animate() {
//   requestAnimFrame(animate);
//   draw();
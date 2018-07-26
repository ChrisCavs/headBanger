class Circle {
  constructor(canvas, ctx, pos, vel, color, radius) {
    this.canvas = canvas
    this.ctx = ctx
    this.pos = pos
    this.vel = vel
    this.color = color
    this.radius = radius
  }

  draw () {
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]

    this.ctx.beginPath()
    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }

  outOfBounds () {
    const cWidth = this.canvas.width
    const cHeight = this.canvas.height

    return (
      this.pos[0] > cWidth ||
      this.pos[0] < 0 ||
      this.pos[1] > cHeight ||
      this.pos[1] < 0
    )
  }
}

export default Circle
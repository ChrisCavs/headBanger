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
    this.ctx.fillStyle = this.color.output()
    this.ctx.fill()
  }

  outOfBounds () {
    if (this.color.a < 0) return true

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

class Color {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
    this.a = 0.85
  }

  output () {
    this.fade()
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }

  fade () {
    this.a -= 0.0004
  }
}

export { Circle, Color }
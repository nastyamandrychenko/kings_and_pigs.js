class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.side = {
      bottom: this.position.y + this.height,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 1
  }
  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.side.bottom = this.position.y + this.height;

    //above bottom of canvas
    if (this.side.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity;
    }else{
        this.velocity.y = 0
    }
  }
}

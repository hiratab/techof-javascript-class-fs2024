function Shape(
  color,
  x,
  y,
) {
  this.color = color;
  this.x = x;
  this.y = y;
  this.move = function(x, y) {
    console.log(`Moving shape from X: ${this.x} Y: ${this.y}`);
    this.x = this.x + x;
    this.y = this.y + y;
    console.log(`Moving shape to X: ${this.x} Y: ${this.y}`);
  }
}

const myShape = new Shape('red', 50, 30);
console.log(myShape);

myShape.move(50, 60);
console.log(myShape);
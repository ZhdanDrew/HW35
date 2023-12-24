class Shape {
  #color;

  constructor(color, width, height) {
    this.#color = color;
    this.width = width;
    this.height = height;
  }

  setColor(color) {
    this.#color = color;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color, width, height);
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  constructor(color, side) {
    super(color, side, side);
  }

  isSquare() {
    return this.width === this.height;
  }
}

const rectangle = new Rectangle('blue', 5, 8);
console.log('Rectangle Area:', rectangle.getArea());
console.log('Rectangle Perimeter:', rectangle.getPerimeter());

const square = new Square('red', 6);
console.log('Square Area:', square.getArea());
console.log('Square Perimeter:', square.getPerimeter());
console.log('Is Square?', square.isSquare());

export class Vector2 {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(otherVector) {
    return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
  }

  equals(otherVector) {
    return this.x === otherVector.x && this.y === otherVector.y;
  }
}

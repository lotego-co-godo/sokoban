export class Tile {
  /**
   * @type {'wall'|'floor'|'storage'}
   */
  type;

  position;

  constructor(type, position) {
    this.type = type;
    this.position = position;
  }
}

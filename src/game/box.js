export class Box {
  isInStorage;
  position;
  #level;

  constructor(position, level) {
    this.position = position;
    this.#level = level;
  }

  get isInStorage() {
    this.#level // poziom, na którym znajduje się ta skrzynka

    return undefined // czy skrzynka stoi na polu magazynu?
  }
}

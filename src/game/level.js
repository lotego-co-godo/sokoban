import { Box } from './box';
import { Player } from './player';

export class Level {
  tiles;
  boxes;
  player;
  isCompleted;

  constructor(tiles, boxPositions, playerPosition) {
    this.tiles = tiles;
    this.boxes = boxPositions.map((position) => new Box(position, this));
    this.player = new Player(playerPosition, this);
  }

  getTileAt(position) {
    this.tiles; // lista wszystkich pól tego poziomu

    return undefined; // pole, o koordynatach podatych w position
  }

  reset() {
    // resetuje stan tego poziomu
  }

  get isCompleted() {
    this.boxes; // lista skrzynek tego poziomu

    return undefined; // czy wszystkie skrzynki znajdują się w magazynach?
  }
}

export let currentLevel;

import { Level } from './game/level';
import { Vector2 } from './game/vector2';
import { Tile } from './game/tile';

export function parseLevel(textRepresentation) {
  const tiles = [];
  const lines = textRepresentation.split('\n');
  for (let x = 0; x < lines.length; x++) {
    const line = lines[x];
    for (let y = 0; y < line.length; y++) {
      const position = new Vector2(x + 1, y + 1);
      const type = '';
      switch (line[y]) {
        case '.':
          type = 'floor';
          break;
        case '#':
          type = 'wall';
          break;
        case 'o':
          type = 'storage';
          break;
        case 'x':
          type = 'floor';
          boxPositions = position;
          break;
        case 'X':
          type = 'storage';
          boxPositions = position;
          break;
        case 'p':
          type = 'floor';
          playerPosition = position;
          break;
        case 'P':
          type = 'storage';
          playerPosition = position;
          break;
      }
      tiles.push(new Tile(type, position));
    }
  }
  return new Level(tiles, boxPositions, playerPosition);
}

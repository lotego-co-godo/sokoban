import { parseLevel } from './level-parser';
import { Tile } from './game/tile';
import { Vector2 } from './game/vector2';

describe('parseLevel()', () => {
  it('should parse level text correctly', () => {
    const levelText = `o...
                       .#..
                       px.#
                       #..#`;

    const level = parseLevel(levelText);
    expect(level.tiles).toEqual([
      new Tile('storage', new Vector2(1, 1)),
      new Tile('floor', new Vector2(2, 1)),
      new Tile('floor', new Vector2(3, 1)),
      new Tile('floor', new Vector2(4, 1)),

      new Tile('floor', new Vector2(1, 2)),
      new Tile('wall', new Vector2(2, 2)),
      new Tile('floor', new Vector2(3, 2)),
      new Tile('floor', new Vector2(4, 2)),

      new Tile('floor', new Vector2(1, 3)),
      new Tile('floor', new Vector2(2, 3)),
      new Tile('floor', new Vector2(3, 3)),
      new Tile('wall', new Vector2(4, 3)),

      new Tile('wall', new Vector2(1, 4)),
      new Tile('floor', new Vector2(2, 4)),
      new Tile('floor', new Vector2(3, 4)),
      new Tile('wall', new Vector2(4, 4)),
    ]);

    expect(level.player.position).toEqual(new Vector2(1, 3));
    expect(level.boxes[0].position).toEqual(new Vector2(2, 3));
  });

  it('should parse level text correctly when player is standing on storage', () => {
    const levelText = `....
                       .#..
                       Px.#
                       #..#`;

    const level = parseLevel(levelText);
    expect(level.tiles).toEqual([
      new Tile('floor', new Vector2(1, 1)),
      new Tile('floor', new Vector2(2, 1)),
      new Tile('floor', new Vector2(3, 1)),
      new Tile('floor', new Vector2(4, 1)),

      new Tile('floor', new Vector2(1, 2)),
      new Tile('wall', new Vector2(2, 2)),
      new Tile('floor', new Vector2(3, 2)),
      new Tile('floor', new Vector2(4, 2)),

      new Tile('storage', new Vector2(1, 3)),
      new Tile('floor', new Vector2(2, 3)),
      new Tile('floor', new Vector2(3, 3)),
      new Tile('wall', new Vector2(4, 3)),

      new Tile('wall', new Vector2(1, 4)),
      new Tile('floor', new Vector2(2, 4)),
      new Tile('floor', new Vector2(3, 4)),
      new Tile('wall', new Vector2(4, 4)),
    ]);

    expect(level.player.position).toEqual(new Vector2(1, 3));
    expect(level.boxes[0].position).toEqual(new Vector2(2, 3));
  });

  it('should parse level text correctly when box is standing on storage', () => {
    const levelText = `....
                       .#..
                       pX.#
                       #..#`;

    const level = parseLevel(levelText);
    expect(level.tiles).toEqual([
      new Tile('floor', new Vector2(1, 1)),
      new Tile('floor', new Vector2(2, 1)),
      new Tile('floor', new Vector2(3, 1)),
      new Tile('floor', new Vector2(4, 1)),

      new Tile('floor', new Vector2(1, 2)),
      new Tile('wall', new Vector2(2, 2)),
      new Tile('floor', new Vector2(3, 2)),
      new Tile('floor', new Vector2(4, 2)),

      new Tile('floor', new Vector2(1, 3)),
      new Tile('storage', new Vector2(2, 3)),
      new Tile('floor', new Vector2(3, 3)),
      new Tile('wall', new Vector2(4, 3)),

      new Tile('wall', new Vector2(1, 4)),
      new Tile('floor', new Vector2(2, 4)),
      new Tile('floor', new Vector2(3, 4)),
      new Tile('wall', new Vector2(4, 4)),
    ]);

    expect(level.player.position).toEqual(new Vector2(1, 3));
    expect(level.boxes[0].position).toEqual(new Vector2(2, 3));
  });
}); 

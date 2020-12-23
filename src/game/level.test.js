import { Tile } from './tile';
import { Vector2 } from './vector2';
import { Level } from './level';

describe('Level', () => {
  describe('.tiles', () => {
    it('should be the same as provided in constructor', () => {
      const tiles = [new Tile('wall', new Vector2(1, 1)), new Tile('wall', new Vector2(2, 1))];
      const level = new Level(tiles, [], new Vector2(2, 3));

      expect(level.tiles).toBe(expect.arrayContaining(tiles));
    });
  });

  describe('.boxes', () => {
    it('should be a list of boxes created from positions provided in constructor', () => {
      const boxPositions = [new Vector2(1, 2), new Vector2(2, 2)];
      const level = new Level([], boxPositions, new Vector2(2, 3));
      expect(level.boxes.map((box) => box.position)).toStrictEqual(
        expect.arrayContaining(expect.arrayContaining(boxPositions))
      );
    });
  });

  describe('.player', () => {
    it('should be a player created from position provided in constructor', () => {
      const level = new Level([], [], new Vector2(2, 3));

      expect(level.player.position).toStrictEqual(new Vector2(2, 3));
    });
  });

  describe('.getTileAt()', () => {
    it('should return a tile at given position', () => {
      const tiles = [new Tile('wall', new Vector2(1, 1)), new Tile('wall', new Vector2(2, 1))];
      const level = new Level(tiles, [], new Vector2(2, 3));

      expect(level.getTileAt(new Vector2(2, 1))).toStrictEqual(new Tile('wall', new Vector2(2, 1)));
    });
  });

  describe('.reset()', () => {
    it('should reset the state of this level', () => {
      const level = new Level([], [new Vector2(1, 1)], new Vector2(2, 3));
      level.boxes[0].position = new Vector2(1, 2);
      level.player.position = new Vector2(4, 8);
      level.reset();

      expect(level.boxes[0].position).toStrictEqual(new Vector2(1, 1));
      expect(level.player.position).toStrictEqual(new Vector2(2, 3));
    });
  });

  describe('.isCompleted', () => {
    it('should be true if all boxes are standing on storage tiles', () => {
      const level = new Level(
        [new Tile('storage', new Vector2(1, 1)), new Tile('storage', new Vector2(3, 4))],
        [new Vector2(3, 4), new Vector2(1, 1)],
        new Vector2(2, 3)
      );

      expect(level.isCompleted).toBe(true);
    });

    it('should be true if all boxes are standing on storage tiles after level update', () => {
      const level = new Level(
        [new Tile('storage', new Vector2(1, 1)), new Tile('storage', new Vector2(3, 4))],
        [new Vector2(3, 4)],
        new Vector2(2, 3)
      );

      level.boxes[0].position = new Vector2(1, 1);

      expect(level.isCompleted).toBe(true);
    });

    it('should be false if not all boxes are standing on storage tiles', () => {
      const level = new Level(
        [new Tile('storage', new Vector2(1, 1)), new Tile('storage', new Vector2(3, 4))],
        [new Vector2(3, 4), new Vector2(1, 2)],
        new Vector2(2, 3)
      );

      expect(level.isCompleted).toBe(false);
    });

    it('should be false if not all boxes are standing on storage tiles after level update', () => {
      const level = new Level(
        [new Tile('storage', new Vector2(1, 1)), new Tile('storage', new Vector2(3, 4))],
        [new Vector2(3, 4)],
        new Vector2(2, 3)
      );

      level.boxes.position = new Vector2(4, 4);

      expect(level.isCompleted).toBe(false);
    });
  });
});

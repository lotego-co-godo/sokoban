import { Level } from './level';
import { Vector2 } from './vector2';
import { Box } from './box';
import { Tile } from './tile';

describe('Box', () => {
  describe('.position', () => {
    it('should be the same as provided in constructor', () => {
      const level = new Level([], [], new Vector2(1, 1));
      const box = new Box(new Vector2(1, 2), level);

      expect(box.position).toBe(new Vector2(1, 2));
    });
  });

  describe('.isInStorage', () => {
    it('should be true if this box is standing on a storage tile', () => {
      const level = new Level([new Tile('storage', new Vector2(1, 2))], [], new Vector2(1, 1));
      const box = new Box(new Vector2(1, 2), level);

      expect(box.isInStorage).toBe(true);
    });

    it('should be true if this box is standing on a storage tile after position update', () => {
      const level = new Level([new Tile('storage', new Vector2(1, 2))], [], new Vector2(1, 1));
      const box = new Box(new Vector2(1, 3), level);

      box.position = new Vector2(1, 2);

      expect(box.isInStorage).toBe(true);
    });

    it('should be false if this box is not standing on a storage tile', () => {
      const level = new Level([new Tile('storage', new Vector2(1, 2))], [], new Vector2(1, 1));
      const box = new Box(new Vector2(1, 3), level);

      expect(box.isInStorage).toBe(false);
    });

    it('should be false if this box is not standing on a storage tile after position update', () => {
      const level = new Level([new Tile('storage', new Vector2(1, 2))], [], new Vector2(1, 1));
      const box = new Box(new Vector2(1, 2), level);

      box.position = new Vector2(1, 3);

      expect(box.isInStorage).toBe(false);
    });
  });
});

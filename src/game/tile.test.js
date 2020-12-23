import { Vector2 } from './vector2';
import { Tile } from './tile';

describe('Tile', () => {
  describe('.type', () => {
    it('should be the same as provided in constructor', () => {
      const tile = new Tile('wall', new Vector2(2, 1));

      expect(tile.type).toBe('wall');
    });
  });

  describe('.position', () => {
    it('should be the same as provided in constructor', () => {
      const tile = new Tile('wall', new Vector2(2, 1));

      expect(tile.position).toStrictEqual(new Vector2(2, 1));
    });
  });
});

import { Vector2 } from './vector2';

describe('Vector2', () => {
  describe('.x', () => {
    it('should have same value as provided in constructor', () => {
      const vector = new Vector2(1, 2);
      expect(vector.x).toBe(1);
    });
  });

  describe('.y', () => {
    it('should have same value as provided in constructor', () => {
      const vector = new Vector2(1, 2);
      expect(vector.y).toBe(2);
    });
  });

  describe('.add()', () => {
    it('should add vectors correctly', () => {
      const vector1 = new Vector2(5, 9);
      const vector2 = new Vector2(-10, 5);

      expect(vector1.add(vector2)).toStrictEqual({ x: -5, y: 14 });
    });
  });

  describe('.equals()', () => {
    it('should return true if this and other vector are the same', () => {
      const vector1 = new Vector2(1, 1);
      const vector2 = new Vector2(1, 1);

      expect(vector1.equals(vector2)).toBe(true);
    });

    it('should return true if this and other vector are not the same', () => {
      const vector1 = new Vector2(1, 2);
      const vector2 = new Vector2(2, 1);

      expect(vector1.equals(vector2)).toBe(false);
    });
  });
});

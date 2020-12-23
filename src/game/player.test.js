import { Level } from './level';
import { Vector2 } from './vector2';
import { Player } from './player';
import { Tile } from './tile';

describe('Player', () => {
  describe('.position', () => {
    it('should be the same as provided in constructor', () => {
      const level = new Level([], [], new Vector2(1, 1));
      const player = new Player(new Vector2(1, 1), level);

      expect(player.position).toStrictEqual(new Vector2(1, 1));
    });
  });

  describe('.move()', () => {
    it('should move player up when possible', () => {
      const level = new Level(
        [new Tile('floor', new Vector2(1, 1)), new Tile('floor', new Vector2(1, 2))],
        [],
        new Vector2(1, 2)
      );
      const player = new Player(new Vector2(1, 2), level);

      player.move('up');

      expect(player.position).toStrictEqual(new Vector2(1, 1));
    });

    it('should move player down when possible', () => {
      const level = new Level(
        [new Tile('floor', new Vector2(1, 1)), new Tile('floor', new Vector2(1, 2))],
        [],
        new Vector2(1, 1)
      );
      const player = new Player(new Vector2(1, 1), level);

      player.move('down');

      expect(player.position).toStrictEqual(new Vector2(1, 2));
    });

    it('should move player left when possible', () => {
      const level = new Level(
        [new Tile('floor', new Vector2(1, 1)), new Tile('floor', new Vector2(2, 1))],
        [],
        new Vector2(2, 1)
      );
      const player = new Player(new Vector2(2, 1), level);

      player.move('left');

      expect(player.position).toStrictEqual(new Vector2(1, 1));
    });

    it('should move player right when possible', () => {
      const level = new Level(
        [new Tile('floor', new Vector2(1, 1)), new Tile('floor', new Vector2(2, 1))],
        [],
        new Vector2(1, 1)
      );
      const player = new Player(new Vector2(1, 1), level);

      player.move('right');

      expect(player.position).toStrictEqual(new Vector2(2, 1));
    });

    it('should not move player when there is a wall in selected direction', () => {
      const level = new Level(
        [new Tile('floor', new Vector2(1, 1)), new Tile('wall', new Vector2(2, 1))],
        [],
        new Vector2(1, 1)
      );
      const player = new Player(new Vector2(1, 1), level);

      player.move('right');

      expect(player.position).toStrictEqual(new Vector2(1, 1));
    });

    it('should push a box if walking into it', () => {
      const level = new Level(
        [
          new Tile('floor', new Vector2(1, 1)),
          new Tile('floor', new Vector2(2, 1)),
          new Tile('floor', new Vector2(3, 1)),
        ],
        [new Vector2(2, 1)],
        new Vector2(1, 1)
      );
      const player = new Player(new Vector2(1, 1), level);

      player.move('right');

      expect(level.boxes[0].position).toStrictEqual(new Vector2(3, 1));
    });

    it('should not move player if there is more than one box in a selected direction', () => {
      const level = new Level(
        [
          new Tile('floor', new Vector2(1, 1)),
          new Tile('floor', new Vector2(2, 1)),
          new Tile('floor', new Vector2(3, 1)),
          new Tile('floor', new Vector2(4, 1)),
        ],
        [new Vector2(2, 1), new Vector2(3, 1)],
        new Vector2(1, 1)
      );
      const player = new Player(new Vector2(1, 1), level);

      player.move('right');

      expect(player.position).toStrictEqual(new Vector2(1, 1));
    });

    it('should not move player if there is a wall next to a box in a selected direction', () => {
      const level = new Level(
        [
          new Tile('floor', new Vector2(1, 1)),
          new Tile('floor', new Vector2(2, 1)),
          new Tile('wall', new Vector2(3, 1)),
        ],
        [new Vector2(2, 1)],
        new Vector2(1, 1)
      );
      const player = new Player(new Vector2(1, 1), level);

      player.move('right');

      expect(player.position).toStrictEqual(new Vector2(1, 1));
      expect(level.boxes[0].position).toStrictEqual(new Vector2(2, 1));
    });
  });
});

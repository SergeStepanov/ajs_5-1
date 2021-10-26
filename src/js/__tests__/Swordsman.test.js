/* eslint-disable linebreak-style */
import Swordsman from '../Swordsman';

test('Тест для Swordsman', () => {
  const gamer = new Swordsman('root');

  const result = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'root',
    type: 'Swordsman',
  };

  expect(gamer).toEqual(result);
});

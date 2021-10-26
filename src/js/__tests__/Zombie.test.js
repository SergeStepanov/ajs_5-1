/* eslint-disable linebreak-style */
import Zombie from '../Zombie';

test('Тест для Zombie', () => {
  const gamerZombie = new Zombie('zom');

  const result = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'zom',
    type: 'Zombie',
  };

  expect(gamerZombie).toEqual(result);
});

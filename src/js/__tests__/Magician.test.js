/* eslint-disable linebreak-style */
import Magician from '../Magician';

test('Тест для Magician', () => {
  const gamer = new Magician('zzzzz');

  const result = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'zzzzz',
    type: 'Magician',
  };

  expect(gamer).toEqual(result);
});

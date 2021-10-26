/* eslint-disable linebreak-style */
import Undead from '../Undead';

test('Тест для Undead', () => {
  const gamerUndead = new Undead('eee');

  const result = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'eee',
    type: 'Undead',
  };

  expect(gamerUndead).toEqual(result);
});

/* eslint-disable linebreak-style */
import Bowerman from '../Bowerman';

test('Тест для Bowerman', () => {
  const gamerBowerman = new Bowerman('gamer2');

  const result = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'gamer2',
    type: 'Bowerman',
  };

  expect(gamerBowerman).toEqual(result);
});

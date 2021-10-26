/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-named-as-default-member
import Character from './character';
import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const gamerCharacter = new Character('Gamer', 'Zombie');
const gamerBowerman = new Bowerman('gamer2');
const gamerSwordsman = new Swordsman('gamer3');
const gamerMagician = new Magician('gamer4');
const gamerDaemon = new Daemon('gamer5');
const gamerUndead = new Undead('gamer6');
const gamerZombie = new Zombie('gamer7');

console.log(gamerCharacter);
console.log(gamerBowerman);
console.log(gamerSwordsman);
console.log(gamerMagician);
console.log(gamerDaemon);
console.log(gamerUndead);
console.log(gamerZombie);

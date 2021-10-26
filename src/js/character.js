/* eslint-disable linebreak-style */
/* eslint-disable no-sequences */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.health = 100;
    this.level = 1;

    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error(
        'Имя должно быть строкой и содержать от 2 до 10 символов.',
      );
    }

    if (
      (typeof type === 'string')
      && (type === 'Bowerman'
      || type === 'Swordsman'
      || type === 'Magician'
      || type === 'Daemon'
      || type === 'Undead'
      || type === 'Zombie')
    ) {
      this.type = type;
    } else {
      throw new Error('Такой персонаж не существует.');
    }
  }
}

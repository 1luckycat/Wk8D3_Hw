"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = exports.Archers = exports.Knights = exports.Peons = exports.Orges = exports.Characters = void 0;
const uuid_1 = require("uuid");
class Characters {
    constructor(gold$, weaponArray) {
        this.gold$ = gold$;
        this.weaponArray = [];
        this.weaponArray = weaponArray;
    }
    get gold() {
        return this.gold$;
    }
    addWeapon(weapon) {
        this.weaponArray.push(weapon);
    }
    removeWeapon(weaponId) {
        this.weaponArray = this.weaponArray.filter(weapon => weapon.id !== weaponId);
    }
    printStats() {
        console.log(`Weapons List: ${this.weaponArray.map(weapon => weapon.name).join(', ')}, Gold: ${this.gold}`);
    }
}
exports.Characters = Characters;
class Orges extends Characters {
    constructor(gold, weaponArray) {
        super(gold, weaponArray);
    }
    att() {
        console.log(`Orge attacked with a club!`);
    }
    def() {
        console.log("Orge defending with a shield!");
    }
    collectGold(getGold) {
        this.gold$ += getGold;
        console.log(this.gold$);
    }
}
exports.Orges = Orges;
class Peons extends Characters {
    constructor(gold, weaponArray) {
        super(gold, weaponArray);
    }
    att() {
        console.log(`Peons attacked with a club!`);
    }
    def() {
        console.log("Peons defending with a shield!");
    }
    collectGold(getGold) {
        this.gold$ += getGold;
        console.log(this.gold$);
    }
}
exports.Peons = Peons;
class Knights extends Characters {
    constructor(gold, weaponArray) {
        super(gold, weaponArray);
    }
    att() {
        console.log(`Knights attacked with a club!`);
    }
    def() {
        console.log("Knights defending with a shield!");
    }
    collectGold(getGold) {
        this.gold$ += getGold;
        console.log(this.gold$);
    }
}
exports.Knights = Knights;
class Archers extends Characters {
    constructor(gold, weaponArray) {
        super(gold, weaponArray);
    }
    att() {
        console.log(`Archers attacked with a club!`);
    }
    def() {
        console.log("Archers defending with a shield!");
    }
    collectGold(getGold) {
        this.gold$ += getGold;
        console.log(this.gold$);
    }
}
exports.Archers = Archers;
class Weapon {
    constructor(name, damagePoints, description) {
        this.id = (0, uuid_1.v4)(),
            this.name = name,
            this.description = description;
        this.damagePoints = damagePoints;
    }
}
exports.Weapon = Weapon;

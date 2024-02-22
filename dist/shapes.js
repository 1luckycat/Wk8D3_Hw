"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = exports.Archers = exports.Knights = exports.Peons = exports.Orges = exports.Characters = void 0;
const uuid_1 = require("uuid");
class Characters {
    constructor(gold$) {
        this.gold$ = gold$;
    }
    get gold() { return this.gold$; }
}
exports.Characters = Characters;
class Orges extends Characters {
    constructor(gold) {
        super(gold);
    }
    att() {
        console.log("Orge attacked with a club!");
    }
    def() {
        console.log("Orge defending with a shield!");
    }
    get(getGold) {
        return this.gold$ + getGold;
    }
}
exports.Orges = Orges;
class Peons extends Characters {
    constructor(gold) {
        super(gold);
    }
    att() {
        console.log("Peon attacked with a club!");
    }
    def() {
        console.log("Peon defending with a shield!");
    }
    get(getGold) {
        return this.gold + getGold;
    }
}
exports.Peons = Peons;
class Knights extends Characters {
    constructor(gold) {
        super(gold);
    }
    att() {
        console.log("Knight attacked with a sword!");
    }
    def() {
        console.log("Knight defending with armor!");
    }
    get(getGold) {
        return this.gold + getGold;
    }
}
exports.Knights = Knights;
class Archers extends Characters {
    constructor(gold) {
        super(gold);
    }
    att() {
        console.log("Archer attacked with bow and arrows!");
    }
    def() {
        console.log("Archer defending with only a tunic!");
    }
    get(getGold) {
        return this.gold + getGold;
    }
}
exports.Archers = Archers;
class Weapon {
    constructor(id, name, damagePoints, description) {
        this.id = id;
        this.id = (0, uuid_1.v4)(),
            this.name = name,
            this.description = description;
        this.damagePoints = damagePoints;
    }
}
exports.Weapon = Weapon;

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
        // old code to try to remove a weapon from weapon list
        // this.weaponArray = this.weaponArray.filter(weapon => weapon.id !== weaponId)
        const index = this.weaponArray.findIndex((weapon) => weapon.name === weaponId);
        if (index !== -1) {
            this.weaponArray.splice(index, 1);
        }
    }
    printStats() {
        // old code to get just name of weapons and gold
        // console.log(`Weapons List: ${this.weaponArray.map(weapon => weapon.name).join(', ')}, Gold: ${this.gold}`)
        // changed to get all weapon information
        for (let i of this.weaponArray) {
            console.log(i);
        }
    }
}
exports.Characters = Characters;
class Orges extends Characters {
    constructor(gold, weaponArray) {
        super(gold, weaponArray);
    }
    att(chooseWeapon) {
        // old code
        // console.log(`Orge attacked with a club!`)
        /**
         *
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         *
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon);
        if (choseWeapon in this.weaponArray) {
            console.log(`Orge attacked with ${chooseWeapon}!`);
        }
        else if (chooseWeapon === undefined) {
            console.log(`Orge attacked with a club!`);
        }
        else {
            console.log(`Dont have ${chooseWeapon}! Orge attacked with their fists instead!`);
        }
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
    att(chooseWeapon) {
        // old code
        // console.log(`Peons attacked with a club!`)
        /**
         *
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         *
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon);
        if (choseWeapon in this.weaponArray) {
            console.log(`Peons attacked with ${chooseWeapon}!`);
        }
        else if (chooseWeapon === undefined) {
            console.log(`Peons attacked with a club!`);
        }
        else {
            console.log(`Dont have ${chooseWeapon}! Peons attacked with their fists instead!`);
        }
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
    att(chooseWeapon) {
        // old code
        // console.log(`Knight attacked with a sword!`)
        /**
         *
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         *
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon);
        if (choseWeapon in this.weaponArray) {
            console.log(`Knight attacked with ${chooseWeapon}!`);
        }
        else if (chooseWeapon === undefined) {
            console.log(`Knight attacked with a sword!`);
        }
        else {
            console.log(`Dont have ${chooseWeapon}! Knight attacked with their fists instead!`);
        }
    }
    def() {
        console.log("Knights defending with a armor!");
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
    att(chooseWeapon) {
        // old code
        // console.log(`Archer attacked with a bow and arrows!`)
        /**
         *
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional/no input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         *
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon);
        if (choseWeapon in this.weaponArray) {
            console.log(`Archer attacked with ${chooseWeapon}!`);
        }
        else if (chooseWeapon === undefined) {
            console.log(`Archer attacked with a bow and arrows!`);
        }
        else {
            console.log(`Dont have ${chooseWeapon}! Archer attacked with their fists instead!`);
        }
    }
    def() {
        console.log("Archers defending with only their tunic!");
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

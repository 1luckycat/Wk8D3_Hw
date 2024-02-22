"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
// instantiating weapons
let weapons = [new shapes_1.Weapon('Club', 75), new shapes_1.Weapon('Bigger Club', 100, "Bigger club than normal club")];
let weapons2 = [new shapes_1.Weapon('Club', 75), new shapes_1.Weapon('Bigger Club', 100, "Bigger club than normal club")];
let weapons3 = [new shapes_1.Weapon('Sword', 100, "A long pointy weapon"), new shapes_1.Weapon('Axe', 150), new shapes_1.Weapon('Spear', 130, "An even longer pointy weapon")];
let weapons4 = [new shapes_1.Weapon('Mighty Bow and Arrows', 80), new shapes_1.Weapon('Dagger', 50, "A short pointy weapon")];
for (let i of weapons3) {
    console.log(i);
}
// instantiating characters
let charArray = [new shapes_1.Orges(30, weapons), new shapes_1.Peons(20, weapons2), new shapes_1.Knights(40, weapons3), new shapes_1.Archers(50, weapons4)];
for (let i of charArray) {
    console.log(i);
}
// show list of character's gold
for (let i of charArray) {
    console.log(i.gold);
}
// showing list of each characters' attacks
let attArray = [new shapes_1.Orges(30, weapons), new shapes_1.Peons(20, weapons2), new shapes_1.Knights(40, weapons3), new shapes_1.Archers(50, weapons4)];
for (let att of attArray) {
    att.att();
}
// showing list of each characters' defenses
let defArray = [new shapes_1.Orges(30, weapons), new shapes_1.Peons(20, weapons2), new shapes_1.Knights(40, weapons3), new shapes_1.Archers(50, weapons4)];
for (let def of defArray) {
    def.def();
}
// showing a new character collecting more gold
let orgesMoney = new shapes_1.Orges(10, weapons);
orgesMoney.collectGold(10);
let knight1 = new shapes_1.Knights(50, weapons3);
let newWeapon = new shapes_1.Weapon("Staff", 75, "Magical stick");
knight1.addWeapon(newWeapon);
knight1.printStats();
knight1.removeWeapon('Staff');
knight1.printStats();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
let charArray = [new shapes_1.Orges(30), new shapes_1.Peons(20), new shapes_1.Knights(40), new shapes_1.Archers(50)];
for (let i of charArray) {
    console.log(i.gold);
}
// showing list of each characters' attacks
let attArray = [new shapes_1.Orges(30), new shapes_1.Peons(20), new shapes_1.Knights(40), new shapes_1.Archers(50)];
for (let att of attArray) {
    att.att();
}
// showing list of each characters' defenses
let defArray = [new shapes_1.Orges(30), new shapes_1.Peons(20), new shapes_1.Knights(40), new shapes_1.Archers(50)];
for (let def of defArray) {
    def.def();
}
// showing a new character collecting more gold
let orgesMoney = new shapes_1.Orges(10);
orgesMoney.get(10);

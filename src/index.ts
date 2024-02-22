import { Characters, Attack, Defense, Orges, Peons, Knights, Archers, Weapon} from './shapes';

// instantiating weapons
let weapons: Weapon[] = [new Weapon('Club', 75), new Weapon('Bigger Club', 100, "Bigger club than normal club")]
let weapons2: Weapon[] = [new Weapon('Club', 75), new Weapon('Bigger Club', 100,  "Bigger club than normal club")]
let weapons3: Weapon[] = [new Weapon('Sword', 100, "A long pointy weapon"), new Weapon('Axe', 150), new Weapon('Spear', 130, "An even longer pointy weapon")]
let weapons4: Weapon[] = [new Weapon('Mighty Bow and Arrows', 80), new Weapon('Dagger', 50, "A short pointy weapon")]

for(let i of weapons3){
    console.log(i)
}

// instantiating characters
let charArray: Characters[] = [ new Orges(30, weapons), new Peons(20, weapons2), new Knights(40, weapons3), new Archers(50, weapons4)]

for (let i of charArray){
    console.log(i)
}

// show list of character's gold
for (let i of charArray) {
    console.log(i.gold)
}


// showing list of each characters' attacks
let attArray: Attack[] = [ new Orges(30, weapons), new Peons(20, weapons2), new Knights(40, weapons3), new Archers(50, weapons4) ]

for (let att of attArray) {
    att.att()
}


// showing list of each characters' defenses
let defArray: Defense[] = [ new Orges(30, weapons), new Peons(20, weapons2), new Knights(40, weapons3), new Archers(50, weapons4) ]

for (let def of defArray) {
    def.def()
}


// showing a new character collecting more gold
let orgesMoney = new Orges(10, weapons)
orgesMoney.collectGold(10)


let knight1 = new Knights(50, weapons3)
knight1.printStats()


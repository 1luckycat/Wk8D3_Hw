import { Characters, Attack, Defense, Orges, Peons, Knights, Archers} from './shapes';

let charArray: Characters[] = [ new Orges(30), new Peons(20), new Knights(40), new Archers(50)]

for (let i of charArray) {
    console.log(i.gold)
}

// showing list of each characters' attacks
let attArray: Attack[] = [ new Orges(30), new Peons(20), new Knights(40), new Archers(50) ]

for (let att of attArray) {
    att.att()
}

// showing list of each characters' defenses
let defArray: Defense[] = [ new Orges(30), new Peons(20), new Knights(40), new Archers(50) ]

for (let def of defArray) {
    def.def()
}

// showing a new character collecting more gold
let orgesMoney = new Orges(10)
orgesMoney.get(10)


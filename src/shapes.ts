import { v4 as uuidv4 } from 'uuid'



export abstract class Characters {
    constructor(protected gold$: number, weaponArray: Weapon[]){}
    get gold(){return this.gold$}
    

    addWeapon(){
        if (name: string): Weapon[] {
            return weaponArray.append(name)
        }
    }

    removeWeapon(){
        if (name:string in weaponArray: Weapon[]): Weapon[]{
            weaponArray.pop(name)
        }
    }

    printStats(){
        console.log(`Weapons List: ${weaponArray}`)
    }
}


export interface Attack{
    att():void
}

export interface Defense{
    def():void
}

export interface Collect{
    get():void
}

// export interface addWeapon{
//     if (name: string): Weapon[] {
//         return weaponArray.append(name)
//     }
// }

// export interface removeWeapon{
//     if (name:string in weaponArray: Weapon[]): Weapon[]{
//         weaponArray.pop(name)
//     }
// }




export class Orges extends Characters implements Attack, Defense{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log("Orge attacked with a club!")
    }
    
    def():void {
        console.log("Orge defending with a shield!")
    }
    
    get(getGold: number){
        return this.gold + getGold
    }
    
}

export class Peons extends Characters implements Attack, Defense{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log("Peon attacked with a club!")
    }
    
    def():void {
        console.log("Peon defending with a shield!")
    }
    
    get(getGold: number){
        return this.gold + getGold
    }
    
}

export class Knights extends Characters implements Attack, Defense{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log("Knight attacked with a sword!")
    }
    
    def():void {
        console.log("Knight defending with armor!")
    }
    
    get(getGold: number){
        return this.gold + getGold
    }
    
}

export class Archers extends Characters implements Attack, Defense{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log("Archer attacked with bow and arrows!")
    }
    
    def():void {
        console.log("Archer defending with only a tunic!")
    }
    
    get(getGold: number){
        return this.gold + getGold
    }
    
}

export class Weapon {
    readonly id: string
    name: string
    description?: string
    damagePoints: number

    constructor(name: string, damagePoints: number, description?: string, ) {
        this.id = uuidv4(),
        this.name = name,
        this.description = description
        this.damagePoints = damagePoints
    }
}
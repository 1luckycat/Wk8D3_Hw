import { v4 as uuidv4 } from 'uuid'



export abstract class Characters {
    private weaponArray: Weapon[] = [];
    constructor(protected gold$: number, weaponArray: Weapon[]){
        this.weaponArray = weaponArray;
    }
    
    get gold(){
        return this.gold$;
    }
    

    public addWeapon(weapon: Weapon):void {
        this.weaponArray.push(weapon);
    }

    public removeWeapon(weaponId: string):void {
        // old code to try to remove a weapon from weapon list
        // this.weaponArray = this.weaponArray.filter(weapon => weapon.id !== weaponId)

        const index = this.weaponArray.findIndex((weapon) => weapon.name === weaponId)

        if (index !== -1){
            this.weaponArray.splice(index, 1)
        }
    }

    public printStats(){
        // old code to get just name of weapons and gold
        // console.log(`Weapons List: ${this.weaponArray.map(weapon => weapon.name).join(', ')}, Gold: ${this.gold}`)
        // changed to get all weapon information
        for(let i of this.weaponArray){
            console.log(i)
        }
    }
}


export interface Attack{
    att():void
}

export interface Defense{
    def():void
}

export interface Collect{
    collectGold(amount: number):void
}


export class Orges extends Characters implements Attack, Defense, Collect{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log(`Orge attacked with a club!`)
    }
    
    def():void {
        console.log("Orge defending with a shield!")
    }
    
    collectGold(getGold: number){
        this.gold$ += getGold
        console.log(this.gold$)
    }
    
}

export class Peons extends Characters implements Attack, Defense, Collect{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log(`Peons attacked with a club!`)
    }
    
    def():void {
        console.log("Peons defending with a shield!")
    }
    
    collectGold(getGold: number){
        this.gold$ += getGold
        console.log(this.gold$)
    }
    
}

export class Knights extends Characters implements Attack, Defense, Collect{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log(`Knights attacked with a club!`)
    }
    
    def():void {
        console.log("Knights defending with a shield!")
    }
    
    collectGold(getGold: number){
        this.gold$ += getGold
        console.log(this.gold$)
    }
    
}

export class Archers extends Characters implements Attack, Defense, Collect{
    constructor(gold: number, weaponArray: Weapon[]){
        super(gold, weaponArray)
    }
    
    att():void {
        console.log(`Archers attacked with a club!`)
    }
    
    def():void {
        console.log("Archers defending with a shield!")
    }
    
    collectGold(getGold: number){
        this.gold$ += getGold
        console.log(this.gold$)
    }
    
}

export class Weapon {
    readonly id: string
    name: string
    description?: string
    damagePoints: number

    constructor(name: string, damagePoints: number, description?: string ) {
        this.id = uuidv4(),
        this.name = name,
        this.description = description
        this.damagePoints = damagePoints
    }
}
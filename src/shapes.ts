import { v4 as uuidv4 } from 'uuid'



export abstract class Characters {
    public weaponArray: Weapon[] = [];
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
    att(chooseWeapon?: string):void
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
    
    att(chooseWeapon: string):void {
        // old code
        // console.log(`Orge attacked with a club!`)
        
        /**
         * 
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         * 
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon)
        if (choseWeapon in this.weaponArray){
            console.log(`Orge attacked with ${chooseWeapon}!`)
        } else if (chooseWeapon === undefined) {
            console.log(`Orge attacked with a club!`)
        } else {
            console.log(`Dont have ${chooseWeapon}! Orge attacked with their fists instead!`)
        }
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
    
    att(chooseWeapon: string):void {
        // old code
        // console.log(`Peons attacked with a club!`)
        
        /**
         * 
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         * 
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon)
        if (choseWeapon in this.weaponArray){
            console.log(`Peons attacked with ${chooseWeapon}!`)
        } else if (chooseWeapon === undefined) {
            console.log(`Peons attacked with a club!`)
        } else {
            console.log(`Dont have ${chooseWeapon}! Peons attacked with their fists instead!`)
        }
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
    
    att(chooseWeapon: string):void {
        // old code
        // console.log(`Knight attacked with a sword!`)
        
        /**
         * 
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         * 
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon)
        if (choseWeapon in this.weaponArray){
            console.log(`Knight attacked with ${chooseWeapon}!`)
        } else if (chooseWeapon === undefined) {
            console.log(`Knight attacked with a sword!`)
        } else {
            console.log(`Dont have ${chooseWeapon}! Knight attacked with their fists instead!`)
        }
    }
    
    def():void {
        console.log("Knights defending with armor!")
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
    
    att(chooseWeapon: string):void {
        // old code
        // console.log(`Archer attacked with a bow and arrows!`)
        
        /**
         * 
         * Created a new attack method where you can choose to input a certain weapon in the list and output attacked with that weapon
         * or optional/no input which will output the original weapon used for that character
         * or give another output if that weapon chosen is not in the list
         * 
         */
        const choseWeapon = this.weaponArray.findIndex((weapon) => weapon.name === chooseWeapon)
        if (choseWeapon in this.weaponArray){
            console.log(`Archer attacked with ${chooseWeapon}!`)
        } else if (chooseWeapon === undefined) {
            console.log(`Archer attacked with a bow and arrows!`)
        } else {
            console.log(`Dont have ${chooseWeapon}! Archer attacked with their fists instead!`)
        }
    }
    
    def():void {
        console.log("Archers defending with only their tunic!")
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
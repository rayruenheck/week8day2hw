interface Attackable{
    attack():void
    
}

interface Defendable{
    defend():void
    
}
interface goldable{
    collectgold():void
}

abstract class RPGCharecter{
    constructor(protected age$:number,protected weapon$:string,protected defense$:string, protected gold$:number){}
    get age():number{
        return this.age$
    }
    get weapon():string{
        return this.weapon$
    }
    set weapon(newWeapon:string){
        this.weapon$ = newWeapon
    }
    
    get defense():string{
        return this.defense$
    }
    set defense(newDefense:string){
        this.defense$ = newDefense
    }
    get gold():number{
        return this.gold$
    }
    set gold(newGold:number){
        this.gold$ = newGold
    }
}

class Ogres extends RPGCharecter implements Defendable, Attackable,goldable{
    constructor(age:number,weapon:string,defense:string,gold:number){
        super(age,weapon,defense,gold)
    }
    attack(): void {
        console.log(`attacks with ${this.weapon$}`)
    }
    defend():void{
        console.log(`defends with ${this.defense$}`)
    }
    collectgold(): void {
        console.log(`they have ${this.gold$} pieces`)
    }
    
}
class Knights extends RPGCharecter implements Defendable, Attackable,goldable{
    constructor(age:number,weapon:string,defense:string,gold:number){
        super(age,weapon,defense,gold)
    }
    attack(): void {
        console.log(`attacks with ${this.weapon$}`)
    }
    defend():void{
        console.log(`defends with ${this.defense$}`)
    }
    collectgold(): void {
        console.log(`they have ${this.gold$} pieces`)
    }
    
}
class Peons extends RPGCharecter implements Defendable, Attackable,goldable{
    constructor(age:number,weapon:string,defense:string,gold:number){
        super(age,weapon,defense,gold)
    }
    attack(): void {
        console.log(`attacks with ${this.weapon$}`)
    }
    defend():void{
        console.log(`defends with ${this.defense$}`)
    }
    collectgold(): void {
        console.log(`they have ${this.gold$} pieces`)
    }
    
}
class Archers extends RPGCharecter implements Defendable, Attackable,goldable{
    constructor(age:number,weapon:string,defense:string,gold:number){
        super(age,weapon,defense,gold)
    }
    attack(): void {
        console.log(`attacks with ${this.weapon$}`)
    }
    defend():void{
        console.log(`defends with ${this.defense$}`)
    }
    collectgold(): void {
        console.log(`they have ${this.gold$} pieces`)
    }
}

const archer = new Archers(23,'bow and arrow','tunic',100)

const peon = new Peons(32,'club','shield',10)

const knight = new Knights(26,'sword','armor',200)

const oger = new Ogres(234,'club','shield',150)

archer.attack()



archer.defend()
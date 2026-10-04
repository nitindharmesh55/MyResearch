let form = document.querySelector("form");
let name = document.getElementById("Name");
let hP = document.getElementById("Hp");
let attack = document.getElementById("ATC");
let  pokemonType = document.getElementById("type");
let pokemonContainer = document.getElementById("pokemonDisplay");

const pokemons = [];

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    let pokemon;

if (pokemonType.value == "fire") {
    pokemon = new FirePokemon(
        name.value,
        Number(hP.value),
        Number(attack.value),
        pokemonType.value
    );
}
else if (pokemonType.value == "water") {
    pokemon = new WaterPokemon(
        name.value,
        Number(hP.value),
        Number(attack.value),
        pokemonType.value
    );
}
else {
    pokemon = new Pokemon(
        name.value,
        Number(hP.value),
        Number(attack.value),
        pokemonType.value
    );
}

pokemons.push(pokemon);
})

console.log(pokemons);



// Pokemon Class ;

class Pokemon {
    constructor(name, hp, attack, type) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.type = type;
    }
    attackPokemon(){
        return `${this.name} attacks with ${this.attack} damage !`;
    }
    takeDamage(damege){
        return this.hp -= damege;
    }
    set hp(newHp){
        if(newHp > 0){
          this._hp = newHp;
        }
    }
    get hp(){
        return this._hp;
    }
}

class FirePokemon extends Pokemon {
    constructor(name, hp, attack, type ) {
        super(name, hp, attack,type )
    }

    attackPokemon(){
        return `${this.name} uses a fire attack for ${this.attack} damage`;
    }
}

class WaterPokemon extends Pokemon {
    constructor(name, hp, attack, type) {
        super(name, hp, attack, type);
    }
    attackPokemon(){
        return `${this.name} uses Water attack for ${this.attack} damege`;
    }
}

const squartel = new  WaterPokemon("Squid", 1200, 90, "Water")
console.log(squartel.attackPokemon());
// console.log(charizard.attackPokemon());
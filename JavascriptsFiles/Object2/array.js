const fruits = [{name:"Apple", color:"Red"},
                        {name:"Banana", color:"Yellow"},
                        {name:"PineApple", Color:"Lime"}
]


console.log(fruits[0]);


// Adding new object ;
// 1. push();
fruits.push({name:"Lime", color:"Green"});

// 2. remove ()
fruits.pop();
console.log(fruits);



// Foreach


fruits.forEach((fruits)=>{
    console.log(fruits.name);
    
})

//Map: 

const fruitsName =  fruits.map((fruit) =>{
    return fruit.name + " IS " +  fruit.color;
})
console.log(fruitsName);


// filter  return new array after checking condiiton for ecah elements;

const yellowFruits =  fruits.filter((fruit) =>{
    return fruit.color === "Yellow";
})

console.log((yellowFruits));


// Reduce : return single value ;

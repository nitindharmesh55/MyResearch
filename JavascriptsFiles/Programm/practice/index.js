function EvenorOdd(num){
    if(num % 2 === 0){
        console.log("Even");
    }
    else{
        console.log("odd");
        
    }
}

function age(age){
    return age >= 18 ? "Adult":"Minor";
}

function calclator(x , y){
    let add = x + y;
    console.log(`Add: ${add}`);
    let sub = x - y;
    console.log(`sub: ${sub}`);
    let mul = x * y;
    console.log(`mul: ${mul}`);
    let div = x / y;
    console.log(`Div: ${div}`);
}

function large(x , y, z){
    return Math.max(x, y, z);
}

for(let i = 1; i <= 10; i++){
    console.log(`2 X ${i} = ${2 * i}`);
}
let number = 1;
for (let i = 5; i > 0; i--){
    number = number * i; 
    
}
console.log(number);

// Javascript Lecture : 5;
// Callbacks;     a function that is passed as an argument to another function;

//  used to handel asynchronous operations
// 1. reading files
// 2. Network request
// 3. Interacting with database;


// hello(goodbye);
// function hello(callback){
//     console.log("hello");
//     callback(name);
    
// }
// function name(name){
//     console.log(`Hey There: ${name}`);
    
// }
// function goodbye(name){
//     console.log("Good Bye!");
//     name("nitin")
    
// }
sum(DisplayDom, 10 , 25);

function sum(callback , x , y){
    let result =  x + y;
    callback(result)
}
function displayconsole(result){
    console.log(result);
}

function DisplayDom(result){
    document.getElementById("myh1").textContent = result;
}
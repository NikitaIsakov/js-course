// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }

// showFirstMessage("hello world!");
// console.log(num);



// let calc = function(a, b){
//     return(a + b);
// }

let calc = (a,b) => a+b;

console.log(calc(3,4));

console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);


let str = "TEst";
console.log(str.length);

console.log(str)
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";

console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));



function first () {
    setTimeout( function(){
        console.log(2);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS (lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

function done () {
    console.log('Я прошёл 3й урок!');
}

learnJS('JavaScript', done);
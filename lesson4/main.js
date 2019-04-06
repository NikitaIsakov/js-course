let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имееет значени ' + options[key]);
}

console.log(Object.keys(options).length);

// let arr = [1,2,3,4,5];
/*
arr.pop(); //удаление последнего элемента массива
arr.push("5"); //добавление элемента в конец массива
arr.shift(); //удаление первого элемента массива
arr.unshift("1"); //добавление первого элемента массива
*/

// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });


// for (let key of mass) {
//     console.log(key);
// }



// console.log(arr);



// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["asfff", "ajjjre", "lkjje", "ljkj"],
//     i = arr.join(', ');

// console.log(i);

// let arr = ["wree", "asdf", "asdfk", "werqo"],
//     i = arr.sort();

// console.log(arr);

// let arr = [1, 15, 4],
//     i = arr.sort(compareNum);

// let compareNum = (a,b) => a-b;

// console.log(arr);


let soldier = {
    health: 400,
    armor: 100
}

let john = {
    health: 100
}

john.__proto__ = solider;

console.log(john);
console.log(john.armor)

//l6hm1

let str = "hello world";
console.log(str);

let chars = str.split("");
chars = chars.filter(char => char !== 'l' && char !== 'd');
str = chars.join("");

console.log(str);



//l6hm2

function averageOfNumbers(arr) {
    let numbers = arr.filter(item => typeof item === "number");
    if (numbers.length === 0) return 0;

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}


let mixedArray = [10, "hello", 25, true, 50, null, "30", 15];
console.log(averageOfNumbers(mixedArray));


//l6hm3


function removeElement(array, item) {
    let index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}


const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array, 4);

console.log(array);
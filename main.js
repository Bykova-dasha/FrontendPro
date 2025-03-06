//l7hm1

function createSum() {
    let total = 0;

    return function (num) {
        total += num;
        return total;
    };
}

const sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));


//l7hm2

function add (a)
{
    return function (b){
            return a * b ;

        }

}
console.log(add(5)(2));


//l7hm3

function getNumber() {
    let num;
    for (let i = 0; i < 10; i++) {
        num = prompt("Enter a number greater than 100:");

        if (num === null) {
            console.log("Input canceled.");
            return;
        }

        num = Number(num);

        if (!isNaN(num) && num > 100) {
            console.log("Last entered number:", num);
            return;
        }
    }

    console.log("Maximum number of iterations reached. Last number entered:", num);
}

getNumber();

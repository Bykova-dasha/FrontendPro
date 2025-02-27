
// L5hm1


let result = "";

for (let i = 20; i <= 30; i += 0.5) {
    result += i + " ";
}

console.log(result.trim());

//////////

let i = 20;
while (i <= 30)
{
    console.log(i);
    i += 0.5;
}

/////////



//L5hm2

const exchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    console.log(`${dollars} USD = ${dollars * exchangeRate} UAH`);
}


//L5hm3

let N = parseInt(prompt("Enter an integer N:"));

for (let i = 1; i <= 100; i++) {
    if (i * i > N) {
        break;
    }
    console.log(i);
}


//L5hm4

let num = parseInt(prompt("Enter a whole number:"));

if (num <= 1) {
    console.log("The number must be greater than 1.");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} - prime number`);
    } else {
        console.log(`${num} - is not a prime number`);
    }
}





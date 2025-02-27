
// L5hm1

let i = 20;
while (i <= 30) {
    console.log(i);
    i += 0.5;
}



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

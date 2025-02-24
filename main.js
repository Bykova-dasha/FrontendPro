//l4 hm1

let userName = prompt("Whats your name?:");
alert(`Hello, ${userName}! How are you?`);


//l4 hm2

let num = prompt("Enter a three-digit number:");

if (num.length === 3 && !isNaN(num)) {
    let [d1, d2, d3] = num;

    if (d1 === d2 && d2 === d3) {
        console.log(true, true);
    } else if (d1 === d2 || d2 === d3 || d1 === d3) {
        console.log(false, true);
    } else {
        console.log(false, false);
    }
} else {
    console.log("Please, enter a correct three-digit number");
}
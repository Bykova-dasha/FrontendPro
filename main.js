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



//l4hm3

let birthYear = prompt('Enter your year of birth');
if (birthYear === null) {
    alert("It's a pity you didn't want to enter the data.");
}

let city = prompt('In which city do you live?');
if (city === null) {
    alert("It's a pity you didn't want to enter the data.");
}

let sport = prompt('Whats your favorite sport?');
if (sport === null) {
    alert("It's a pity you didn't want to enter the data.");
}

let age = new Date().getFullYear() - birthYear;
let  message = `Your age: ${age}\nYour favorite sport: ${sport}\n`;
if (city !== null) {
    city = city.trim().toLowerCase();
    console.log("User entered city:", city);
    if (city === "kyiv") {
        message += "You live in the capital of Ukraine!";
    } else if (city === "washington") {
        message += "You live in the capital of USA!";
    } else if (city === "london") {
        message += "You live in the capital of Great Britain!";
    } else {
        message += `You live in the city of ${city || "not specified"}.`;
    }
}

let sportsChampions = {
    "football": "Andrii Shevchenko",
    "boxing": "Olexander Usyk",
    "tennis": "Viktor Diduh"
};


if (sport !== null){
    sport = sport.trim().toLowerCase();

    if (sportsChampions[sport]) {
        message += `\nCool! Do you want to become ${sportsChampions[sport]}?`;
    }
}
alert(message);
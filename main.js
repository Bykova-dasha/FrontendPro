//L10hm1

const user = {
    name: "Iryna",
    age: 22,
    city: "Kyiv",
    country: "Ukraine",
    occupation: "smm",


    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Country: ${this.country}, Work.position: ${this.occupation}`;
    }
};


console.log(user.getInfo());



//L10hm2


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);



//L10hm3

const contactBook = {
    contacts: [
        { name: "John", phone: "+38068200666", email: "john@gmail.com" },
        { name: "Alice", phone: "+38068200556", email: "alice@gmail.com" }
    ],


    findContact(name) {
        return this.contacts.find(contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()) || "Contact not found";
    },


    addContact(name, phone, email) {
        this.contacts.push({ name: name.trim(), phone, email });
        console.log(`Contact ${name.trim()} added successfully!`);
    }
};


contactBook.addContact("Bob", "+38066100175", "bob@gmail.com");


console.log(contactBook.findContact("Dasha"));
console.log(contactBook.findContact("John"));
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            console.log("Оцінка повинна бути в діапазоні 0-100.");
        }
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }

    present() {
        let index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Усі 25 занять вже заповнені.");
        }
    }

    absent() {
        let index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Усі 25 занять вже заповнені.");
        }
    }

    getAttendanceRate() {
        let attendedClasses = this.attendance.filter(value => value === true).length;
        let totalClasses = this.attendance.filter(value => value !== null).length;
        return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    }

    summary() {
        let avgGrade = this.getAverageGrade();
        let attendanceRate = this.getAttendanceRate();
        if (avgGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }

    describe() {
        return `${this.firstName} ${this.lastName}, ${this.getAge()} років`;
    }
}


const student1 = new Student("Jon", "Jonson", 2005);
student1.addGrade(95);
student1.addGrade(88);
student1.present();
student1.present();
student1.absent();
console.log(student1.describe());
console.log(student1.summary());

const student2 = new Student("Santa", "Braian", 2006);
student2.addGrade(75);
student2.addGrade(80);
student2.absent();
student2.absent();
student2.present();
console.log(student2.describe());
console.log(student2.summary());

const student3 = new Student("Kris", "Petr", 2004);
student3.addGrade(91);
student3.addGrade(90);
student3.present();
student3.present();
student3.absent();
console.log(student3.describe());
console.log(student3.summary());
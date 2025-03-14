


let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


function sumSalaries(department) {
    return Object.values(department).reduce((sum, subDept) => {
        if (Array.isArray(subDept)) {
            return sum + subDept.reduce((acc, employee) => acc + employee.salary, 0);
        }
        return sum + sumSalaries(subDept);
    }, 0);
}


console.log(sumSalaries(company));
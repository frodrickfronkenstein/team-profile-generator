class Employee {
    constructor(name = '') {
        this.name = name;
    };
}

module.exports = Employee;

console.log(new Employee());
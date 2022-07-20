const Employee = require('../lib/Employee');

test('creates an employee object',() => {
    const employee = new Employee('Joseph');

    expect(employee.name).toBe('Joseph');
});
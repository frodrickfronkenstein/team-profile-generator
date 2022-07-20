const Employee = require('../lib/Employee');

test('creates an employee object',() => {
    const employee = new Employee('Joseph', '1', 'Joseph@gmail.com');

    expect(employee.name).toBe('Joseph');
    expect(employee.id).toEqual('1');
    expect(employee.email).toBe('Joseph@gmail.com');
});
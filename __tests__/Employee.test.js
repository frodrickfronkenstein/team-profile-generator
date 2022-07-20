const Employee = require('../lib/Employee');

test('creates an employee object',() => {
    const employee = new Employee('Joseph', '1', 'Joseph@gmail.com');

    expect(employee.name).toBe('Joseph');
    expect(employee.id).toEqual('1');
    expect(employee.email).toBe('Joseph@gmail.com');
});

test('getName', () => {
    const employee = new Employee('Joseph', 'Joseph@gmail.com,', '1');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('getId', () => {
    const employee = new Employee('Joseph', 'Joseph@gmail.com,', '1');

    expect(employee.getId()).toBe(employee.id);
});

test('getEmail', () => {
    const employee = new Employee('Joseph', 'Joseph@gmail.com,', '1');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('getRole', () => {
    const employee = new Employee('Joseph', 'Joseph@gmail.com,', '1');

    expect(employee.getRole()).toBe('Employee');
})//Returns 'Employee'
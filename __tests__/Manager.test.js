const Manager = require('../lib/Manager');

//officeNumber
test('office number', () => {
    const manager = new Manager('boss', '0', 'boss@gmail.com', '666');

    expect(manager.officeNumber).toBe('666');
});

//getRole() = Manager
test('getRole', () => {
    const manager = new Manager('boss', '0', 'boss@gmail.com', '666');

    expect(manager.getRole()).toBe('Manager');
});
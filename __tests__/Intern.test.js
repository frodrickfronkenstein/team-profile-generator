const Intern = require('../lib/Intern');

//school
test('get inter school', () => {
    const intern = new Intern('Ryan', '3', 'Ryanrulz@hotmail.com', 'hollywoodupstairsmedicalschool');

    expect(intern.school).toBe('hollywoodupstairsmedicalschool');
})

//getSchool()
test('getSchool', () => {
    const intern = new Intern('Ryan', '3', 'Ryanrulz@hotmail.com', 'hollywoodupstairsmedicalschool');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})
//getRole()
test('getRole()', () => {
    const intern = new Intern('Ryan', '3', 'Ryanrulz@hotmail.com', 'hollywoodupstairsmedicalschool');

    expect(intern.getRole()).toBe('Intern');
});
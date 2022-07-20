const Engineer = require('../lib/Engineer');

//github username
test('get engineer gitHub username', () => {
    const engineer = new Engineer('Bill', '2', 'bill@gmail.com', 'billsgithubusername');

    expect(engineer.github).toBe('billsgithubusername');
});

//getGithub()


//getRole()// Overridden to return'Engineer'
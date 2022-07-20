const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let staff = [];

function addStaff(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'what is the name of the manager?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'what is the employee id of the manager?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'what is the email of the manager?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number?',
        },
    ])
    .then(({ managerName, managerID, managerEmail, officeNumber }) => {
        let manager = new Manager(managerName, managerID, managerEmail, officeNumber);
        
        team.push(manager);

        addEngineer();
    });
}

function 
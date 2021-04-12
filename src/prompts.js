// Packages needed for this application, inquirer is installed by running 'npm i'
const inquirer = require('inquirer');
const fs = require('fs');
const genhtml = require('./generatehtml');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

let employees = [];

// Array of questions for user input
const mquestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'empName',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office',
    },
];

const engquestions = [
    {
        type: 'input',
        message: 'What is their name?',
        name: 'empName',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is their GitHub account name?',
        name: 'github',
    },
];

const intquestions = [
    {
        type: 'input',
        message: 'What is their name?',
        name: 'empName',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What college or university do they attend?',
        name: 'school',
    },
];

// A function to write README file //////////////////////
function writeToFile(filename, data) {

    fs.writeFile(filename, genhtml(data), (err) =>
        err ? console.error(err) : console.log('Success!\n------')
    );
}

function managerStart(){

    inquirer.prompt([...mquestions])
    .then((data)=>{
        let addedManager = new Manager (data.empName, data.id, data.email, data.office)
        employees.push(addedManager)
        continueTeam(); 
    });
}

function addEngineer(){
    inquirer.prompt([...engquestions])
    .then((data)=>{
        let addedEngineer = new Engineer (data.empName, data.id, data.email, data.github)
        employees.push(addedEngineer)
        console.log('-------\nAdded: ' + addedEngineer.empName + '\n----')
        continueTeam();
        return addedEngineer
    })

}

function addIntern(){
    inquirer.prompt([...intquestions])
    .then((data)=> {
        let addedIntern = new Intern (data.empName, data.id, data.email, data.school)
        employees.push(addedIntern)
        console.log('-------\nAdded: ' + addedIntern.empName + '\n----')
        continueTeam();
        return addedIntern
    })
}

function continueTeam(){

    console.log(employees)

    inquirer.prompt({
        type: 'list',
        message: 'Build your team:',
        name: 'teamCall',
        choices: ['Add an Engineer', 'Add an Intern', `I'm finished building my team`]
    })

    .then((data)=>{
        switch (data.teamCall) {
            case 'Add an Engineer':
                addEngineer();
                break;
            case 'Add an Intern':
                addIntern();
                break;
            case `I'm finished building my team`:
                teamBuilder(employees);
                break;
            default:
                break;
        }
    })
    return employees
}

// A function to initialize app
function teamBuilder(data) { 
     
    // const filename = `../dist/${data.title.toLowerCase().split(' ').join('')}.md`;
    const filename = `../dist/indextest.html`
    writeToFile(filename, data);

};



managerStart()


// teamBuilder();
// A function call to initialize function
// init();
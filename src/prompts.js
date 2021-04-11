// Packages needed for this application, inquirer is installed by running 'npm i'
const inquirer = require('inquirer');
const fs = require('fs');
const genhtml = require('./generatehtml');

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
    {
        type: 'list',
        message: 'Build your team:',
        name: 'teambuilder',
        choice: ['Add an Engineer', 'Add an Intern', `I'm finished building my team`]
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
    {
        type: 'list',
        message: 'Is this correct?: \n----\n(Display information)',
        name: 'confirmeng',
        choice: ['Yes', 'No']
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
    {
        type: 'list',
        message: 'Is this correct?: \n----\n(Display information)',
        name: 'confirmint',
        choice: ['Yes', 'No']
    },
];


// A function to write README file
function writeToFile(filename, data) {

    fs.writeFile(filename, genhtml(data), (err) =>
        err ? console.error(err) : console.log('Success!\n------')
    );
}

// A function to initialize app
function init() { 
    inquirer.prompt([...questions])
    .then((data) => {
        
        const filename = `../dist/${data.title.toLowerCase().split(' ').join('')}.html`;
        writeToFile(filename, data);

    });
}

// A function call to initialize function
init();
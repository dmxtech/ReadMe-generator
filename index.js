// TODO: Include packages needed for this application
const { writeFile } = require('fs').promises;
const fs = require('fs');
const inquirer = require('inquirer');
const Markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

var questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your proyect title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description',
    },
    {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Do you have a link or video?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What do you need for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide credits ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'license?',
        choices: ["MIT", "ISC", "GNUGPLv3", "NONE"]
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
]
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const Mark = Markdown(answers);
            console.log(Mark);

            // TODO: Create a function to write README file
            // function writeToFile(fileName, data) { }

            fs.writeFile('README.md', Mark, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            )
        });
}
// Function call to initialize app
init();

// const questions = []
//     ['What was your motivation?', 1],
//     ['Why did you build this project?', 2],
//     ['What problem does it solve?', 3],
//     ['What did you learn?', 4],
//     ['What makes your project stand out?', 5]];
// for (const questions of questions) {
//     console.log(questions);
// }










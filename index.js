// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from 'fs' // pull from FS function 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is projects name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'describe your project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'how will you application be used or installed?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'what is the use of the project/application?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What are he contribution guidelines of the project?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'how will we test this project?',
        name: 'Tests',
    },
    {
        type: 'list',
        message: 'What is the preferred licensed of the application?',
        name: 'License',
        choices: ['MIT','BSD','APACHE','NONE']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your Email Address?',
        name: 'Email',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Message Logged!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const READMEcontent = generateMarkdown(answers);
            writeToFile('README.md', READMEcontent);


        })


}

// Function call to initialize app
init();


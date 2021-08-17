// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide some instructions on how to install your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some instructions on how to use your code',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide some guidelines if others would like to contribute to your project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide some recommendations for people that want to test your code',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does your project need a license?',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
];

//ReadME generator using template literals
const generateReadMe = (answers) => 
`# **${answers.title}**

![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)

### Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contribution)
- [Test](#test)
- [License](#license)
- [Email & Github](#contact)

### DESCRIPTION <a name="description"></a>
${answers.description}

### Installation Instructions <a name="introduction"></a>
${answers.installation}

### Usage Guide <a name="usage"></a>
${answers.usage}

### How to Contribute <a name="contribution"></a>
${answers.contribution}

### How to Test the Application <a name="test"></a>
${answers.tests}

### Licenses <a name="license"></a>
![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)
(https://opensource.org/licenses/${answers.license})

#### Email & Github <a name="contact"></a>
${answers.email} </br>
${answers.github}  
`;

//Function to prompt with questions and build the README
function ReadMeBuilder(){
    inquirer.prompt(questions)
        .then ((answers) => {
            const readMePageContent = generateReadMe(answers);
            writeToFile('README.md', readMePageContent);
        });   
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
    ReadMeBuilder();
}


// Function call to initialize app
init();

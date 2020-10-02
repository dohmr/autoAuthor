const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);



main();
// function to initialize program
function main() {
    promptUser()
    .then ((answers) => {
        const read = generateREAD(answers);
        return writeFileSync("testing.md", read);
        
    })
    .then(() => {
        console.log("READme has been written!");
    })
    .catch ((err) => {
        console.log(err);
    });
}


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: `What is the name of your Project?`,
            name: "title",
        },
        {
            type: "input",
            message: `Please enter a description of your Application`,
            name: "description",
        },
        {
            type: "input",
            message: `What are the instructions for installation of the Application?`,
            name: "install",
        },
        {
            type: "input",
            message: `Please enter information pertaining to the usage of the Application? How it works?`,
            name: "usage",
        },
        {
            type: "input",
            message: `Please list any contributors or limits to future contributing sources.`,
            name: "limits",
        },
        {
            type: "input",
            message: `Please detail any Test instuctions for those using your code.`,
            name: "test",
        },
        {
            type: "checkbox",
            message: "Please select any license('s) this Application is covered under.",
            name: "licenses",
            choices: [
                "inquirer",
                "gitHub",

            ]
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your LinkedIn username?",
            name: "linked",
        },
                
    ]);
}

function generateREAD(answers) {
    return `
# autoAuthor

![npm](https://img.shields.io/npm/l/inquirer)
![github](https://img.shields.io/github/license/dohmr/autoAuthor)


# TITLE

${answers.title}

## Description

${answers.description}


* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [Contributions](#contributions)
* [Licenses](#licenses)


## Installation

${answers.install}

## Usage

${answers.usage}

## Questions

https://www.linkedin.com/in/${answers.linked}/

https://github.com/${answers.github}/

## Contributions or Limitations

${answers.limits}


## Licenses

The Use of ${answers.licenses} 


## Test

${answers.test}
`;

}


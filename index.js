const inquirer = require("inquirer");
const fs = require ("fs");


// function to write README file
// function writeToFile(fileName, data) {
// }

//Append text after the last... (add , null, 4) for space on readME?
fs.appendFile("README.md", process.argv[2] + '\n', function(err) {
    if (err) {
      console.log(err)
      return console.log(err);
    }  

    // console.log("Anything else?");
      });

// function to initialize program
function init() {

}

// function call to initialize program
// init();
inquirer.prompt([
    {
        type: "input",
        message:  `What is the name of your Project?`,
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
            "One",
            "Two",
            "Three",
            "Four",
        ]
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "linked",
    },
])

function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <title>${answers.name}</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Hi! My name is ${answers.name}</h1>
          <p class="lead">I am from ${answers.location}.</p>
          <a
            class="btn btn-dark btn-lg"
            role="button"
            href="https://github.com/${answers.github}"
            ><i class="fa fa-github"></i> GitHub</a
          >
          <a
            class="btn btn-dark btn-lg"
            role="button"
            href="https://www.linkedin.com/in/${answers.linkedin}/"
            ><i class="fa fa-linkedin-square"></i> LinkedIn</a
          >
        </div>
      </div>
      <div class="container">
          <h2>About Me</h2>
          <p><span class="font-weight-bold">Favorite Hobby:</span> ${answers.hobby}</p>
          <p><span class="font-weight-bold">Favorite Food:</span> ${answers.food}</p>
      </div>
    </body>
  </html>`;
  }
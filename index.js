const inquirer = require("inquirer");
const fs = require ("fs");

let questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter your name.',
  },

  {
    type: 'input',
    name: 'city',
    message: 'What city do you live in?'
  },

  {
    type: 'input',
    name: 'bio',
    message: 'Enter a short message about yourself.'
  },

  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.'
  },

  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub URL'
  }
]

inquirer
  .prompt(questions)
  .then((answers) => {
    const myName = answers.name;
    const city = answers.city;
    const linkedIn = answers.linkedin;
    const gitHub = answers.github;
    const bio = answers.bio;
    createIndexHtml(myName, city, linkedIn, gitHub, bio);
  })
  .catch((error) => {
    if (error) {
      console.log("Something went wrong!");
      console.log(error);
    }
  });

const createIndexHtml = (myName, city, linkedIn, gitHub, bio) => {

fs.appendFile("index.html", `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Bio Builder</title>
</head>

<body>
    <nav class="jumbotron jumbotron-fluid">
        <h1 class="display-4 text-center">Tell Us About Yourself!</h1>
    </nav>
    <main class="container">
        <h2><em>Name:</em> <span class="text-primary">${myName}</span></h2>
        <h2><em>City:</em> <span class="text-primary">${city}</span></h2>
        <h2><em>LinkedIn:</em> <span class="text-primary">${linkedIn}</span></h2>
        <h2><em>GitHub:</em> <span class="text-primary">${gitHub}</span></h2><br>
        <h2><em>Bio:</em></h2><p><span class="text-primary">${bio}</span></p>
    </main>

</body>

</html>
`,
err => err ? console.error(err) : console.log("Page created!"));
}
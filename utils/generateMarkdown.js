// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
}

 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (!license || license === "None") {
    return "";
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.Description}

## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.Installation}




## Usage
${data.Usage}



## License
${data.License}

## Features

If your project has a lot of features, list them here.

## How to Contribute
${data.Contributing}

## Tests
${data.Tests}

## Contact 
${data.Github}
${data.Email}


`;
}

export default generateMarkdown;

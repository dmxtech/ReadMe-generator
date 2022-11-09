// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  if (license === "GNUGPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  if (license === "GNUGPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `Licensed under the ${renderLicenseLink(license)} license`;
  }
  if (license === "ISC") {
    return `Licensed under the ${renderLicenseLink(license)} license`;
  }
  if (license === "GNUGPL v3") {
    return `Licensed under the ${renderLicenseLink(license)} license`;
  }
}

// TODO: Create a function to generate markdown for README
function MarkDown(answers) {

  return `
  # ${answers.title}

   ${renderLicenseBadge(answers.license)}

  ## Table of Content
  
  - [description](#description)
  - [reason](#reason)
  - [problem](#problem)
  - [motivation](#motivation)
  - [learned](#learned)
  - [link](#link)
  - [installation](#installation)
  - [usage](#usage)
  - [credits](#credits)
  - [License](#License)
  - [Email](#Email)
  - [github](#github)

  ## description
  ${answers.description}

  ## reason
  ${answers.reason}

  ## problem
  ${answers.problem}

  ## motivation
  ${answers.motivation}

  ## learned
  ${answers.learned}

  ## link
  ${answers.link}
  Video: [video](${answers.link}).


  ## installation
  ${answers.installation}

  ## usage
  ${answers.usage}

  ## credits
  ${answers.credits}

  ## License
  ${renderLicenseSection(answers.license)}

  ## Email
  ${answers.Email}

  Issues or questions? Email me [here](mailto:${answers.Email}).

  ## github
  ${answers.github}

  
 See more work at my Github profile: [Github profile](https://github.com/${answers.github}).
`;
}


module.exports = MarkDown;

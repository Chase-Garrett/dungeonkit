# Dungeonkit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A full-stack application for creating and storing character sheets for Table-top Role-playing games.

## Table of Contents

-[Installation](#installation)

-[Usage](#usage)

-[Credits](#credits)

-[Tests](#tests)

-[License](#license)

-[Questions](#questions)

## Installation

N/A

## Usage
**This project is currently deployed at: https://rocky-wave-37637-36d61b992c23.herokuapp.com/login**

When first visiting the page you will be prompted to login. If you already have an account simply enter your username and password. If this is your first time visiting the page you can click "Sign up" instead. This will take you to a page were you can enter a new username and password.
After logging in or signing up you will be taken to your profile page where you can view your existing characters or create a new character. Clicking on the name of an existing character will allow you to edit that character sheet. Character sheets can be saved to retain any updated information by clicking the "Save" button in the top left corner. Additionally you can generate a PDF for the current character sheet by clicking the "PDF" button. This PDF will be saved to the server and will not update with new information until clicked again at which point the old PDF will be overwritten with the new character data. If you want to download the PDF you can click the "Download PDF" button and the file will be automatically downloaded by your browser.

Below are some examples of the various pages from Dungeonkit.

![login page](/screenshots/login.png)
![signup page](/screenshots/signup.png)
![profile page](/screenshots/profile.png)
![character sheet](/screenshots/charsheet.png)

## Credits

This project utilizes node.js and express.js for backend functionality. Frontend includes bootstrap for CSS and handlebars for the view engine. Bcrypt and uuid are used to keep user information secure. MySQL and sequelize are used for managing the database. Puppeteer is used to generate a printable PDF of character sheets.

### **Contributors**

[![](https://github.com/Chase-Garrett.png?size=50)](https://github.com/Chase-Garrett)
[![](https://github.com/dan-watkins.png?size=50)](https://github.com/dan-watkins)
[![](https://github.com/brycehadl.png?size=50)](https://github.com/brycehadl)
[![](https://github.com/TooSparky.png?size=50)](https://github.com/TooSparky)
[![](https://github.com/bryanreyes8991.png?size=50)](https://github.com/bryanreyes8991)

## Tests

N/A

## License

This project is licensed under the MIT license.

## Questions
 If you have any questions, please contact me at chasegarrett@tutanota.com. You can also visit my [GitHub](https://github.com/Chase-Garrett) for more of my work. You are also free to visit and reach out to any of the other contributors to this project, simply click on their profile image displayed under [Contributors](#contributors) for more of their information.
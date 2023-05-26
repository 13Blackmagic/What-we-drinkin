const unil = require('until');
const inquirer = require('inquirer');
const generateMarkdown = require('../utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
const writeFileAsync = util.promisify(fs.writeFile);
const questions = [
    {
        type: 'input',
        name: 'liqour',
        message: 'Do you like liqour?',
    },
    {
        type: 'input',
        name: 'whiskey',
        message: 'Do you like whiskey?',
    },
    {
        type: 'input',
        name: 'vodka',
        message: 'Do you like vodka?',
    },
    {
        type: 'input',
        name: 'gin',
        message: 'Do you like gin?',
    },
    {
        type: 'input',
        name: 'rum',
        message: 'Do you like rum?',
    },
    {
        type: 'input',
        name: 'tequila',
        message: 'Do you like tequila?',
    },
    {
        type: 'input',
        name: 'scotch',
        message: 'Do you like scotch?',
    },
    {
        type: 'input',
        name: 'liqueur',
        message: 'Do you like liqueur?',
    },
];
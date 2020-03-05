const fs = require ('fs');
const questions = ["Project title?", "Description?", "Table of Contents?", "Installation?", "Usage?", "License?", "Contributing?", "Tests?", "Questions?", "User GitHub profile picture?", "User GitHub email?"];
// const prompts = require('prompts');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// function askQuestions(){
//     for (var i = 0; i < questions.length; i++) {
//         rl.question(questions[i]);
//     }}

//     fs.writeFile('readme.txt', questions.length, askQuestions)
// rl.question("What is your github username? ", function(username) {

    rl.question("What is the title of your project? ", function(name) { 
        rl.question("Give a brief description of the project. ", function(description) {
            rl.question("Table of Contents ", function(ToC) {
                rl.question("Installaion ", function(Installation) {
                    rl.question("Usage ", function(Usage) {
                        rl.question("License ", function(License) {
                            rl.question("Contributing ", function(Contributing) {
                                rl.question("Tests ", function(Tests) {
                                    rl.question("Questions ", function(Questions) {
                                        


                                            fs.writeFile('readme.md',{name}, (err) => {
                                                // if (err) throw err;
                                                // console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.md',{description}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.text',{ToC}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.text', {Installation}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.text', {Usage}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.text', {License}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.text', {Contributing}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.text', {Tests}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            fs.appendFile('readme.text', {Questions}, (err) => {
                                                if (err) throw err;
                                                console.log('The lyrics were updated!');
                                            });
                                            rl.close();

                                    });
                                });
                            });
                        });
                    });    
                });        
            });    
        });
    });


    rl.on("close", function() {
        console.log("\nBYE BYE !!!");
        process.exit(0);
    });
// 'use strict';

// const { prompt } = require('./');

// let interval;

// (async function(){
//     const questions = [
//         {
//             type: 'text',
//             name: 'twitter',
//             message: `What's your twitter handle?`,
//             initial: `terkelg`,
//             format: v => `@${v}`
//         },
//         {
//             type: 'number',
//             name: 'age',
//             message: 'How old are you?',
//             validate: value => value < 18 ? `Sorry, you have to be 18` : true
//         },
//         {
//             type: 'password',
//             name: 'secret',
//             message: 'Tell me a secret'
//         },
//         {
//             type: 'confirm',
//             name: 'confirmed',
//             message: 'Can you confirm?'
//         },
//         {
//             type: prev => prev && 'toggle',
//             name: 'confirmtoggle',
//             message: 'Can you confirm again?',
//             active: 'yes',
//             inactive: 'no'
//         },
//         {
//             type: 'list',
//             name: 'keywords',
//             message: 'Enter keywords'
//         }
//     ]

//         const answers = await prompt(questions, {onCancel:cleanup, onSubmit:cleanup});

        

// })
  
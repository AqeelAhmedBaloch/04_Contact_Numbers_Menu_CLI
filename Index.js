#!/usr/bin/env node
import inquirer from "inquirer";
console.log("===============================");
console.log("Welcome to contact Numbers Menu");
console.log("===============================");
let contacts = [];
let contactSerialNo = 1;
async function contactMenuInput() {
    const inputContact = await inquirer.prompt({
        type: "list",
        name: "contact",
        message: "Select your option",
        choices: ["Add Contact", "View Contact", "Close Menu"]
    });
    let { contact } = inputContact; // destructuring
    if (contact === "Add Contact")
        addContact();
    if (contact === "View Contact")
        viewContact();
    if (contact === "Close Menu")
        console.log(`\nThank You for using contact Menu.`);
}
;
contactMenuInput(); // Loop back to the menu after each action
async function addContact() {
    const inputContactDetails = await inquirer.prompt([
        {
            type: "input",
            name: "personName",
            message: "Enter Person Name :- "
        },
        {
            type: "number",
            name: "phoneNumber",
            message: "Enter Contact Number :-",
        },
        {
            type: "input",
            name: "personCity",
            message: "Enter City Name :-"
        },
    ]);
    const { personName, phoneNumber, personCity } = inputContactDetails;
    contacts.push({ ID: contactSerialNo++, Name: personName, PhoneNo: phoneNumber, City: personCity });
    console.log(`\nNew Contact number has been added\n`);
    contactMenuInput();
}
function viewContact() {
    if (contacts.length > 0)
        contacts.forEach((user) => console.log(`\n${user.ID}. Person Name : ${user.Name.toUpperCase()} ---- Contact Number : ${user.PhoneNo}. City Name: ${user.City.toUpperCase()}`));
    else
        console.log(`\nNo Contacts available!`);
    contactMenuInput(); // Start the menu
}

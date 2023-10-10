// import yargs from "yargs";
// import * as contacts from "./contacts";
// // const { hideBin } = require("yargs/helpers");
// import { hideBin } from "yargs/helpers";

// console.log(contacts);

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "read":
//       const allContacts = await contacts.listContacts();
//       return console.log(allContacts);
//     case "getById":
//       const oneContact = await contacts.getContactById(id);
//       return console.log(oneContact);
//     case "add":
//       const newContact = await contacts.addContact({ name, phone });
//       return console.log(newContact);
//     default:
//       return console.log("unknown action");
//   }
// };

// const arr = hideBin(process.argv);
// console.log(arr);
// const { args } = yargs.parse(arr);
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "313423434623" });

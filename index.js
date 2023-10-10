// import * as contacts from "./contacts.js";

import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
} from "./contacts.js";

import { program } from "commander";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log("Спикос контктів:", allContacts);
    case "getById":
      const contactById = await getContactById(id);
      return console.log("Пошук конткта:", contactById);
    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log("Додавання контакта", newContact);
    case "remove":
      const removedContact = await removeContact(id);
      return console.log("Видалення контакта", removedContact);
    default:
      console.warn("Unknoown results.");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const options = program.opts();

invokeAction(options);
invokeAction({ action: "list" });
invokeAction({ action: "getById", id: "vza2RIzNGIwutCVCs4mCL" });
invokeAction({
  action: "add",
  id: "123",
  name: "Olga",
  email: "asdf@sdf.com",
  phone: "123124124124",
});
invokeAction({
  action: "remove",
  id: "vza2RIzNGIwutCVCs4mCL",
});

// ! Функції для роботи з контактами
import fs from "fs/promises";
import path from "path";
import languageEncoding from "detect-file-encoding-and-language";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");
const { encoding } = await languageEncoding(contactsPath);

// Спикос контктів:
export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, encoding);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

// Пошук конткта:
export async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const findedContact = contacts.find((contact) => contact.id === contactId);
    return findedContact || null;
  } catch (error) {
    console.log(error);
  }
}

// Додавання контакта
export async function addContact(data) {
  try {
    const newContact = { id: nanoid(), ...data };
    const contacts = await listContacts();
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact || null;
  } catch (error) {
    console.log(error);
  }
}

// Видалення контакта
export async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    console.log(index);
    if (index === -1) {
      return null;
    }
    const [removedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
  } catch (error) {
    console.log(error);
  }
}

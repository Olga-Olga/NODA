import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts";

async function main() {
  try {
    // Отримання списку контактів
    const contacts = await listContacts();
    console.log("Список контактів:", contacts);

    // Отримання контакту за ID (замість 1 вставте бажаний ID)
    const contactId = 1;
    const contact = await getContactById(contactId);
    console.log("Контакт за ID", contactId, ":", contact);

    // Додавання нового контакту
    const newContact = {
      name: "Новий Контакт",
      email: "newcontact@example.com",
      phone: "1234567890",
    };
    const addedContact = await addContact(newContact);
    console.log("Доданий контакт:", addedContact);

    // Видалення контакту за ID (замість 2 вставте бажаний ID)
    const contactToDeleteId = 2;
    const isRemoved = await removeContact(contactToDeleteId);
    if (isRemoved) {
      console.log("Контакт з ID", contactToDeleteId, "був успішно видалений");
    } else {
      console.log("Не вдалося видалити контакт з ID", contactToDeleteId);
    }
  } catch (error) {
    console.error("Помилка:", error.message);
  }
}

main();

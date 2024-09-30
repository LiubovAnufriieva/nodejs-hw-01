import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  try {
    const data = await readContacts();
    const contacts = data ? JSON.parse(data) : [];

    const updatedContacts = [...contacts, createFakeContact()];
    await writeContacts(JSON.stringify(updatedContacts, undefined, 2));
  } catch (error) {
    console.log('Error processing contacts:', error.message);
  }
};

addOneContact();

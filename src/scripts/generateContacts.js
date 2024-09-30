import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const generateContacts = async (number) => {
  try {
    let contactsDB = [];
    const data = await readContacts();
    contactsDB = JSON.parse(data);

    for (let i = 0; i < number; i += 1) {
     contactsDB.push(createFakeContact());
    }

    await writeContacts(JSON.stringify(contactsDB, undefined, 2));
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);

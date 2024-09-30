import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  try {
    let contactsDB = [];
    const data = await readContacts();
    contactsDB = JSON.parse(data, undefined, 2);
    return contactsDB.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());

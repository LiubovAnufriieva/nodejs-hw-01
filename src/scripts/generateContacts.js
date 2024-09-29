import { PATH_DB } from "../constants/contacts.js";
import * as fs from "node:fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
  try {
    let contactsDB = [];
    const data = await fs.readFile(PATH_DB, "utf-8");
    contactsDB = JSON.parse(data);

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...contactsDB, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);

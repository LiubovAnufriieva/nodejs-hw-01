import { PATH_DB } from "../constants/contacts.js";
import * as fs from "node:fs/promises";

export const countContacts = async () => {
  try {
    let contactsDB = [];
    const data = await fs.readFile(PATH_DB, "utf-8");
    contactsDB = JSON.parse(data, undefined, 2);
    return contactsDB.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());

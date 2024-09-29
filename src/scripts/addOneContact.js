import { PATH_DB } from "../constants/contacts.js";
import * as fs from "node:fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {};
try {
  let contactsDB = [];
  const data = await fs.readFile(PATH_DB, "utf-8");
  contactsDB = JSON.parse(data);

  const oneContact = createFakeContact();
  contactsDB.push(oneContact);
  await fs.writeFile(PATH_DB, JSON.stringify(contactsDB, undefined, 2));
} catch (error) {
  console.error(error);
}
addOneContact();

import { Contact } from '../db/models/contact.js';

export const getAll = async () => {
  const contacts = await Contact.find({}, '-createAt -updateAt');
  return contacts;
};

export const getById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const newContact = await Contact.create(payload);
  return newContact;
};

export const deleteContact = async (contactId) => {
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  return deletedContact;
};
export const updateContact = async (id, data) => {
  const updatedStudent = await Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedStudent;
};

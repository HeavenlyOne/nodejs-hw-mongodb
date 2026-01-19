import createHttpError from 'http-errors';
import {
  createContact,
  deleteContact,
  getAll,
  getById,
  updateContact,
} from '../services/contacts.js';
import { randomDataCreator } from '../utils/randomDataCreator.js';

export const getAllContacts = async (req, res) => {
  const contacts = await getAll();
  res.status(200).json({
    status: 200,
    message: 'Successfuly found contacts!',
    data: {
      contacts,
    },
  });
};

export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await getById(id);
    if (!contact) {
      throw createHttpError(404, 'Contact not found');
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${id}`,
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createNewContact = async (req, res) => {
  const result = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully creates a contact',
    data: result,
  });
};

export const deleteOnecontact = async (req, res) => {
  const { id } = req.params;
  const result = await deleteContact(id);
  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }
  res.json({
    message: 'Contact deleted',
  });
};

export const createNewContactWithoutRequest = async (req, res) => {
  const contactObj = randomDataCreator();
  const result = await createContact(contactObj);
  res.status(201).json({
    status: 201,
    message: 'Successully creates contact',
    data: result,
  });
};

export const updateSomeContact = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact',
    data: result,
  });
};

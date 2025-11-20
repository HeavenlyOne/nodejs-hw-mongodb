import { Contact } from '../db/models/contact.js';

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({}, '-createAt -updateAt');
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
    const contact = await Contact.findById(id);
    if (!contact) {
      const error = new Error();
      error.status = 404;
      error.message = 'Contact not found';
      throw error;
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

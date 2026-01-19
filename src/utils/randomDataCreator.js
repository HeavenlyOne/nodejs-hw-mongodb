const namesArr = [
  'Oles',
  'Marko',
  'Markiyan',
  'Taras',
  'Orysya',
  'Olesya',
  'Olga',
  'Oksana',
  'Sofia',
  'Solomia',
  'Athena',
  'Nicolaus',
  'Stanislav',
];
const sonamesArr = [
  'Peremojko',
  'Shevchenko',
  'Kozub',
  'Lespuh',
  'Kolodiy',
  'Davidenko',
  'Uschenko',
  'Kozak',
  'Mudryk',
  'Lemeshko',
  'Senchuk',
  'Bumchuk',
];
const contactTypes = ['personal', 'work', 'home'];
const lettersString =
  'qwertyuiopasdfgjklzxcvbnmmmjghedjetdcbrtggwncqwgyiqyrcnwhb';
const favotires = [true, false];

const makeEmail = () => {
  const diferenceNumn = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  const num1 = Math.floor(Math.random() * lettersString.length) + 1;
  const num2 = num1 - diferenceNumn;

  return lettersString.substring(num1, num2);
};

export const randomDataCreator = () => {
  const randomName = namesArr[Math.floor(Math.random() * namesArr.length)];
  const randomSoname =
    sonamesArr[Math.floor(Math.random() * sonamesArr.length)];
  const randomCharacter = `${randomName} ${randomSoname}`;
  const randomNumber = Math.floor(Math.random() * 999999999) + 100000000;
  const randomPhoneNumber = `+380${randomNumber}`;
  const randomEmail = `${makeEmail()}@gmail.com`;
  const randomContactType =
    contactTypes[Math.floor(Math.random() * contactTypes.length)];
  const randomFavourites =
    favotires[Math.floor(Math.random() * favotires.length)];

  return {
    name: randomCharacter,
    phoneNumber: randomPhoneNumber,
    email: randomEmail,
    contactType: randomContactType,
    isFavourite: randomFavourites,
  };
};

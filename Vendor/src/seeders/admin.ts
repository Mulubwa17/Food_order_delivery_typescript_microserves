import {Admin} from "../models/admin";
import faker  from '@faker-js/faker';

export const adminSeedData = async () => {
  try {
    const Admins = [];
    for (let i = 0; i < 10; i++) {
      
      const newAdmin = {
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        contact: faker.phone.phoneNumber(),
        password: '12345678',
        isActive: true
      };
      Admins.push(newAdmin);
    }
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await Admin.insertMany(Admins);
    console.log('Admins added successfully 🚀');
  } catch (error) {
    console.log(error);
  }
};


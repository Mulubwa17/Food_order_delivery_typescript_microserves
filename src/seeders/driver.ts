import {Driver} from "../models/driver";
import faker  from '@faker-js/faker';

export const driverSeedData = async () => {
  try {
    const Drivers = [];
    for (let i = 0; i < 10; i++) {
      
      const newDriver = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: '12345678',
        driverUniqueId: faker.datatype.uuid(),
        address: faker.address.streetAddress(),
        contact: faker.phone.phoneNumber(),
        isActive: true,
        available: true
      };
      Drivers.push(newDriver);
    }
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await Driver.insertMany(Drivers);
    console.log('Drivers added successfully 🚀');
  } catch (error) {
    console.log(error);
  }
};


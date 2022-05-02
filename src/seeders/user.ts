import faker  from '@faker-js/faker';
import { User } from "../models/user";

export const userSeedData = async () => {
  try {
    const Users = [];
    for (let i = 0; i < 10; i++) {
      
      const newUser = {
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        contact: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        password: '12345678',
        isActive: true
      };
      Users.push(newUser);
    }
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await User.insertMany(Users);
    console.log('Users added successfully 🚀');
  } catch (error) {
    console.log(error);
  }
};


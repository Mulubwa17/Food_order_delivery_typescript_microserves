import faker  from '@faker-js/faker';
import { Vendor } from '../models/vendor';

export const vendorSeedData = async () => {
  try {
    const Vendors = [];
    for (let i = 0; i < 10; i++) {
      
      const newVendor = {
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        name: faker.company.companyName(),
        proprietor: faker.name.findName(),
        contact: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        password: '12345678',
        isActive: true
      };
      Vendors.push(newVendor);
    }
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await Vendor.insertMany(Vendors);
    console.log('Vendors added successfully 🚀');
  } catch (error) {
    console.log(error);
  }
};


import faker  from '@faker-js/faker';
import { Inventory } from '../models/inventory';
import {Vendor}  from '../models/vendor';

async function returnsQueryBuilder() {
    return await Vendor.find();
  }
  

  
export const inventorySeedData = async () => {
  try {
    const Inventorys = [];
    var queryArray = await returnsQueryBuilder();
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
      
      const newInventory = {
        vendorId: queryArray[j]["id"],
        description: faker.lorem.sentence(),
        category: faker.lorem.word(),
        items : [
          {
            name: faker.lorem.word(),
            quantity: faker.datatype.number(),
          },
        ],
      }
      Inventorys.push(newInventory)
        }
}
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await Inventory.insertMany(Inventorys);
    console.log('Inventorys added successfully 🚀');
  } catch (error) {
    console.log(error);
  }
};


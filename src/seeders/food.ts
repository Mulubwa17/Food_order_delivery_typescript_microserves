import faker  from '@faker-js/faker';
import { Food } from '../models/food';
import {Vendor}  from '../models/vendor';

async function returnsQueryBuilder() {
    return await Vendor.find();
  }
  

  
export const foodSeedData = async () => {
  try {
    const Foods = [];
    var queryArray = await returnsQueryBuilder();
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
      
      const newFood = {
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        category: faker.lorem.word(),
        rating: faker.datatype.number(),
        price: faker.commerce.price(),
        vendorId: queryArray[j]["id"],
      }
      Foods.push(newFood)
        }
}
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await Food.insertMany(Foods);
    console.log('Foods added successfully 🚀');
  } catch (error) {
    console.log(error);
  }
};


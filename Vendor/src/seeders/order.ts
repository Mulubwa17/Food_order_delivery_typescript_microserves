import faker from "@faker-js/faker";
import { User } from "../models/user";
import { Food } from "../models/food";
import { Order } from "../models/order";


async function returnsQueryBuilder() {
  return await User.find()
}
async function returnsQueryBuilderfood() {
  return await Food.find()
}


export const OrderSeedData = async () => {
  try {
    const Orders = [];
    var queryArray = await returnsQueryBuilder();
    var queryArrayfood = await returnsQueryBuilderfood();
    for (let i = 0; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        const newOrder = {
          foodId: queryArrayfood[j]["id"],
          customerId: queryArray[j]["id"],
          orderTime: faker.date.recent(),
          deliveryTime: faker.date.soon(),
          paid: true,
          destinationAddress: faker.address.streetAddress(),
          orderReady: true,
        };
        Orders.push(newOrder);
      }
    }
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await Order.insertMany(Orders);
    console.log("Orders added successfully 🚀");
  } catch (error) {
    console.log(error);
  }
};

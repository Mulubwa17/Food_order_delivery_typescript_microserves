import faker from "@faker-js/faker";
import { Order } from "../models/order";





export const orderSeedData = async () => {
  try {
    const Orders = [];
    for (let i = 0; i < 10; i++) {
       {
        const newOrder = {
          foodId: "626fbd430521a16a31127445",
          customerId: "626fe0d9a2bcc82f906e797a",
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

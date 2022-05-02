import faker from '@faker-js/faker';
import { Driver } from '../models/driver';
import { Delivery } from '../models/delivery';
import { Order } from '../models/order';
import { Vendor } from '../models/vendor';

async function returnsQueryBuilder() {
  return await Vendor.find();
}

async function returnsQueryBuilderOrder() {
  return await Order.find();
}

async function returnsQueryBuilderDriver() {
  return await Driver.find();
}



export const deliverySeedData = async () => {
  try {
    const Deliverys = [];
    var queryArray = await returnsQueryBuilder();
    var queryArrayDriver = await returnsQueryBuilderDriver();
    var queryArrayOrder = await returnsQueryBuilderOrder();
    for (let i = 0; i < 10; i++) {
      for (let j = 1; j < 10; j++) {

        const newDelivery = {
          orderId: queryArrayOrder[j]["id"],
          driverId: queryArrayDriver[j]["id"],
          delivered: true,
          delayed: true,
          vendorId: queryArray[j]["id"],
        }
        Deliverys.push(newDelivery)
      }
    }
    // InsertMany validating an array of documents  📰
    // and inserting them into MongoDB if they're all valid.
    // This function is faster than .create()

    await Delivery.insertMany(Deliverys);
    console.log('Deliverys added successfully 🚀');
  } catch (error) {
    console.log(error);
  }
};


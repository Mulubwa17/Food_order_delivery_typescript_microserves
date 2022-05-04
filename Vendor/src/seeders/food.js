"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodSeedData = void 0;
const faker_1 = __importDefault(require("@faker-js/faker"));
const food_1 = require("../models/food");
const vendor_1 = require("../models/vendor");
async function returnsQueryBuilder() {
    return await vendor_1.Vendor.find();
}
const foodSeedData = async () => {
    try {
        const Foods = [];
        var queryArray = await returnsQueryBuilder();
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j < 10; j++) {
                const newFood = {
                    name: faker_1.default.commerce.productName(),
                    description: faker_1.default.lorem.sentence(),
                    category: faker_1.default.lorem.word(),
                    rating: faker_1.default.datatype.number(),
                    price: faker_1.default.commerce.price(),
                    vendorId: queryArray[j]["id"],
                };
                Foods.push(newFood);
            }
        }
        // InsertMany validating an array of documents  📰
        // and inserting them into MongoDB if they're all valid.
        // This function is faster than .create()
        await food_1.Food.insertMany(Foods);
        console.log('Foods added successfully 🚀');
    }
    catch (error) {
        console.log(error);
    }
};
exports.foodSeedData = foodSeedData;

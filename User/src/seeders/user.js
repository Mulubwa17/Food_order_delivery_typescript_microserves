"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSeedData = void 0;
const faker_1 = __importDefault(require("@faker-js/faker"));
const user_1 = require("../models/user");
const userSeedData = async () => {
    try {
        const Users = [];
        for (let i = 0; i < 10; i++) {
            const newUser = {
                id: faker_1.default.datatype.uuid(),
                email: faker_1.default.internet.email(),
                firstName: faker_1.default.name.firstName(),
                lastName: faker_1.default.name.lastName(),
                contact: faker_1.default.phone.phoneNumber(),
                address: faker_1.default.address.streetAddress(),
                password: '12345678',
                isActive: true
            };
            Users.push(newUser);
        }
        // InsertMany validating an array of documents  📰
        // and inserting them into MongoDB if they're all valid.
        // This function is faster than .create()
        await user_1.User.insertMany(Users);
        console.log('Users added successfully 🚀');
    }
    catch (error) {
        console.log(error);
    }
};
exports.userSeedData = userSeedData;

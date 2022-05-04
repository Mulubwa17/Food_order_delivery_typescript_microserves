"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorSeedData = void 0;
const faker_1 = __importDefault(require("@faker-js/faker"));
const vendor_1 = require("../models/vendor");
const vendorSeedData = async () => {
    try {
        const Vendors = [];
        for (let i = 0; i < 10; i++) {
            const newVendor = {
                id: faker_1.default.datatype.uuid(),
                email: faker_1.default.internet.email(),
                name: faker_1.default.company.companyName(),
                proprietor: faker_1.default.name.findName(),
                contact: faker_1.default.phone.phoneNumber(),
                address: faker_1.default.address.streetAddress(),
                password: '12345678',
                isActive: true
            };
            Vendors.push(newVendor);
        }
        // InsertMany validating an array of documents  📰
        // and inserting them into MongoDB if they're all valid.
        // This function is faster than .create()
        await vendor_1.Vendor.insertMany(Vendors);
        console.log('Vendors added successfully 🚀');
    }
    catch (error) {
        console.log(error);
    }
};
exports.vendorSeedData = vendorSeedData;

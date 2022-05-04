"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// user.model.ts
const mongoose_1 = require("mongoose");
// Create the schema
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
// Create and export user model
exports.User = (0, mongoose_1.model)("User", UserSchema);

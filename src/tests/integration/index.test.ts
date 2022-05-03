import request from "supertest";
import app from "../../adminApp";
import app1 from "../../vendorApp";
import app2 from "../../userApp";
import faker from "@faker-js/faker";
import express, { response } from "express";


let userId = "";

describe("User App", () => {
    context('Integration Tests', () => {
        it('should create a customer user', (done) => {
            request(app2)
            .post('/api/v1/User/new_user')
            .send({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: '12345678',
                contact: faker.phone.phoneNumber(),
                address: faker.address.streetAddress()
            }).expect(200,done);
            //@ts-ignore
            console.log(response.json);

        });

        it('should list all customer user', (done) => {
            request(app2)
            .get('/api/v1/User/view_users')
            .expect(200,done);
        });

        it('should get a customer user', (done) => {
            request(app2)
            .get('/api/v1/User/view_user/'+userId)
            .expect(200,done);
        });
    });
});

let vendorId = "";
let foodId = "";

describe("Vendor App", () => {
    context('Integration Tests', () => {
        it('should create a vendor', (done) => {
            request(app1)
            .post('/api/v1/Vendor/new_vendor')
            .send({
                email: faker.internet.email(),
                name: faker.company.companyName(),
                proprietor: faker.name.findName(),
                contact: faker.phone.phoneNumber(),
                address: faker.address.streetAddress(),
                password: '12345678'
            }).expect(200,done);
            vendorId = faker.datatype.uuid();
        });

        it('should list all vendor', (done) => {
            request(app1)
            .get('/api/v1/Vendor/view_vendors')
            .expect(200,done);
        });

        it('should get a vendor', (done) => {
            request(app1)
            .get('/api/v1/Vendor/view_vendor/'+vendorId)
            .expect(200,done);
        });
    });

    it('should create a food', (done) => {
        request(app1)
        .post('/api/v1/Food/new_food')
        .send({
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            category: faker.lorem.word(),
            rating: faker.datatype.number(),
            price: faker.commerce.price(),
            vendorId: vendorId
        }).expect(200,done);
    });

    it('should list all food', (done) => {
        request(app1)
        .get('/api/v1/Food/view_foods')
        .expect(200,done);
    });

    it('should get a food', (done) => {
        request(app1)
        .get('/api/v1/Food/view_food/'+foodId)
        .expect(200,done);
    });

    it('should update a food', (done) => {
        request(app1)
        .put('/api/v1/Food/edit_food/'+foodId)
        .send({
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            category: faker.lorem.word(),
            rating: faker.datatype.number(),
            price: faker.commerce.price(),
        }).expect(200,done);
    });

});


let adminId = '';
let orderId = '';
let driverId = '';
let deliveryId = '';

describe('Admin App Tests',() => {
    context('Integration Tests', () => {
        it('should create an admin', (done) => {
            request(app)
                .post('/api/v1/Admin/new_admin')
                .send({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    contact: faker.phone.phoneNumber(),
                }).expect(200,done);
                
    });

    it('should list all admins', (done) => {
        request(app)
            .get('/api/v1/Admin/view_admins')
            .expect(200,done);
    });

    it('should get an admin', (done) => {
        request(app)
            .get('/api/v1/Admin/view_admin/'+adminId)
            .expect(200,done);
    });

    it('should update an admin', (done) => {
        request(app)
            .put('/api/v1/Admin/edit_admin/'+adminId)
            .send({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                contact: faker.phone.phoneNumber(),
            }).expect(200,done);
    });

    it('should create a driver', (done) => {
        request(app)
            .post('/api/v1/Driver/new_driver')
            .send({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: '12345678',
                driverUniqueId: faker.datatype.uuid(),
                address: faker.address.streetAddress(),
                contact: faker.phone.phoneNumber(),
            }).expect(200,done);
    });

    it('should list all drivers', (done) => {
        request(app)
            .get('/api/v1/Driver/view_drivers')
            .expect(200,done);
    });

    it('should get a driver', (done) => {
        request(app)
            .get('/api/v1/Driver/view_driver/'+driverId)
            .expect(200,done);
    });

    it('should update a driver', (done) => {
        request(app)
            .put('/api/v1/Driver/edit_driver/'+driverId)
            .send({
                email: faker.internet.email(),
                password: '12345678',
                address: faker.address.streetAddress(),
                contact: faker.phone.phoneNumber(),
            }).expect(200,done);
    });

    it('should create an order', (done) => {
        request(app)
            .post('/api/v1/Order/new_order')
            .send({
              foodId: foodId,
              customerId: userId,
              orderTime: faker.date.recent(),
              deliveryTime: faker.date.soon(),
              paid: true,
              destinationAddress: faker.address.streetAddress(),
              orderReady: true,
            }).expect(200,done);
    });

    it('should list all orders', (done) => {
        request(app)
            .get('/api/v1/Order/view_orders')
            .expect(200,done);
    });

    it('should get an order', (done) => {
        request(app)
            .get('/api/v1/Order/view_order/'+orderId)
            .expect(200,done);
    });

    it('should update an order', (done) => {
        request(app)
            .put('/api/v1/Order/edit_order/'+orderId)
            .send({
                destinationAddress: faker.address.streetAddress(),
                orderReady: true,
            }).expect(200,done);
    });

    it('should create a delivery', (done) => {
        request(app)
            .post('/api/v1/Delivery/new_delivery')
            .send({
                orderId: orderId,
                driverId: driverId,
                deliveryTime: faker.date.recent(),
                delivered: true,
            }).expect(200,done);
    });

    it('should list all deliveries', (done) => {
        request(app)
            .get('/api/v1/Delivery/view_deliveries')
            .expect(200,done);
    });

    it('should get a delivery', (done) => {
        request(app)
            .get('/api/v1/Delivery/view_delivery/'+deliveryId)
            .expect(200,done);
    });

    it('should update a delivery', (done) => {
        request(app)
            .put('/api/v1/Delivery/edit_delivery/'+deliveryId)
            .send({
                delivered: true,
            }).expect(200,done);
    });


});
});

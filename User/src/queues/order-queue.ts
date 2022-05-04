const Queue = require('bull');
const {ordersProcess} = require('./orders-queue-consumer');

const ordersQueue = new Queue('orders', 'redis://localhost:6379');

ordersQueue.process(ordersProcess);

export const createNewOrder = (order: any) => {
    return ordersQueue.add(order,{
        priority: jobPriority(order),
        attempts: 2,
    });
    };

const jobPriority = (order: any) => {
    if (!order.price)return 3
    return (order.price > 100) ? 1 : 2;

}
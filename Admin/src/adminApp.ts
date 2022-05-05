import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { adminDb } from "./config/db";
import { adminRoute } from "./routes/admin";
import { adminSeedData } from "./seeders/admin";
import { orderRoute } from "./routes/order";
import { orderSeedData } from "./seeders/order";
import { deliverySeedData } from "./seeders/delivery";
import { deliveryRoute } from "./routes/delivery";
import { driverSeedData } from "./seeders/driver";
import { driverRoute } from "./routes/driver";
dotenv.config();


const PORT = 3000;
const app: Application = express();

adminDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

adminSeedData();
driverSeedData();
orderSeedData();
deliverySeedData();

app.use("/api/v1/Admin", adminRoute);
app.use("/api/v1/Driver", driverRoute);
app.use("/api/v1/Order", orderRoute);
app.use('/api/v1/Delivery', deliveryRoute)

app.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "Welcome to the admin app",
  });
});

app.listen(PORT, () => {
  console.log(`Admin App started on port ${PORT}`);
});

export default app;
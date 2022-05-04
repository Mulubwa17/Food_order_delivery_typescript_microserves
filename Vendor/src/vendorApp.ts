import dotenv from 'dotenv';
import express, {Application} from 'express';
import cors from "cors";
import helmet from "helmet";
import { vendorDb } from './config/db';
import { venderRoute } from './routes/vendor';
import { vendorSeedData } from './seeders/vendor';
import { inventorySeedData } from './seeders/inventory';
import { foodSeedData } from './seeders/food';
import { inventoryRoute } from './routes/inventory';
import { foodRoute } from './routes/food';
dotenv.config();


const PORT = 5000;
const app: Application = express();

vendorDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

vendorSeedData();
inventorySeedData();
foodSeedData();

app.use('/api/v1/Vendor', venderRoute)
app.use('/api/v1/Inventory', inventoryRoute);
app.use('/api/v1/Food', foodRoute)

app.get("/", (req, res) => {
    res.status(200).send({
      status: "success",
      message: "Welcome to the vendor app",
    });
  });

app.listen(PORT, () => {
    console.log(`Vendor App started on port ${PORT}`);
}
);

export default app;
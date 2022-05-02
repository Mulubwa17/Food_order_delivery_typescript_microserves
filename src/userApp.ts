import dotenv from 'dotenv';
import express, { Application} from 'express';
import cors from "cors";
import helmet from "helmet";
import { customerDB } from './config/db';
import { userRoute } from './routes/user';
import { userSeedData } from './seeders/user';
dotenv.config();


const PORT = 4000;
const app: Application = express();

customerDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

userSeedData();

app.use('/api/v1/User',userRoute)

app.listen(PORT, () => {
    console.log(`User App started on port ${PORT}`);
}
);
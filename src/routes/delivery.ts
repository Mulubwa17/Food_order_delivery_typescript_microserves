import express, { Request, Response, NextFunction } from "express";
import {
  createDelivery,
  deleteDelivery,
  getDelivery,
  getDeliverys,
  updateDelivery,
} from "../controllers/deliveryController";

const router = express.Router();

router.post("/new_delivery", createDelivery);

router.get("/get_deliverys", getDeliverys);

router.get("/get_delivery/:id", getDelivery);

router.put("/update_delivery/:id", updateDelivery);

router.delete("/delete_delivery/:id", deleteDelivery);

export { router as deliveryRoute };

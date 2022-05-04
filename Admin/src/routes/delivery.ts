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

router.get("/view_deliverys", getDeliverys);

router.get("/view_delivery/:id", getDelivery);

router.put("/edit_delivery/:id", updateDelivery);

router.delete("/remove_delivery/:id", deleteDelivery);

export { router as deliveryRoute };

import express from "express";
import { slotControllers } from "./slot.controller";

const router = express.Router()

router.get('/availability', slotControllers.getAvailableSlots )

export const slotRoutes = router
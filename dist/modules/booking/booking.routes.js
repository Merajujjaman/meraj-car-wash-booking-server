"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const getCustomerId_1 = __importDefault(require("../../middleware/getCustomerId"));
const booking_controller_1 = require("./booking.controller");
const authAllowedFor_1 = __importDefault(require("../../middleware/authAllowedFor"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const booking_validation_1 = require("./booking.validation");
const router = express_1.default.Router();
router.post('/', (0, authAllowedFor_1.default)('user'), getCustomerId_1.default, (0, validationRequest_1.default)(booking_validation_1.bookingValidations.createBookingValidationSchema), booking_controller_1.bookingControllers.booking);
exports.bookingRoutes = router;

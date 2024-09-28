"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const authAllowedFor_1 = __importDefault(require("../../middleware/authAllowedFor"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const service_validation_1 = require("./service.validation");
const slot_validation_1 = require("../slot/slot.validation");
const slot_controller_1 = require("../slot/slot.controller");
const router = express_1.default.Router();
router.post('/', (0, authAllowedFor_1.default)('admin'), (0, validationRequest_1.default)(service_validation_1.serviceValidations.createServiceValidationSchema), service_controller_1.serviceControllers.createService);
router.get('/', service_controller_1.serviceControllers.getAllServices);
router.get('/:id', service_controller_1.serviceControllers.getSingleService);
router.put('/:id', (0, authAllowedFor_1.default)('admin'), (0, validationRequest_1.default)(service_validation_1.serviceValidations.updateServiceValidationSchema), service_controller_1.serviceControllers.updateService);
router.delete('/:id', (0, authAllowedFor_1.default)('admin'), service_controller_1.serviceControllers.deleteService);
// for creating slots according service
router.post('/slots', (0, authAllowedFor_1.default)('admin'), (0, validationRequest_1.default)(slot_validation_1.slotValidations.createSlotValidationSchema), slot_controller_1.slotControllers.createSlot);
exports.serviceRoutes = router;

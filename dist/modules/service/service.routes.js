"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const authAllowedFor_1 = __importDefault(require("../../middleware/authAllowedFor"));
const router = express_1.default.Router();
router.post('/', (0, authAllowedFor_1.default)('user'), service_controller_1.serviceControllers.createService);
exports.serviceRoutes = router;

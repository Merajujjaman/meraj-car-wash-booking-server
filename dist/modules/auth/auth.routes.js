"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const user_validation_1 = require("../user/user.validation");
const auth_controller_1 = require("./auth.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/signup', (0, validationRequest_1.default)(user_validation_1.userValidations.createUserValidationSchema), auth_controller_1.authControllers.signup);
router.post('/login', auth_controller_1.authControllers.login);
exports.authRoutes = router;

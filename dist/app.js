"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = require("./modules/auth/auth.routes");
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const service_routes_1 = require("./modules/service/service.routes");
const slot_routes_1 = require("./modules/slot/slot.routes");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('This is Car Washing Web Server');
});
// routers
app.use('/api/auth', auth_routes_1.authRoutes);
app.use('/api/services', service_routes_1.serviceRoutes);
app.use('/api/slots', slot_routes_1.slotRoutes);
//global error handler
app.use(globalErrorHandler_1.default);
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
exports.default = app;

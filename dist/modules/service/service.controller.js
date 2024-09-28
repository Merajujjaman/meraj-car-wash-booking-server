"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceControllers = void 0;
const service_service_1 = require("./service.service");
const createService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceServices.createServicesDB(req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllServices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceServices.getAllServicesDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Services retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield service_service_1.serviceServices.getSingleServiceDB(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = yield service_service_1.serviceServices.updateServiceDB(id, updateData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield service_service_1.serviceServices.deleteServiceDB(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service deleted successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.serviceControllers = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService,
};

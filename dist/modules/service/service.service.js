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
exports.serviceServices = void 0;
const mongoose_1 = require("mongoose");
const service_model_1 = require("./service.model");
const createServicesDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.create(payload);
    return result;
});
const getAllServicesDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.find({ isDeleted: false });
    return result;
});
const getSingleServiceDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new Error(`${id} this _id is not valid ObjectId`);
    }
    const result = yield service_model_1.Service.findOne({ _id: id, isDeleted: false });
    if (!result) {
        throw new Error(`There is no data or deleted usign this id: ${id}`);
    }
    return result;
});
const updateServiceDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new Error(`${id} this _id is not valid ObjectId`);
    }
    const result = yield service_model_1.Service.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteServiceDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, mongoose_1.isValidObjectId)(id)) {
        throw new Error(`${id} this _id is not valid ObjectId`);
    }
    const result = yield service_model_1.Service.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
exports.serviceServices = {
    createServicesDB,
    getAllServicesDB,
    getSingleServiceDB,
    updateServiceDB,
    deleteServiceDB
};

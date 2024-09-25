import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServicesDB = async(payload: TService) => {
    const result = await Service.create(payload)
    return result
}
const getAllServiceDB = async() => {
    const result = await Service.find()
    return result
}

export const serviceServices = {
    createServicesDB,
    getAllServiceDB
}
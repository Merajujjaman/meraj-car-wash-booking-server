import { isValidObjectId } from "mongoose";
import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServicesDB = async(payload: TService) => {
    const result = await Service.create(payload)
    return result
}
const getAllServicesDB = async() => {
    const result = await Service.find({isDeleted: false})
    return result
}
const getSingleServiceDB = async(id:string) => {
    if(!isValidObjectId(id)){
        throw new Error (`${id} this _id is not valid ObjectId`)
    }
    const result = await Service.findOne({_id:id, isDeleted:false})
    if (!result){
        throw new Error (`There is no data or deleted usign this id: ${id}`)
    }
    return result
}
const updateServiceDB = async(id:string, payload: Partial<TService>) => {
    if(!isValidObjectId(id)){
        throw new Error (`${id} this _id is not valid ObjectId`)
    }
    const result = await Service.findByIdAndUpdate(id, payload, {new: true})
    return result
}
const deleteServiceDB = async(id:string) => {
    if(!isValidObjectId(id)){
        throw new Error (`${id} this _id is not valid ObjectId`)
    }
    const result = await Service.findByIdAndUpdate(id, {isDeleted: true}, {new: true})
    return result
}

export const serviceServices = {
    createServicesDB,
    getAllServicesDB,
    getSingleServiceDB,
    updateServiceDB,
    deleteServiceDB
}
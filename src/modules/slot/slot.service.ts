/* eslint-disable @typescript-eslint/no-explicit-any */
import  { isValidObjectId} from "mongoose";
import { TSlot } from "./slot.interface"
import { Service } from "../service/service.model";
import { getEndTime } from "./slot.utils";
import { Slot } from "./slot.model";

const createSlotDB = async (payload: TSlot) => {
    const {service,date,startTime,endTime} = payload;
    
    if(!isValidObjectId(service)){
        throw new Error ("Invalid service ID")
    }

    const serviceData = await Service.findById(service);
    if(!serviceData){
        throw new Error ('Service not found')
    }
    const serviceDuration = serviceData?.duration;
    const [startHours, startMinutes] = startTime.split(':').map(Number)
    const [endHours, endMinutes] = endTime.split(':').map(Number)
    
    const slotStartTimeInMinutes = startHours * 60 + startMinutes;
    const slotEndTimeInMinutes = endHours * 60 + endMinutes

    const totalDuration = slotEndTimeInMinutes - slotStartTimeInMinutes;
    const numberOfSlot = totalDuration / serviceDuration;
    if(totalDuration % totalDuration !==0){
        throw new Error ("The time range must be divisible by service duration")
    }
    
    const slots = []
    let currentStartTime =  startTime;

    for(let i = 0; i < numberOfSlot; i++){
        const currentEndTiem = getEndTime(currentStartTime, Number(serviceDuration))

        slots.push({
            service,
            date,
            startTime: currentStartTime,
            endTime: currentEndTiem,
        })

        currentStartTime = currentEndTiem
    }

    const result = await Slot.insertMany(slots)
    return result
}

const getAvailableSlotsDB = async (date?: string, serviceId?: string) => {

    const query: any = { isBooked: 'available' };

    if (date) {
        query.date = date;
    }
    if (serviceId) {
        query.service = serviceId;
    }

    const result = await Slot.find(query).populate('service');
     return result;
}


export const slotServices ={
    createSlotDB,
    getAvailableSlotsDB
}
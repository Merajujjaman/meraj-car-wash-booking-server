import { RequestHandler } from "express";
import { serviceServices } from "./service.service";

const createService: RequestHandler = async (req, res, next) => {
    try {
        const result = await serviceServices.createServicesDB(req.body)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service created successfully",
            data: result,
          });
    } catch (error) {
        next(error)
    }
}

export const serviceControllers = {
    createService
}
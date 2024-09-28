import { RequestHandler } from "express";
import { serviceServices } from "./service.service";

const createService: RequestHandler = async (req, res, next) => {
  try {
    const result = await serviceServices.createServicesDB(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllServices: RequestHandler = async (req, res, next) => {
  try {
    const result = await serviceServices.getAllServicesDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Services retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleService: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await serviceServices.getSingleServiceDB(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateService: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const result = await serviceServices.updateServiceDB(id, updateData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteService: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await serviceServices.deleteServiceDB(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Service deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const serviceControllers = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};

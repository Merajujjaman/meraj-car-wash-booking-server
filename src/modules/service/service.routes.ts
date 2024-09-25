import express from 'express';
import { serviceControllers } from './service.controller';
import authAllowedFor from '../../middleware/authAllowedFor';


const router = express.Router()

router.post('/', authAllowedFor('user'), serviceControllers.createService)
export const serviceRoutes = router;
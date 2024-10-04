import express, { Application } from 'express';
import cors from 'cors';
import { authRoutes } from './modules/auth/auth.routes';
import globalErrorHandler from './middleware/globalErrorHandler';
import { serviceRoutes } from './modules/service/service.routes';
import { slotRoutes } from './modules/slot/slot.routes';
import { bookingRoutes } from './modules/booking/booking.routes';
import authAllowedFor from './middleware/authAllowedFor';
import getCustomerId from './middleware/getCustomerId';
import { bookingControllers } from './modules/booking/booking.controller';
import notFound from './middleware/notFoundRoute';
const app : Application = express()

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is Car Washing Web Server')
})

// routers
app.use('/api/auth', authRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/slots', slotRoutes)
app.use('/api/bookings', bookingRoutes)

//for user my-booking rout 
app.use('/api/my-booking', authAllowedFor('user'), getCustomerId, bookingControllers.getMyBooking)


//global error handler
app.use(globalErrorHandler)

// not found rout:
app.use(notFound)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 

export default app
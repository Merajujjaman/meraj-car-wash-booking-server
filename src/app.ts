import express, { Application } from 'express';
import cors from 'cors';
import { authRoutes } from './modules/auth/auth.routes';
import globalErrorHandler from './middleware/globalErrorHandler';
import { serviceRoutes } from './modules/service/service.routes';
import { slotRoutes } from './modules/slot/slot.routes';
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


//global error handler
app.use(globalErrorHandler)


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 

export default app
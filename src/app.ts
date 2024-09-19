import express, { Application } from 'express';
import cors from 'cors';
import { authRoutes } from './modules/auth/auth.routes';
const app : Application = express()

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is Car Washing Web Server')
})

app.use('/api/auth', authRoutes)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 

export default app
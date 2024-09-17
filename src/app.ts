import express from 'express';
const app = express()

app.get('/', (req, res) => {
  res.send('This is Car Washing Web Server')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 

export default app
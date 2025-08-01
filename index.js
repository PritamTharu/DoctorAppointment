const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT
const {connectDB} = require('./db_connection')

const doctorRoute = require('./routes/doctorRoutes')
const appointmentRoute = require('./routes/appointmentRoutes')


const corsOptions = {
    origin: `*`,  
    methods: ['GET', 'POST', 'DELETE','PUT'],  
    allowedHeaders: ['Content-Type'],
    credentials: true
};
app.use(cors(corsOptions));



app.use('/api/v1/doctor', doctorRoute)
app.use('/api/v1/appointment', appointmentRoute)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App listening in Port ${PORT}`);

    })
}).catch((error) => {
    if (error) {
        throw error
    }
})















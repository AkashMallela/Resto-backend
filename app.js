import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import dbConnection from './DB/db.js';
import reservationModel from './models/ReservationModel.js';
// import errorMiddleware from './error/error.js';
// import router from './Routes/Reservationrouter.js';
import { sendReservation } from './controller/reserve.js';

const app = express();
dotenv.config({path : "./config/config.env"})

app.use(cors({
    origin: 'http://localhost:3000',
    methods : ["post"],
    credentials: true
}))


app.use(express.json());
app.use(express.urlencoded({urlencoded: true}));
dbConnection();

// app.use(errorMiddleware);


app.post("/reservation", sendReservation);
// app.use('/api/reservation',router);
// In your Express server
app.get('/api/reservation/latest', async (req, res) => {
    try {
        const latestReservation = await reservationModel.findOne().sort({ _id: -1 }).limit(1);
        res.json(latestReservation);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reservation details' });
    }
});


const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

export default app;
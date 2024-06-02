import { reservationModel } from '../models/ReservationModel.js';

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // Check for missing fields
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return res.status(400).json({
            success: false,
            message: 'Please fill all the fields'
        });
    }

    try {
        // Create a new reservation
        await reservationModel.create({ firstName, lastName, email, phone, date, time });

        // Send success response
        res.status(200).json({
            success: true,
            message: 'Reservation sent successfully'
        });
    } catch (error) {
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: validationErrors.join(', ')
            });
        }

        // Handle other errors
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};



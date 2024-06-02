
import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "first name should contain atleast 3 characters"],
        maxLength: [30, "first name cannot exceed 30 characters"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "last name should contain atleast 3 characters"],
        maxLength: [30, "last name cannot exceed 30 characters"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email id"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "phone number should contain atleast 10 characters"],
        maxLength:[10, "Phone number cannot be more than 10 digits"]
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required:true
    }
});

export const reservationModel = mongoose.model("reservation", reservationSchema);
export default reservationModel
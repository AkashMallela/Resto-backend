// // error.js
// class ErrorHandler extends Error {
//     constructor(message, status) {
//         super(message);
//         this.status = status;
//     }
// }

// export default ErrorHandler;


// // errorMiddleware.js
// export const errorMiddleware = (err, req, res, next) => {
//     console.log("Handling error: ", err)
//     err.message = err.message || "Internal Server Error";
//     err.status = err.status || 500;

//     return res.status(err.status).json({
//         success: false,
//         message: err.message,
//     });
// };

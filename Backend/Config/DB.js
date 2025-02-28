import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB ha sido conectado ${conn.connection.host}`)
    } catch (error) {
        console.log("there was an error in the database")
        process.exit(1);
    }
}



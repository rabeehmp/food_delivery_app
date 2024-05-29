import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://food-delivery:123454321@cluster0.qxllinp.mongodb.net/food-delevery").then(()=>console.log('DB Connected'));
}
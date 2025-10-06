import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import cors from "cors";

dotenv.config();
connectDB();


const app= express();
app.use(cors());


app.use(express.json()); // <-- This parses JSON body
app.use(morgan('dev'));

app.use("/api/v1/auth",authRoutes)




app.get('/',(req,res)=>{
    res.send("Welcome to my aap"
    )
});

const PORT = 8800;


app.listen(PORT,()=>{console.log
(`Server Running on ${PORT}`);})
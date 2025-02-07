import express from "express"
import cors from "cors";
import cookieParser from 'cookie-parser'

const app = express();

// app.use(cors()) kar sakte ho but production me nahi
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}));

// app.use(express.json()) kar sakte ho but production me nahi
app.use(express.json({
    limit:"16kb"
}));

// app.use(express.urlencoded()) kar sakte ho but advance cheje bhi hai
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}));

app.use(express.static("public")); // public files ko serve krne ke liye


export {app};
// export default app;
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json()); // convert from frontend to backend; (bodyParser.urlencoded({extended: true}))
app.use(express.cors()); // When you use the cors module in Javascript and provide it the origin argument as http://localhost:8000 it means that the domain localhost can acess your backend resources and get data from it while other domains can't
const port = 3000;

mongoose.connect("");

app.listen(port, () => {
    console.log(`Server is running at port ${port} smoothly.`)
});
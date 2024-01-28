import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import EmployeeModel from "./models/Employee.js"

const app = express();
app.use(bodyParser.json()); // convert from frontend to backend; (bodyParser.urlencoded({extended: true}))
app.use(cors()); // When you use the cors module in Javascript and provide it the origin argument as http://localhost:8000 it means that the domain localhost can acess your backend resources and get data from it while other domains can't
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/employeeDB");

app.post("/register", (req, res)=>{
    EmployeeModel.create(req.body)    // other method for saving data.
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});

app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success");
            } else {
                res.json("Incorrect Password.");
            }
        } else {
            res.json("Record Does Not Exist.");
        };
    })
    .catch(err => {
        res.json(err);
    });
});

app.listen(port, () => {
    console.log(`Server is running at port ${port} smoothly.`)
});
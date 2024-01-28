import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const EmloyeeModel = mongoose.model("employees", EmployeeSchema);

export default EmloyeeModel;
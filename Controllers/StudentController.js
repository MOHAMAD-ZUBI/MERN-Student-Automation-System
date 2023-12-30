const mongoose = require('mongoose')
const User = require("../Models/userMode");
const jwt = require("jsonwebtoken");


const createStudent = async(req,res) => {

    try {
        const user = jwt.verify(Headers.authorization.split(''))
        
    } catch (error) {
        
    }
}
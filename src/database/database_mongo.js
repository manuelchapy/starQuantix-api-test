//require('dotenv').config();
const {connect} = require('mongoose');
//import connect from "mongoose";

//funcion anonima
(async () => {
    try {
        const db = await connect("mongodb+srv://chapy:24781279@starQuantixTest.12ub73d.mongodb.net/?retryWrites=true&w=majority&appName=starQuantixTest")
        console.log('DB connected', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()
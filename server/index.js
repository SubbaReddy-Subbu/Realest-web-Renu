const express = require('express');
const app = express();

const dotenv = require('dotenv');
const UserRoutes = require('./Routes/User.routes');
const PropertyRoutes = require('./Routes/property.routes');

const mongoose = require('mongoose');

dotenv.config();

app.use(express.json());
app.use('/users',UserRoutes)
app.use('/property',PropertyRoutes)


// app.get('/',(req,res)=>{
//     res.json({message : "Server and DB connected successfully"})
// })




const ConnectServer = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("DB connected successfully");
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
        });
        app.listen(8080,()=>{
            console.log('server connected successfully'+ " " +8080)
        })
    } catch (error) {
        console.log(error)
    }

}
ConnectServer();

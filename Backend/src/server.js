import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({path: './.env'})
import DB_Connect from "./db/db.js";


DB_Connect().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server started on port ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log("server connection error: " + err);
})
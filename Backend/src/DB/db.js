import mongoose from "mongoose";

const DB_Connect = async () =>{
    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        console.log("database connection established");
    } catch (error) {
        console.log("error connecting database" + error.message);
        process.exit(1);
    }
}
export default DB_Connect;
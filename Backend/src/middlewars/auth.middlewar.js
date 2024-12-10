import { User } from "../models/user.model.js";
import { Captain } from "../models/captain.model.js";
import jwt from "jsonwebtoken";

const verifyUser = async (req, res, next) => {
  try {

    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decodedInfo = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findById(decodedInfo?._id);

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user;
    return next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unautherized access token" });
  }
};

const verifyCaptain = async(req, res, next) => {
    try {

     const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if(!token){
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    const captain = await Captain.findById(decodedToken?._id);    

    if(!captain){
      return res.status(401).json({ message: "Invalid token"})
    }

    req.captain = captain;

    return next();

    } catch (error) {
      
      console.log(error);
      return res.status(401).json({ message: "Unautherized access token"})

    }
}

export { verifyUser, verifyCaptain };
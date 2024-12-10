import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const captainSchema = new Schema({
    fullname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3, 'color must be at least 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minLength:[3, 'plate must be at least 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            minLength:[1, "capacity must be at least 1"]
        }

    },
    vehicleType:{
        type:String,
        required:true,
        enum:['car','motorcycle','auto']
    },
    location:{
        lat:{
            type:Number
        },
        log:{
            type:Number
        }
    }
});


captainSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  captainSchema.methods.comparePassword = async function (userPass) {
    return await bcrypt.compare(userPass, this.password);
  };
  
  captainSchema.methods.generateAuthToken = async function () {
    const token = await jwt.sign(
      { id: this._id, username: this.username, email: this.email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRY || "24h" }
    );
    return token;
  };

const Captain = mongoose.model("Captain", captainSchema);

export {Captain}
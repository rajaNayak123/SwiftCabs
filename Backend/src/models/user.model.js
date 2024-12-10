import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    socketId: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (userPass) {
  return await bcrypt.compare(userPass, this.password);
};

userSchema.methods.generateAuthToken = async function () {
  const token = await jwt.sign(
    { id: this._id, username: this.username, email: this.email },
    process.env.TOKEN_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRY || "24h" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);

export { User };

import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  try {
    if (
      [fullname, username, email, password].some((field) => {
        field?.trim() === "";
      })
    ) {
      return res.status(400).json({ error: "All fields must be required" });
    }

    const existUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    console.log(existUser);
    if (existUser) {
      return res.status(400).json({ error: "User or email already exists" });
    }

    const newUser = await User({
      fullname,
      username,
      email,
      password,
    });

    await newUser.save();

    const token = await newUser.generateAuthToken();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        fullname: newUser.fullname,
        // password: newUser.password,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ mesage: "Email is required" });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Password is incorrect" });
  }

  const token = await user.generateAuthToken();

  const options = {
    httpOnly: true,
    secure: true,
  };

  res.status(200).cookie("token", token, options).json({ user, token });
};

const logoutUser = async (req, res) => {
    await User.findByIdAndUpdate(
    req.user._id,
      {
        $set: { token: undefined },
      },
      {
        new: true,
      }
  );
  
  const options ={
    httpOnly: true,
    secure: true,
  };

  res
  .status(200)
  .clearCookie("token", options)
  .json(200,"user logout successfully")

};

const userProfile = async (req, res) => {
  return res
  .status(200)
  .json(req.user)
}

export { 
  registerUser, 
  loginUser,
  logoutUser,
  userProfile
};

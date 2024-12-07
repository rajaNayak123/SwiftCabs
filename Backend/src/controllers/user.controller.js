import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  try {
    if ([fullname, username, email, password].some((field) => {field?.trim() === ""})) {
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

    const token = newUser.generateAuthToken();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        fullname: newUser.fullname,
        password: newUser.password,
      },
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export { registerUser };

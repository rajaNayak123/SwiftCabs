import { Captain } from "../models/captain.model.js";

const registerCaptain = async (req, res) => {
  try {
    const {
      fullname,
      email,
      password,
      vehicle: { color, plate, capacity },
      vehicleType,
    } = req.body;

    if (!(fullname || email || password || vehicleType || vehicle)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingCaptain = await Captain.findOne({ email });

    console.log(existingCaptain);

    if (existingCaptain) {
      return res.status(400).json({ message: "The Captain is already exists" });
    }

    const newCaptain = new Captain({
      fullname,
      email,
      password,
      vehicle: { color, plate, capacity },
      vehicleType,
    });

    await newCaptain.save();

    const token = await newCaptain.generateAuthToken();

    res.status(200).json(newCaptain, token);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error. Please try again later.",
    });
  }
};

const loginCaptain = async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({ message: "email and password are required" });
  }

  const captain = Captain.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Captain not found" });
  }

  const isMatchPassword = await captain.comparePassword(password);

  if (!isMatchPassword) {
    return res.status(401).json({ message: "password is incorrect" });
  }

  const token = await captain.generateAuthToken();

  const options = {
    httpOnly: true,
    secure: true,
  };

  res.status(200).cookie(token, options).json({ captain, token });
};

const captainProfile = async (req,res) =>{
  return res
  .status(200)
  .json(req.user)
}

const logOutCaptain = async (req, res) => {
  await Captain.findByIdAndUpdate(
    req.captain._id,
    {
      $set: { token: undefined },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookies("token", options)
    .json(200, "captain logout successfully");
};
export { registerCaptain, loginCaptain, logOutCaptain,captainProfile };

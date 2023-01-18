import Users from "../models/userModel";
import jwt from "jsonwebtoken";

function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}

export async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await Users.signup(email, password);
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

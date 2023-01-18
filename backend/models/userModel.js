import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields are required.");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error("email already in use.");
  }

  const user = await this.create({ email, password });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields are required.");
  }

  const user = this.findOne({ email });

  if (!user) {
    throw new Error("Invalid email address.");
  }

  const matchPassword = await this.findOne({ email, password });

  if (!matchPassword) {
    throw new Error("Invalid password");
  }

  return user;
};

export default mongoose.model("users", userSchema);

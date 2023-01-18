import mongoose, { Schema } from "mongoose";

class UserSchema {

    public userSchema() {
        return new Schema({
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        })
    }
}

const userSchema = new UserSchema();

export default mongoose.model("users", userSchema.userSchema());
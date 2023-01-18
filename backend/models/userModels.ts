import mongoose, { Schema } from "mongoose";

class UserSchema {

    public constructor() {
        this.login();
    }

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

    public login() {
        this.userSchema().statics.login = async function (email: string, password: string) {
            if (!email || !password) {
                throw new Error("All fields are required.");
            }

            const user = this.findOne({ email });

            if (user) {
                throw new Error ("email already in use.")
            }

            return user;
        }
    }
}

const userSchema = new UserSchema();

export default mongoose.model("users", userSchema.userSchema());
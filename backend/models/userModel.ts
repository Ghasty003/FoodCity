import mongoose, { Model, Schema } from "mongoose";

interface User {
    email: string;
    password: string;
}

interface UserModel extends Model<User> {
    signup(email: string, password: string): unknown;
    login(email: string, password: string): unknown;
}

class UserSchema {

    public constructor() {
        this.login();
        this.signUp();
    }

    public userSchema() {
        return new Schema<User, UserModel>({
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

            if (!user) {
                throw new Error ("Invalid email address.")
            }

            const matchPassword = await this.findOne({ email, password });

            if (!matchPassword) {
                throw new Error("Invalid password");
            }

            return user;
        }
    }

    public signUp() {
        this.userSchema().static("signup", async function signup (email: string, password: string) {
            if (!email || !password) {
                throw new Error("All fields are required.");
            }

            const exists = await this.findOne({ email });
            if (exists) {
                throw new Error("email already in use.")
            }

            const user = await this.create({ email, password });

            return user;
        })
    }
}

const userSchema = new UserSchema();

export default mongoose.model<User, UserModel>("users", userSchema.userSchema());
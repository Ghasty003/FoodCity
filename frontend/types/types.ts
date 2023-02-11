import React from "react";

enum Type {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
}

interface Prop {
    children: React.ReactNode;
}

interface User {
    user: object | null
}
import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import AuthContext from "../contexts/AuthContext";
import { Type } from "../types/types";

const Register: React.FC = () => {

    const [err, setErr] = useState<string>("");
    const [seePass, setSeePass] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const {dispatch} = useContext(AuthContext);

    const passwordInput = useRef<HTMLInputElement>(null!);

    const hidePassword = () => {
        setSeePass(false);
        passwordInput.current.type = "password";
    }

    const seePassword = () => {
        setSeePass(true);
        passwordInput.current.type = "text";
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const event = (e.target) as HTMLFormElement;

        const email: string = (event[0] as HTMLInputElement).value;
        const password: string = (event[1] as HTMLInputElement).value;

        const response = await fetch("https://foodcity.onrender.com/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if (!response.ok) {
            setErr(json.error);
            setLoading(false);
        }

        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            dispatch({type: Type.LOGIN, payload: json})
            setLoading(false);
        }
    }

    return (
        <div className='flex justify-center items-center py-16'>
           <div className='bg-white w-[400px] h-[450px] shadow-2xl flex flex-col items-center rounded-2xl p-5'>
            <h2 className='text-2xl font-bold'>Welcome to FoodCity</h2>
            <p>Register your account</p>
            <form className='w-full mt-4' onSubmit={handleLogin}>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md my-4'>
                    <input placeholder="Email" className='w-[90%] outline-none p-2' type="email" />
                    <AiOutlineMail />
                </div>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md'>
                    <input placeholder="Password" type="password" className='w-[90%] outline-none p-2' ref={passwordInput} />
                    { seePass ? <FiEyeOff className='cursor-pointer' onClick={hidePassword} />
                        : <IoEyeOutline className='cursor-pointer' onClick={seePassword} />
                    }
                </div>

                {
                    err && <p className='text-center mt-2 text-red-600'>{ err }</p>
                }
                <div className='flex justify-center items-center my-6'>
                    <button disabled={loading} className='bg-orange-400 text-white w-[200px] p-2 rounded-xl text-center'>{loading ? "Registering..." : "Register"}</button>
                </div>

                <div className='text-center text-sm'>
                    <p>Already have an account? <Link to="/login" className='text-orange-400'>Login</Link></p>
                </div>
            </form>
           </div>
        </div>
    );
}


export default Register;
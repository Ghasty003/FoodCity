import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";

const Login: React.FC = () => {

    const [err, setErr] = useState<boolean>(false);
    const [seePass, setSeePass] = useState<boolean>(false);

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

        const event = (e.target) as HTMLFormElement;

        const email: string = (event[0] as HTMLInputElement).value;
        const password: string = (event[1] as HTMLInputElement).value;

        const response = await fetch("http://localhost:4000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if (!response.ok) {
            console.log(json.error);
        }

        if (response.ok) {
            localStorage.setItem("user", json);
            console.log(json)
        }
    }

    return (
        <div className='flex justify-center items-center py-16'>
           <div className='bg-white w-[400px] h-[450px] shadow-2xl flex flex-col items-center rounded-2xl p-5'>
            <h2 className='text-2xl font-bold'>Login</h2>
            <p>Enter your details to sign in</p>
            <form className='w-full mt-4' onSubmit={handleLogin}>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md my-4'>
                    <input placeholder="Email" className='w-[90%] outline-none p-2' type="text" />
                    <AiOutlineMail />
                </div>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md'>
                    <input placeholder="Password" type="password" className='w-[90%] outline-none p-2' ref={passwordInput} />
                    { seePass ? <FiEyeOff className='cursor-pointer' onClick={hidePassword} />
                        : <IoEyeOutline className='cursor-pointer' onClick={seePassword} />
                    }
                </div>
                <div className='text-end pr-6 pt-3'>
                    <Link to="" className='text-sm text-orange-400 text-end'>Forgot password?</Link>
                </div>
                {
                    err && <p className='text-center mt-2 text-red-600'>Something went wrong, try again.</p>
                }
                <div className='flex justify-center items-center my-6'>
                    <button className='bg-orange-400 text-white w-[200px] p-2 rounded-xl text-center'>Sign In</button>
                </div>

                <div className='text-center text-sm'>
                    <p>Don't have an account? <Link to="/register" className='text-orange-400'>Register</Link></p>
                </div>
            </form>
           </div>
        </div>
    );
}


export default Login;
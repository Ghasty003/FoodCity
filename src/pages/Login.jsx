import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import AuthContext from '../context/AuthContext';

function Login() {

    const {currentUser} = useContext(AuthContext);

    

    const [seePass, setSeePass] = useState(false);
    const [err, setErr] = useState(false);
    const passwordInput = useRef("");
    const emailInput = useRef("");
    const p1 = useRef("");
    const p2 = useRef("");

    const seePassword = () => {
        setSeePass(true);
        passwordInput.current.type = "text";
    }

    const hidePassword = () => {
        setSeePass(false);
        passwordInput.current.type = "password";
    }

    useEffect(() => {

        p2.current.addEventListener("click", () => {
            passwordInput.current.focus();
        });

        p1.current.addEventListener("click", () => {
            emailInput.current.focus();
        })

        const input = document.querySelectorAll("input");
        input.forEach((ele, index) => {
            ele.addEventListener("focus", () => {
                if (index === 0) {
                    if(p1.current.classList.contains("top-1")) {
                        p1.current.classList.replace("top-1", "-top-2");
                        p1.current.classList.add("text-xs");
                    }
                }

                if (index === 1) {
                    if(p2.current.classList.contains("top-1")) {
                        p2.current.classList.replace("top-1", "-top-2");
                        p2.current.classList.add("text-xs");
                    }
                }
            })

            ele.addEventListener("blur", () => {
                if(index === 0 && input[0].value == "" && p1.current.classList.contains("-top-2")) {
                    p1.current.classList.replace("-top-2", "top-1");
                    p1.current.classList.remove("text-xs");
                }

                if(index === 1 && input[1].value == "" && p2.current.classList.contains("-top-2")) {
                    p2.current.classList.replace("-top-2", "top-1");
                    p2.current.classList.remove("text-xs");
                }
            })
        })
    }, []);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch(e) {
            setErr(true);
        }
    }

    return (
        <div className='flex justify-center items-center py-16'>
           <div className='bg-white w-[400px] h-[450px] shadow-2xl flex flex-col items-center rounded-2xl p-5'>
            <h2 className='text-2xl font-bold'>Login</h2>
            <p>Enter your details to sign in</p>
            <form className='w-full mt-4' onSubmit={handleLogin}>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md my-4'>
                    <input ref={emailInput} className='w-[90%] outline-none p-2' type="text" />
                    <p ref={p1} className='absolute top-1 text-gray-500 bg-white left-3'>Email</p>
                    <AiOutlineMail />
                </div>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md'>
                    <input type="password" className='w-[90%] outline-none p-2' ref={passwordInput} />
                    <p ref={p2} className='absolute top-1 text-gray-500 bg-white left-3'>Password</p>
                    { seePass ? <FiEyeOff className='cursor-pointer' onClick={hidePassword} />
                        : <IoEyeOutline className='cursor-pointer' onClick={seePassword} />
                    }
                </div>
                <div className='text-end pr-6 pt-3'>
                    <Link className='text-sm text-orange-400 text-end'>Forgot password?</Link>
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
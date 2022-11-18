import React, { useEffect, useRef, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff, FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Add from "../assets/addAvatar.png";

function Register() {

    const [seePass, setSeePass] = useState(false);
    const passwordInput = useRef("");
    const emailInput = useRef("");
    const usernameInput = useRef("");
    const p0 = useRef("");
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

        p0.current.addEventListener("click", () => {
            usernameInput.current.focus();
        })

        const input = document.querySelectorAll("input:not(#file)");
        input.forEach((ele, index) => {
            ele.addEventListener("focus", () => {
                if (index === 0) {
                    if(p0.current.classList.contains("top-1")) {
                        p0.current.classList.replace("top-1", "-top-2");
                        p0.current.classList.add("text-xs");
                    }
                }

                if (index === 1) {
                    if(p1.current.classList.contains("top-1")) {
                        p1.current.classList.replace("top-1", "-top-2");
                        p1.current.classList.add("text-xs");
                    }
                }

                if (index === 2) {
                    if(p2.current.classList.contains("top-1")) {
                        p2.current.classList.replace("top-1", "-top-2");
                        p2.current.classList.add("text-xs");
                    }
                }
            })

            ele.addEventListener("blur", () => {
                if(index === 0 && input[0].value == "" && p0.current.classList.contains("-top-2")) {
                    p0.current.classList.replace("-top-2", "top-1");
                    p0.current.classList.remove("text-xs");
                }

                if(index === 1 && input[1].value == "" && p1.current.classList.contains("-top-2")) {
                    p1.current.classList.replace("-top-2", "top-1");
                    p1.current.classList.remove("text-xs");
                }

                if(index === 2 && input[2].value == "" && p2.current.classList.contains("-top-2")) {
                    p2.current.classList.replace("-top-2", "top-1");
                    p2.current.classList.remove("text-xs");
                }
            });
        })
    }, []);

    return (
        <div className='flex justify-center items-center py-16'>
           <div className='bg-white w-[400px] h-[450px] shadow-2xl flex flex-col items-center rounded-2xl p-5'>
            <h2 className='text-2xl font-bold'>Welcome to FoodCity</h2>
            <p>Register your account</p>
            <form className='w-full mt-4' onSubmit={ e => {
                e.preventDefault();
            }}>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md my-4'>
                    <input ref={usernameInput} className='w-[90%] outline-none p-2' type="text" required />
                    <p ref={p0} className='absolute top-1 text-gray-500 bg-white left-3'>Username</p>
                    <FiUser />
                </div>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md my-4'>
                    <input ref={emailInput} className='w-[90%] outline-none p-2' type="text" required />
                    <p ref={p1} className='absolute top-1 text-gray-500 bg-white left-3'>Email</p>
                    <AiOutlineMail />
                </div>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md'>
                    <input type="password" className='w-[90%] outline-none p-2' ref={passwordInput} required />
                    <p ref={p2} className='absolute top-1 text-gray-500 bg-white left-3'>Password</p>
                    { seePass ? <FiEyeOff className='cursor-pointer' onClick={hidePassword} />
                        : <IoEyeOutline className='cursor-pointer' onClick={seePassword} />
                    }
                </div>

                <input type="file" id="file" className='hidden' required />
                <label className='flex items-center justify-center mt-5' htmlFor="file">
                    <img className='w-10 mx-3' src={Add} alt="choose file" />
                    <p>Choose your avatar</p>
                </label>
                
                <div className='flex justify-center items-center my-6'>
                    <button className='bg-orange-400 text-white w-[200px] p-2 rounded-xl text-center'>Register</button>
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
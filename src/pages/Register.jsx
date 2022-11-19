import React, { useEffect, useRef, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff, FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Add from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

function Register() {

    const [seePass, setSeePass] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);
    const [err, setErr] = useState(false);
    const [uploadImgErr, setUploadImgErr] = useState(false);
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


    const animationEnd = () => {
        setUploadImgErr(false)
    }

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if(e.target[3].files[0] === undefined ) {
            setUploadImgErr(true);
            return
        }

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", 
             (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done.`)

                switch(snapshot.state){
                    case "running":
                        console.log("running");
                        break;
                    case "paused":
                        console.log("paused");
                        break;
                }
             },
             (err) => {
                console.log("err at", err);
                setErr(true);
             },
             () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(res.user, {
                        displayName,
                        photoURL: downloadURL
                    });
                    await addDoc(collection(db, "uses"), {
                        photoURL: downloadURL,
                        displayName,
                        password,
                        email,
                        uid: res.user.uid
                    })
                    navigate("/");
                })
             }
            )
        } catch(e) {
            if(e.message === "Firebase: Error (auth/email-already-in-use)."){
                setEmailTaken(true);
                setTimeout(() => {
                    setEmailTaken(false);
                }, 5000);
            } else {
                console.log("err cus", e.message);
                setErr(true);
            }
        }
    }

    return (
        <div className='flex justify-center items-center py-16'>
           <div className='bg-white w-[400px] h-[500px] shadow-2xl flex flex-col items-center rounded-2xl p-5'>
            <h2 className='text-2xl font-bold'>Welcome to FoodCity</h2>
            <p>Register your account</p>
            <form className='w-full mt-4' onSubmit={handleRegister}>
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

                <input type="file" id="file" className='hidden' />
                <label className='flex items-center justify-center mt-5' htmlFor="file">
                    <img className='w-10 mx-3' src={Add} alt="choose file" />
                    <p>Choose your avatar</p>
                </label>

                {
                    uploadImgErr && <div onAnimationEnd={animationEnd} className='upload bg-orange-200 p-5 w-[250px] m-auto rounded-xl text-center text-textColor'>
                     <p>Upload an Image</p>
                    </div>
                }

                {
                    emailTaken && <p className='text-center mt-2 text-red-600'>Email has been taken by other user.</p>
                }

                {
                    err && <p className='text-center mt-2 text-red-600'>Something went wrong, try again.</p>
                }
                
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
import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const[isSignInForm, setSignInForm]= useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix-logo" />
        </div>
        <form className='w-3/12 absolute p-12 bg-black mt-35 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 
                className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            { !isSignInForm && (
            <input 
                type='text' 
                placeholder='Full Name' 
                className='p-2 my-4 w-full  bg-gray-700 ' 
            />
            )}
            <input 
                type='text' 
                placeholder='Email' 
                className='p-2 my-4 w-full bg-gray-700' 
            />
             <input 
                type='password' 
                placeholder='PassWord' 
                className='p-2 my-4 w-full  bg-gray-700 ' 
            />
            
             <button 
                className='p-2 my-4 bg-red-500 w-full rounded-lg'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                
            </button>
            <p className='p-2 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "New To NetFlix? Sign Up Now" : "Already Registered? SignIn Now"}
                </p>
        </form>
    </div>
  )
}

export default Login
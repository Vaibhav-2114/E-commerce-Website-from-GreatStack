import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (

    // <div className='text-center pt-20'>
    //   <div className='inline-flex gap-2 items-center mb-3 justify-center mb-6'>
    //     <h3 className='prata-regular text-3xl'>Login</h3>
    //     <p className='w-6 sm:w-8 h-[1px] sm:h-[2px] bg-black'></p>
    //   </div>
    //   <form className='w-full sm:w-100 mx-auto flex flex-col gap-4 '>
    //     <input type="email" placeholder='Email' className='border border-black-100 py-3 px-4 outline-none' />
    //     <input type="password" placeholder='Password' className='border border-black-100 py-3 px-4 outline-none' />
    //   </form>
    //   <div className='flex justify-around w-full sm:w-[550px] mx-auto mt-2 text-sm text-gray-800'>
    //     <p>Forget your Password?</p>
    //     <p>Create Account</p>
    //   </div>
    //   <div className='w-full sm:w-[650px] mx-auto mt-6'>
    //     <button className='bg-black text-white py-3 px-4 mt-4 sm:w-[125px]'>Sign In</button>
    //   </div>
    // </div>

    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState == 'Login' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder='Name' required />}
      <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder='Email' required />
      <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget Your Password?</p>
        {
          currentState == 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState == 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login

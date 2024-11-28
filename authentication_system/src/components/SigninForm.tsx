import React from 'react'




const SigninForm = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-900 transition-colors'>
        <div className='hidden lg:flex lg:w-1/2 bg-blue-400 dark:bg-indigo-700 relative overflow-hidden'>
            <img 
                src='https://images.unsplash.com/photo-1496167117681-944f702be1f4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt="Abstract background"
                className='object-cover w-full h-full opacity-20'
            />
        </div>
    </div>
  )
}

export default SigninForm

import React from 'react'
import { LockKeyhole } from 'lucide-react';
import ThemeToggler from './ThemeToggler';

interface AuthLayoutArgs{
    children: React.ReactNode;
    title: string;
    subtitle: string;
}


const AuthLayout = ({children, title, subtitle}: AuthLayoutArgs) => {
  return (
      <div className='min-h-screen flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-900 transition-colors'>
        <ThemeToggler/>
        <div className='hidden lg:flex lg:w-1/2 bg-blue-400 dark:bg-indigo-700 relative overflow-hidden rounded-r-4xl shadow-custom-light dark:shadow-custom-dark'>
            <img 
                src='https://images.unsplash.com/photo-1496167117681-944f702be1f4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt="Abstract background"
                className='object-cover w-full h-full opacity-20'
            />
            <div className='absolute inset-0 flex items-center justify-center text-white p-12'>
                <div className='max-w-xl'>
                    <LockKeyhole className='w-16 h-16 mb-8'/>
                    <h1 className='text-4xl font-bold mb-6'>Stay Secure</h1>
                    <p className="text-lg opacity-90">
                    Welcome to our platform. We take security seriously and ensure your data
                    is protected with state-of-the-art encryption.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center p-6'>
            <div className='w-full max-w-md space-y-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        {title}
                    </h2>
                    <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                        {subtitle}
                    </p>
                </div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout

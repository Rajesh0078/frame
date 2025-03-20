import React from 'react'
import FormInput from '../components/shared/FormInput'
import Logo from '/public/assets/logo.svg'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaFacebook, FaGoogle } from 'react-icons/fa6'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { Head, Link, router } from '@inertiajs/react'


const userSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
            /[@$!%*?&]/,
            "Password must contain at least one special character"
        )
        .required("Password is required"),
});

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSchema) })

    const loginHandler = (data) => {
        router.post('/api/login', data, {
            onSuccess: (status) => {
                console.log(status)
            },
            onError: (status) => {
                console.log(status)
            }
        })
    }

    return (
        <>
            <Head><title>Login</title></Head>
            <div className='h-svh bg-[#F4F4F4] flex-center px-[6%]'>
                <div className='w-full sm:w-[500px] sm:bg-white sm:shadow sm:px-10 sm:py-8 rounded-[5px]'>
                    <div className='w-full flex-center mb-8 font-bold gap-2 text-[22px] text-dark'>
                        <img src={Logo} alt="" className='w-[180px]' />

                    </div>
                    <h2 className='mb-1'>Sign In</h2>
                    <p className='mb-4'>Access the one way panel using your email and passcode.</p>
                    <form onSubmit={handleSubmit(loginHandler)}>
                        <div className='flex flex-col gap-3'>
                            <FormInput
                                register={register}
                                name='email'
                                placeholder='Enter email'
                                Icon={FaEnvelope}
                                id='email'
                                label='Email'
                                error={errors.email?.message}
                            />
                            <FormInput
                                register={register}
                                name='password'
                                placeholder='Enter password'
                                id='password'
                                label='Password'
                                type='password'
                                className=''
                                error={errors.password?.message}
                            />
                            <div className='w-full flex justify-end'>
                                <p className='hover:!text-primary cursor-pointer select-none'>Forgot password?</p>
                            </div>
                        </div>
                        <button className='btn-primary min-h-[42px] mt-6'>Sign In</button>
                    </form>
                    <h3 className='mt-3 mb-4'>
                        New to our platform?
                        <Link href='/register' className='text-primary/70 hover:text-primary transition-colors duration-200 ease-in-out ms-1'>
                            Create an account
                        </Link>
                    </h3>
                    <div className='text-[12px] text-dark text-center flex-center gap-2'>
                        <div className='w-[5%] h-[1px] bg-dark/60'></div>
                        <span>OR</span>
                        <div className='w-[5%] h-[1px] bg-dark/60'></div>
                    </div>
                    <div className='w-full flex gap-4 mt-4 h-10 text-sm font-semibold'>
                        <button className='h-full w-full text-center flex-center gap-3 rounded-[5px] bg-white shadow sm:shadow-inner sm:bg-[#F4F4F4] border-bdr-primary'>
                            <FaGoogle />
                            Google
                        </button>
                        <button className='h-full w-full text-center flex-center gap-3 rounded-[5px] bg-white shadow sm:shadow-inner sm:bg-[#F4F4F4] border-bdr-primary'>
                            <FaFacebook />
                            Facebook
                        </button>
                    </div>
                    <p className='mt-6 text-center'>Copyright © {new Date().getFullYear()} - One Way</p>
                </div>
            </div>
        </>
    )
}

export default Login
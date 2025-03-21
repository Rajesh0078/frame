import React from 'react';
import FormInput from '../components/shared/FormInput';
import Logo from '/public/assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaUser, FaLock, FaFacebook, FaGoogle } from 'react-icons/fa6';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Head, Link, router } from '@inertiajs/react';

// Validation Schema
const userSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSchema) });

    const registerHandler = (data) => {
        router.post('/api/users/register', { ...data, role: 'user' }, {
            onSuccess: (status) => {
                console.log(status);
            },
            onError: (status) => {
                console.log(status);
            }
        });
    };

    return (
        <>
            <Head><title>Register</title></Head>
            <div className='h-svh bg-[#F4F4F4] flex-center px-[6%]'>
                <div className='w-full sm:w-[500px] sm:bg-white sm:shadow sm:px-10 sm:py-8 rounded-[5px]'>
                    <Link href='/' className='w-full flex-center mb-8 font-bold gap-2 text-[22px] text-dark'>
                        <img src={Logo} alt="Frame Up Logo" className='w-[180px]' />
                    </Link>
                    <h2 className='mb-1'>Sign Up</h2>
                    <p className='mb-4'>Create your frame up account to get started.</p>
                    <form onSubmit={handleSubmit(registerHandler)}>
                        <div className='flex flex-col gap-3'>
                            <FormInput
                                register={register}
                                name='name'
                                placeholder='Enter your name'
                                Icon={FaUser}
                                id='name'
                                label='Full Name'
                                error={errors.name?.message}
                            />
                            <FormInput
                                register={register}
                                name='email'
                                placeholder='Enter your email'
                                Icon={FaEnvelope}
                                id='email'
                                label='Email'
                                error={errors.email?.message}
                            />
                            <FormInput
                                register={register}
                                name='password'
                                placeholder='Enter your password'
                                Icon={FaLock}
                                id='password'
                                label='Password'
                                type='password'
                                error={errors.password?.message}
                            />
                            <FormInput
                                register={register}
                                name='confirmPassword'
                                placeholder='Confirm your password'
                                Icon={FaLock}
                                id='confirmPassword'
                                label='Confirm Password'
                                type='password'
                                error={errors.confirmPassword?.message}
                            />
                        </div>
                        <button className='btn-primary min-h-[42px] mt-6'>Create Account</button>
                    </form>
                    <h3 className='mt-3 mb-4'>
                        Already have an account?
                        <Link href='/login' className='text-primary/70 hover:text-primary transition-colors duration-200 ease-in-out ms-1'>
                            Login here
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
                    <p className='mt-6 text-center'>Copyright © {new Date().getFullYear()} - Frame Up</p>
                </div>
            </div>
        </>
    );
};

export default Register;

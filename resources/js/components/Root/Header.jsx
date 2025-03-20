import React from 'react'
import { GoHeart, GoPerson } from 'react-icons/go'
import { router, usePage } from '@inertiajs/react';

const Header = () => {

    const { props: { user } } = usePage()

    const handleMyAccountNavigation = () => {
        if (user) {
            router.visit(user.role === 'user' ? '/' : '/admin/dashboard')
        } else {
            router.visit('/login')
        }
    }

    return (
        <>
            <div className='h-10 bg-primary w-full'></div>
            <div className='h-10 flex justify-between items-center px-[4%] border-b border-primary-border'>
                <div className='flex items-center gap-[15px]'>
                    <h5 onClick={() => router.visit('/about-us')} className='cursor-pointer'>About us</h5>
                    <h5 onClick={handleMyAccountNavigation} className='cursor-pointer'>My Account</h5>
                    <h5 className='cursor-pointer'>Wishlist</h5>
                    <h5>We deliver to you every day from 7:00 to 23:00</h5>
                </div>
                <div className='flex items-center gap-[15px]'>
                    <h5>Eng</h5>
                    <h5 className='cursor-pointer'>Contact us</h5>
                    <h5 className='cursor-pointer'>Order Tracking</h5>
                </div>
            </div>
            <header className='px-[4%] sticky top-0 border-b border-primary-border py-4 bg-white flex items-center gap-6'>
                <img src="/assets/logo.svg" alt="" className='w-[164px]' />
                <div className='w-full bg-slate-200 h-10'></div>
                <div className='flex items-center gap-4 tetx-xl'>
                    <div>
                        <GoPerson className='text-xl' />
                    </div>
                    <button>
                        <GoHeart className='text-xl' />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
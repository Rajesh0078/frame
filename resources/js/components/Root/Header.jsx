import React from 'react'
import { GoHeart, GoMultiSelect, GoPerson, GoSearch } from 'react-icons/go'
import { Link, router, usePage } from '@inertiajs/react';
import { BsHandbag } from 'react-icons/bs';
import { LuChevronDown } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';

const Header = () => {

    const { props: { user }, url } = usePage()

    const handleMyAccountNavigation = () => {
        if (user) {
            router.visit(user.role === 'user' ? '/profile' : '/admin/dashboard')
        } else {
            router.visit('/login')
        }
    }

    const navs = [
        { name: "Home", path: '/' },
        { name: "Festive Specials", path: '/festive-specials' },
        { name: "Frames & Photo Art", path: '/our-albums' },
        { name: "Apparel Sets", path: '/apparels' },
        { name: "Gift Articles", path: '/gift-articles' },
    ]

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
                    <h5 className='cursor-pointer' onClick={() => router.visit('/how-we-work')}>How we work</h5>
                    <h5 className='cursor-pointer'>Contact us</h5>
                    <h5 className='cursor-pointer'>Order Tracking</h5>
                </div>
            </div>
            <header className='sticky top-0 bg-white z-10'>
                <div className='flex items-center gap-8 px-[4%] py-4'>
                    <Link href='/' className='w-[234px]'><img src="/assets/logo.svg" alt="" className='w-[164px]' /></Link>
                    <div className='w-full flex-center relative'>
                        <input type="text" className='!shadow-none !pe-10' placeholder='search' />
                        <GoSearch className='absolute right-3' />
                    </div>
                    <div className='flex items-center gap-5 tetx-xl'>
                        <div onClick={handleMyAccountNavigation} className='cursor-pointer'>
                            <GoPerson className='text-[22px] hover:text-secondary' />
                        </div>
                        <button>
                            <GoHeart className='text-[23px] hover:text-secondary' />
                        </button>
                        <button>
                            <BsHandbag className='text-[22px] hover:text-secondary' />
                        </button>
                        {
                            user &&
                            <button onClick={() => router.post('/api/logout')}>
                                <MdLogout className='text-[22px] hover:text-secondary' />
                            </button>
                        }
                    </div>
                </div>
                <div className='h-11 w-full border-b border-primary-border px-[4%] flex items-center justify-between '>
                    <div className='flex items-center gap-x-[30px] h-full'>
                        <div className='w-[300px] border border-b-transparent border-primary-border rounded-tl-[8px] rounded-tr-[8px] h-full flex items-center justify-between px-5'>
                            <div className='my-auto font-semibold flex items-center gap-3 text-[15px] text-[#030712]'>
                                <GoMultiSelect className='text-xl' />
                                All Categories
                            </div>
                            <LuChevronDown className='text-xl' />
                        </div>
                        <div className='flex items-center gap-x-[25px] font-semibold text-[15px] text-[#030712]'>
                            {
                                navs.map((nav, index) => (
                                    <Link href={nav.path} key={index} className={`${nav.path === url && 'text-primary'} hover:text-primary`}>{nav.name}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex items-center gap-x-[25px] font-semibold text-[15px] text-[#030712]'>
                        <Link href={'/top-trendings'} className='hover:text-primary'>Top Trendings</Link>
                        <Link href={'/best-sellers'} className='hover:text-primary'>Best Sellers</Link>
                        <Link href={'/new-arrivals'} className='hover:text-primary'>New Arrivals</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
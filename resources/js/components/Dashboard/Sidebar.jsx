import { Link, usePage } from '@inertiajs/react';
import React from 'react'
import Logo from '/public/assets/logo.svg'
import { CiGrid31, CiGrid41, CiShop } from 'react-icons/ci'

const Sidebar = () => {
    const { url, props: { user } } = usePage();

    const routes = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: CiGrid41 },
        { name: 'Products', path: '/admin/products', icon: CiShop },
        { name: 'Categories', path: '/admin/categories', icon: CiGrid31 },
    ]

    const layouts = [
        { name: 'Banners', path: '/admin/banners', icon: CiGrid41 },
    ]

    return (
        <aside className='min-w-[275px]'>
            <div className='w-full flex h-[64px] px-[15px]'>
                <Link href='/' className='flex-center font-bold gap-2 text-[20px] text-dark'>
                    <img src={Logo} alt="" className='w-[154px]' />
                </Link>
            </div>
            <div className='px-[15px]'>
                <div className='h-[62px] bg-[#F6F6F6] mb-6 rounded-[5px] flex items-center p-[10px] gap-2'>
                    <div className='h-full rounded-[5px] overflow-hidden aspect-square'>
                        <img src="https://crms.dreamstechnologies.com/html/template/assets/img/profiles/avatar-14.jpg" alt="" />
                    </div>
                    <div>
                        <h4 className='text-dark text-base font-semibold'>{user.name}</h4>
                        <p className='capitalize -mt-[2px]'>{user.role}</p>
                    </div>
                </div>
                <div className='mb-6'>
                    <h6>Main Menu</h6>
                    <div className='flex flex-col gap-1'>
                        {
                            routes.map((route, index) => {
                                const isActive = url === route.path;
                                return (
                                    <Link
                                        key={index}
                                        href={route.path}
                                        className={`text-[15px] font-medium whitespace-nowrap flex gap-3 p-2 rounded-[5px] transition-all duration-200 group ease-in-out 
                                    ${isActive ? "bg-primary/10 text-primary shadow-inner" : "text-dark hover:shadow-inner hover:bg-primary/10 hover:text-primary"}`}
                                    >
                                        <div className={`w-6 aspect-square rounded-[5px] transition-all duration-300 ease-in-out flex items-center justify-center 
                                    ${isActive ? "bg-primary text-white" : "bg-secondary-2 text-dark group-hover:bg-primary group-hover:text-white"}`}
                                        >
                                            <route.icon className="text-[17px]" />
                                        </div>
                                        {route.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='mb-6'>
                    <h6>Layouts</h6>
                    <div className='flex flex-col gap-1'>
                        {
                            layouts.map((route, index) => {
                                const isActive = url === route.path;
                                return (
                                    <Link
                                        key={index}
                                        href={route.path}
                                        className={`text-[15px] font-medium whitespace-nowrap flex gap-3 p-2 rounded-[5px] transition-all duration-200 group ease-in-out 
                                    ${isActive ? "bg-primary/10 text-primary shadow-inner" : "text-dark hover:shadow-inner hover:bg-primary/10 hover:text-primary"}`}
                                    >
                                        <div className={`w-6 aspect-square rounded-[5px] transition-all duration-300 ease-in-out flex items-center justify-center 
                                    ${isActive ? "bg-primary text-white" : "bg-secondary-2 text-dark group-hover:bg-primary group-hover:text-white"}`}
                                        >
                                            <route.icon className="text-[17px]" />
                                        </div>
                                        {route.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
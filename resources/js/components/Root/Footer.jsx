
import React from 'react'
import { FaEnvelope, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'
import { Link } from '@inertiajs/react'

const Footer = () => {
    return (
        <footer className="footer bg-[#FAFAFA] pt-10 px-[4%]">
            <div className="mx-auto">
                <div className='flex gap-y-6 md:items-center justify-between md:flex-row flex-col'>
                    <img src={'/assets/logo.svg'} alt='Frame Up Logo' width={100} height={100} className='w-[230px]' />
                    <div className='flex space-x-5 text-[24px] text-slate-800'>
                        <Link href={'/'} className="hover:text-white transition-all duration-200 ease-linear hover:bg-primary h-[50px] w-[50px] border border-slate-300  rounded-lg flex">
                            <FaWhatsapp className='m-auto' />
                        </Link>
                        <Link href={'/'} className="hover:text-white transition-all duration-200 ease-linear hover:bg-primary h-[50px] w-[50px] border border-slate-300  rounded-lg flex">
                            <ImFacebook className='m-auto' />
                        </Link>
                        <Link href={'/'} className="hover:text-white transition-all duration-200 ease-linear hover:bg-primary h-[50px] w-[50px] border border-slate-300  rounded-lg flex">
                            <FaInstagram className='m-auto' />
                        </Link>
                        <Link href={'/'} className="hover:text-white transition-all duration-200 ease-linear hover:bg-primary h-[50px] w-[50px] border border-slate-300  rounded-lg flex">
                            <ImLinkedin2 className='m-auto' />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-4 pt-8 mt-7 border-t border-slate-400 text-sm">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Frame Up</h2>
                        <p className="leading-relaxed fomt-[400] text-slate-700 max-w-[320px]">
                            Frame Up specializes in personalized photo frames and gift articles,
                            turning your memories into timeless treasures. Crafted with love,
                            made just for you.
                        </p>
                    </div>

                    <div className='flex flex-col items-center ms-12'>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Categories</h2>
                            <div className="space-y-2 fomt-[400] text-slate-700 flex flex-col">
                                <Link href="/categories" className="hover:text-secondary-3">Gift articles</Link>
                                <Link href="/about" className="hover:text-secondary-3">Customized albums</Link>
                                <Link href="/contact" className="hover:text-secondary-3">Customized T-Shirts</Link>
                                <Link href="/faq" className="hover:text-secondary-3">College collections</Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                            <div className="space-y-2 fomt-[400] text-slate-700 max-w-[300px] flex flex-col">
                                <Link href="/about" className="hover:text-secondary-3">About Us</Link>
                                <Link href="/categories" className="hover:text-secondary-3">All Categories</Link>
                                <Link href="/contact" className="hover:text-secondary-3">Contact Us</Link>
                                <Link href="/faq" className="hover:text-secondary-3">FAQs</Link>
                                <Link href="/privacy-policy" className="hover:text-secondary-3">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                            <ul className="space-y-2 fomt-[400] text-slate-700 max-w-[300px]">
                                <li className='flex items-center gap-2'><FaPhone /> +91 (824) 769-6604</li>
                                <li className='flex items-center gap-2'><FaEnvelope /> support@frameup.com</li>
                                <li className='flex items-center gap-2'><FaMapMarkerAlt /> Rajahmundry, Andhra Pradesh, India</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-400 py-4 mt-6 text-center text-xs flex flex-col lg:flex-row gap-2 justify-between text-gray-600 md:pb-4 pb-20">
                    <p>&copy; {new Date().getFullYear()} Frame Up. All rights reserved.</p>
                    <p>Designed with <span className="text-red-500">&hearts;</span> by Rajesh Peketi.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
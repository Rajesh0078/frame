import React from 'react'
import RootLayout from '../Layouts/RootLayout'
import { Link, usePage } from '@inertiajs/react';
import { FaImages, FaGift, FaCrown, FaClock, FaMugHot } from 'react-icons/fa6';
import { IoMdAlbums } from 'react-icons/io';
import { MdPhotoAlbum, MdCollections } from 'react-icons/md';
import { GiWoodFrame, GiPillow, GiGemChain, GiChainedHeart } from 'react-icons/gi';
import { BsFillPencilFill, BsFillLightbulbFill } from 'react-icons/bs';
import { RiGalleryFill } from 'react-icons/ri';
import { IoShirtSharp } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Index = () => {
    const { url } = usePage()

    const navs = [
        { name: "Wooden Frames", path: '/wooden-frames', icon: <GiWoodFrame /> },
        { name: "Mosaic Art", path: '/mosaic-art', icon: <RiGalleryFill /> },
        { name: "Photo Albums", path: '/photo-albums', icon: <MdPhotoAlbum /> },
        { name: "Custom T-Shirts", path: '/custom-tshirts', icon: <IoShirtSharp /> },
        { name: "Personalized Gifts", path: '/personalized-gifts', icon: <FaGift /> },
        { name: "LED Name Boards", path: '/led-name-boards', icon: <FaCrown /> },
        { name: "Magic Mugs", path: '/magic-mugs', icon: <FaMugHot /> },
        { name: "Photo Keychains", path: '/photo-keychains', icon: <GiGemChain /> },
        { name: "Scrapbooks", path: '/scrapbooks', icon: <MdCollections /> },
        { name: "Photo Cushions & Pillows", path: '/cushions', icon: <GiPillow /> },
        { name: "Farewell Collections", path: '/farewell-collections', icon: <IoMdAlbums /> },
        { name: "Customized Clocks", path: '/custom-clocks', icon: <FaClock /> },
        { name: "Couple Gifts", path: '/couple-gifts', icon: <GiChainedHeart /> },
        { name: "Name Engraved Pens", path: '/engraved-pens', icon: <BsFillPencilFill /> },
        { name: "Canvas Prints", path: '/canvas-prints', icon: <FaImages /> },
        { name: "Resin Art Gifts", path: '/resin-art-gifts', icon: <BsFillLightbulbFill /> },
    ];


    return (
        <RootLayout>
            <div className='flex gap-x-[30px] w-full'>
                <div className='min-w-[300px] hidden lg:block border border-t-transparent border-primary-border h-auto rounded-bl-[8px] rounded-br-[8px]'>
                    <div className='flex flex-col text-sm font-medium text-dark'>
                        {
                            navs.map((nav, index) => (
                                <Link href={nav.path} key={index} className={`${nav.path === url && 'text-primary'} hover:text-primary px-5 h-10 border-b border-primary-border last:border-b-0 flex items-center gap-4`}>
                                    <div className='text-[18px]'>{nav.icon}</div>
                                    <div>{nav.name}</div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <main className="col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
                    {/* Large Swiper Slider */}
                    <section className="lg:col-span-2 relative rounded-[8px] h-full">
                        <Swiper className='h-full rounded-[8px]'
                            slidesPerView={1}
                            spaceBetween={24}
                            grabCursor={true}
                            loop={true}
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                el: '.custom-pagination',
                                clickable: true,
                            }}
                        >
                            {Array.from({ length: 3 }).map((_, i) => (
                                <SwiperSlide key={i} className="bg-primary/10 flex justify-center items-center h-full rounded-[8px] shadow p-4">
                                    Slide {i + 1}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full z-10">
                            <div className="custom-pagination flex gap-2"></div>
                        </div>
                    </section>

                    {/* Side Blocks */}
                    <section className="grid grid-cols-1 gap-6">
                        <div className="w-full h-60 lg:h-full bg-secondary/10 rounded-[8px]"></div>
                        <div className="w-full h-60 lg:h-full bg-secondary/10 rounded-[8px]"></div>
                    </section>
                </main>
            </div>
        </RootLayout>
    )
}

export default Index
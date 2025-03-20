import { Link, router, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoChatbubblesOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { LuGrid2X2Plus } from 'react-icons/lu';
import { PiBell, PiChartPieSliceLight } from 'react-icons/pi';
import SliderLayout from '../shared/SliderLayout';
import { CiGrid41, CiLogout, CiUser } from 'react-icons/ci';

const Header = () => {

  const { props: { user } } = usePage();
  const [isOpen, setIsOpen] = useState('');

  const handleToggle = (menu) => {
    setIsOpen((prev) => (prev === menu ? "" : menu));
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown-wrapper")) {
      setIsOpen("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    router.post('/api/logout');
  };

  return (
    <header className='h-[64px] pe-4 flex justify-between items-center'>
      <div className='w-[320px] relative'>
        <input type="text" className='!bg-[#F6F6F6] !shadow-none' placeholder='Search' />
        <FaSearch className='text-dark/40 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer' />
      </div>
      <div className='h-9 flex items-center gap-[10px]'>
        <div className='h-full aspect-square cursor-pointer bg-green-100/80 text-green-800 border border-green-600 rounded-[5px] shadow-inner flex'>
          <LuGrid2X2Plus className='m-auto text-[15px]' />
        </div>
        <div className='h-full aspect-square cursor-pointer bg-violet-100 text-violet-800 rounded-[5px] shadow-inner flex'>
          <IoHelpCircleOutline className='m-auto text-[19.5px] ' />
        </div>
        <div className='h-full aspect-square cursor-pointer bg-amber-100/80 text-amber-800 rounded-[5px] shadow-inner flex'>
          <PiChartPieSliceLight className='m-auto text-[17px] ' />
        </div>
        <p>|</p>
        <div className='h-full aspect-square cursor-pointer bg-slate-100/80 rounded-[5px] shadow-inner flex'>
          <IoChatbubblesOutline className='m-auto text-[16px] ' />
        </div>
        <div className='relative h-full select-none dropdown-wrapper'>
          <div className='h-full aspect-square cursor-pointer bg-slate-100/80 rounded-[5px] shadow-inner text-dark flex ' onClick={() => handleToggle('notifications')}>
            <PiBell className='m-auto text-[17px]' />
          </div>
          <SliderLayout isOpen={isOpen === 'notifications'}>
            Notifications
          </SliderLayout>
        </div>
        <div className='relative h-full select-none dropdown-wrapper' >
          <div className='h-full aspect-square cursor-pointer bg-red-100/80 rounded-[5px] shadow-inner text-dark flex overflow-hidden' onClick={() => handleToggle('profile')}>
            <p className='uppercase !text-xl m-auto !font-semibold'>{user.name.charAt(0)}</p>
          </div>
          <SliderLayout isOpen={isOpen === 'profile'}>
            <div className='min-w-[120px] flex flex-col text-[#323737] text-[14px]'>
              <Link href='/dashboard' className='px-[10px] py-[5px] flex gap-[6px] items-center'>
                <CiGrid41 className='text-[16px]' />
                Dashboard
              </Link>
              <Link href='/profile' className='px-[10px] py-[5px] border-y border-[#F5F5F5] flex gap-[6px] items-center'>
                <CiUser className='text-[16px]' />
                Profile
              </Link>
              <div className='px-[10px] py-[5px] flex gap-[6px] items-center cursor-pointer' onClick={handleLogout}>
                <CiLogout className='text-[16px] rotate-180' />
                Logout
              </div>
            </div>
          </SliderLayout>
        </div>
      </div>
    </header>
  )
}

export default Header
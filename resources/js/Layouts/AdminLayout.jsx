import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import Header from '../components/Dashboard/Header'

const AdminLayout = ({ children }) => {
    return (
        <main className='w-full h-svh flex'>
            <Sidebar />
            <section className='w-full'>
                <Header />
                <div className='bg-white pb-4 pe-4 w-full h-[calc(100svh-64px)] rounded-[5px]'>
                    <div className='bg-[#f8f8fb] h-full px-6 py-4 shadow-inner rounded-[5px]'>
                        {children}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AdminLayout
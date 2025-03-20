import React from 'react'
import Footer from '../components/Root/Footer'
import Header from '../components/Root/Header'

const RootLayout = ({ children }) => {
    return (
        <main>
            <Header />
            <section className='h-svh px-[4%]'>{children}</section>
            <Footer />
        </main>
    )
}

export default RootLayout
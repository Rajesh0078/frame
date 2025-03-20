import React from 'react'

const SliderLayout = ({ children, isOpen }) => {
    return (
        <div
            className={`bg-white absolute right-0 border border-slate-200 rounded-[5px] py-2 px-3 transition-all duration-[400ms] ease-in-out ${isOpen ? "top-[50px] opacity-100 translate-y-0" : "top-[140px] translate-y-20 opacity-0 pointer-events-none"
                }`}
        >
            {children}
        </div>
    )
}

export default SliderLayout
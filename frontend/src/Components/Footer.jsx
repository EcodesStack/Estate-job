import React from 'react'

import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
              <img src={logo} alt="" className='w-40' />
            <p className='text-gray-400 mt-4'>
              Rothmann Properties is dedicated to providing exceptional real estate solutions, helping you find your perfect home or investment. Trust, integrity, and customer satisfaction are at the heart of everything we do.
            </p>
            </div>

            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About us</a>
                    <a href="#Contact" className='hover:text-white'>Contact us</a>
                    <a href="#" className='hover:text-white'>Privacy policy</a>
                </ul>
            </div>

            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>Latest news, articles, and resources, sent to your inbox weekly.</p>

            <div className='flex gap-2'>
                <input type="email" placeholder='enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700
                focus outline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>

            </div>
        </div>


        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            copyright 2023 &copy; Rothmann Properties. All rights Reserved.
        </div>

    </div>
  )
}

export default Footer
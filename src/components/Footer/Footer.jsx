import React from 'react'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='text-white bg-[#323232] flex flex-col items-center gap-8 py-5 lg:px-[8vw] pt-20 mt-24 ' id='footer-id' >

        <div className=" w-full grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-3 gap-20 ">
           <div className="flex flex-col items-start gap-5">
           <img src= {assets.logo} alt="" className='m-auto'/>
           <p  className='max-w-80   sm:max-w-80  md:max-w-80  lg:max-w-96 px-3 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim nostrum corporis id minus voluptas quas laboriosam voluptatem illo ratione delectus in aperiam, maxime, officiis quo. Tenetur quisquam modi aspernatur!s</p>
           <div className=" w-6 mr-4 flex gap-2 cursor-pointer">
            <img className='ml-4'  src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
           </div>
           <div className="flex flex-col items-start gap-5">
           <h2 className='text-white px-5'>COMPANY</h2>
           <ul >
            <li className='list-none mb-3 cursor-pointer px-3  '>Home</li>
            <li className='list-none mb-3 cursor-pointer  px-3' >About Us</li>
            <li className='list-none mb-3 cursor-pointer px-3'>Delivery</li>
            <li className='list-none mb-3 cursor-pointer px-3'>Privacy Policy</li>
           </ul>
           </div>
           
           <div className="flex flex-col items-start gap-5">
            <h2 className='text-white px-5 '>Get in touch</h2>
            <ul>
                <li className='list-none mb-3 cursor-pointer px-3  '>+1-212-456-7865</li>
                <li className='list-none mb-3 cursor-pointer px-3'>contact@tomato.com</li>
            </ul>
           </div>
          
          
        </div>
        <hr className='w-full h-1 '/>
        
    <p className="foter-copy-r8"></p>
      
    </div>
  )
}

export default Footer

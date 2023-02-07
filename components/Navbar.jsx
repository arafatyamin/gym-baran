import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../pages/asset/logo.png'

const Navbar = () => {
  const [visible, setVisible] = useState(false)


    const menuItems = <>
            <Link href="/" className='ml-6'><button >Home</button></Link>
                <Link href="/Program" className='ml-6'><button className=''>Program</button></Link>
                <Link href="/Blog" className='ml-6'><button className=''>Blog</button></Link>
                <Link href="/AboutUs"  className='ml-6'><button className=''>About us</button></Link>
                <Link href="/Login"  className='ml-6'><button className='px-[32px] py-[13px] bg-[#264373] text-[#ffffff] rounded-[10px]'>Login</button></Link>
    </>

    return (
        <nav className='flex justify-between my-[42px] h-[50px] items-center relative'>
            <div className="flex justify-center items-center">
                <Link href='/' className="flex justify-center items-center text-center">
                <Image width='141px' height='38px' src={logo} alt=""
                ></Image>
                </Link>
            </div>
            {/* toggle menu start */}
            <div className={`${visible?`block`:`hidden`} flex flex-col shadow-2xl mt-10 py-5 px-5 absolute top-6 -left-[10%] rounded-r-[20px] bg-white`}>
            
            <ul className={`flex-col flex z-30 gap-1`}>
                {menuItems}
            </ul>
            </div>
            <button onClick={()=>setVisible(!visible)} className=' p-6 text-black block z-40 lg:hidden'>{visible?<FiMenu className='rotate-90' />:<FiMenu className='' />}</button>
            {/* toggle menu end */}
            <ul className="lg:flex items-center hidden ">
                {menuItems}
            </ul>
        </nav>
    );
};

export default Navbar;
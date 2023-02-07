import Link from "next/link";
import Image from "next/image";
import {MdOutlineNavigateNext} from 'react-icons/md';
import {FcBusinessman} from 'react-icons/fc';
import {BsPlayFill} from 'react-icons/bs';
import logo1 from '../pages/asset/Mask Group.png'
import logo2 from '../pages/asset/Mask Group 2.png'
import logo3 from '../pages/asset/Mask Group 3.png'
import logo4 from '../pages/asset/Mask Group 4.png'
import image1 from "../pages/asset/image 77.png"
import icon2 from "../pages/asset/Group 3867.png"
import icon1group from "../pages/asset/service3.png"
import icon2imag from "../pages/asset/Group.png"
import bg2 from "../pages/asset/Vector 32.png"


const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:h-[584px]">
            <div className="lg:mr-[127px] mb-[114px] lg:flex flex-col justify-end">
                <h1 className="text-[56px] text-[#262524] font-bold font-[Sporting,Grotesque] leading-[73px]  tracking-[0.01]">Healthy in side <span className="text-[#8382EB]">fresh</span> out side</h1>
                <p className="text-[#262524] leading-[28px] font-[Poppins] text-justify text-[16px] font-normal] tracking-[0.01em] opacity-60 mr-[75px] mt-6">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className="flex gap-8">
                <Link href=''  className="w-[246px] h-[56px] bg-[#264373] opacity-95 hover:opacity-100 text-[#ffffff] flex justify-between items-center rounded-xl px-6 py-3 mt-[22px]" >
                    <span className="leading-[25px]">Get started</span>
                    <MdOutlineNavigateNext className="w-[32px] h-[32px] bg-[#ffffff] opacity-95 hover:opacity-100  text-[#264373] font-bold p-1 rounded-full" />
                </Link>
                <Link href=''  className="w-[176px] h-[56px] text-[#264373] bg-[#ffffff] flex justify-between items-center rounded-xl px-5 py-3 mt-[22px]" >
                <BsPlayFill className="hover:animate-[ping_2s_ease-in-out_infinite] delay-100  inline-flex w-[32px] h-[32px] bg-[#264373] text-[#ffffff] p-1 rounded-full shadow-2xl" />
                    <span className="leading-[25px]">Learn more</span>
                </Link>
                </div>
                <div className="mt-[51px] mb-[11px]">
                <h4 className="font-bold opacity-[0.6]">Brands:</h4>
                <div className="flex justify-between items-center lg:w-[462px] h-[64px] lg:gap-12">
                    <Image src={logo2} alt=""></Image>
                    <Image src={logo1} alt=""></Image>
                    <Image src={logo3} alt=""></Image>
                    <Image src={logo4} alt=""></Image>
                </div>
                </div>
                </div>
            <div className="relative w-full lg:h-[580px] h-[440px] mx-auto">
            <Image src={image1} className="absolute right-[60px] bottom-0  w-[310px] px-1 lg:px-0 lg:w-[358px] lg:h-[580px] z-10" alt=""></Image>
            {/* background imag start*/}
            <div className="absolute w-[304px] lg:w-[434px] h-[334px] lg:h-[434px] rounded-full bg-[#E6E6FF]  right-[80px]  bottom-0 "></div>
            <Image src={bg2} className="absolute w-[344px] lg:w-[364px] right-[41px]  bottom-0" alt=""></Image>
            {/* background imag end */}
                {/* members start*/} 
            <div className="absolute left-0 top-[79px] w-[187px] h-[80px] bg-[#FFFFFF] grid grid-cols-2 z-10 items-center rounded-[10px]">
            <div className="w-[35px] lg:w-[60px] h-[35px] lg:h-[60px] ml-5 rounded-full bg-gradient-to-r from-[#F8A422] to-[#FEDEAC] flex justify-center items-center">
            <Image alt="" src={icon1group} height={35} width={35} ></Image>
            </div>
            <div className="">
                <h5 className="font-bold text-[#262524] tracking-[0.01em] ">150+</h5>
                <p className="opacity-50">Members</p>
            </div>
            </div>
            {/* members end */}
            <div className="absolute right-8 lg:right-4 lg:top-[96px] z-20  w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] flex justify-center items-center">
            <Image src={icon2} className='animate-bounce' alt="" ></Image>
            </div>
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-r from-[#5478EF] to-[#D6DFFF] lg:-left-[50px] bottom-10 -left-10 lg:top-[350px] z-0 flex items-center justify-center" alt="">
            <Image src={icon2imag} className="animate-bounce  z-20" alt=""></Image>
            </div>
            
            {/* trainer start */}
            <div className="absolute -right-[50px] bottom-[43px] w-[187px] h-[157px] bg-[#FFFFFF] flex flex-col justify-center text-center z-10 items-center rounded-[10px] shadow-2xl">
            <div className="w-[50px] lg:w-[66px] h-[50px] lg:h-[66px] rounded-full bg-gradient-to-r from-[#6765F0] to-[#6765F0] flex justify-center items-center text-3xl lg:text-7xl overflow-hidden">
                <FcBusinessman />
            </div>
            <div className="">
                <h5 className="font-bold text-[#262524] font-[Poppins] loading-7 tracking-[0.01em] text-center">Zaqky Simorang</h5>
                <p className="opacity-50">Trainer</p>
            </div>
            </div>
            {/* trainer end */}
            </div>
        </div>
    );
};

export default Hero;
import Link from "next/link";
import Image from "next/image";
import {MdOutlineNavigateNext} from 'react-icons/md';
import {FcBusinessman} from 'react-icons/fc';

import image1 from "../pages/asset/image 78.png"
import icon1 from "../pages/asset/Group 3854.png"
import icon2 from "../pages/asset/Group 3867.png"
import bg2 from "../pages/asset/Vector 35.png"
import bg2icon from "../pages/asset/crucified-pose.png"

const Workout = () => {
    return (
        <div>
            <div className="lg:grid lg:grid-cols-2 mb-[124px] lg:h-[496px] flex flex-col-reverse w-full">
            
            <div className="relative h-[496px]">
            <Image src={image1} width={416} className="absolute lg:left-[112px] px-10 lg:px-0 bottom-0  z-10" alt=""></Image>
            {/* background imag start*/}
            <div className="absolute w-[220px] h-[250px] lg:w-[434px] lg:h-[434px] rounded-full bg-[#E6E6FF]  lg:-right-[22px] right-4 bottom-[70px] "></div>
            <Image src={bg2} className="absolute hidden left-[90px] bottom-0" alt=""></Image>
            {/* background imag end */}
                {/* kall start*/} 
            <div className="absolute left-0 bottom-[38px] w-[187px] h-[80px] bg-[#FFFFFF] grid grid-cols-2 z-10 items-center rounded-[10px] lg:ml-[40px] -ml-[36px]">
            
            <div className="w-[66px] h-[66px] rounded-full bg-gradient-to-r from-[#6765F0] to-[#6765F0] flex justify-center items-center text-7xl overflow-hidden ml-2">
            <Image src={bg2icon} className="absolute" alt=""></Image>
            </div>
            <div className="">
                <h5 className="font-bold text-[#262524] tracking-[0.01em] ">800 kall</h5>
                <p className="opacity-50">Burn fat</p>
            </div>
            </div>
            {/* kall end */}
            
            <Image src={icon1} className="absolute top-[142px] left-[60px] lg:left-[144px] lg:top-[32px] z-20" alt=""></Image>
            <div className="bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] w-[66px] h-[66px] rounded-full absolute lg:-right-[72px] -right-10 float-right top-[52%] lg:top-[40%] z-20 flex items-center justify-center">
            <Image src={icon2} width={20} height={50} className="" alt=""></Image>

            </div>
            </div>

            <div className="lg:ml-[112px] flex flex-col justify-end ">
                <h1 className="text-[46px] text-[#262524] font-[Sporting,Grotesque] leading-[73px]  tracking-[0.01em]">Best full body <br /> workout to lose fat</h1>
                <p className="text-[#262524] leading-[28px] font-[Poppins] text-justify text-[16px] font-normal] tracking-[0.1em] opacity-50 lg:mr-[60px] mt-6">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <div className="flex gap-8">
                <Link href=''  className="w-[246px] h-[56px] bg-[#264373] text-[#ffffff] flex justify-between items-center rounded-xl px-6 py-3 mt-[22px]" >
                    <span className="leading-[25px]">Get started</span>
                    <MdOutlineNavigateNext className="w-[32px] h-[32px] bg-[#ffffff]  text-[#264373] font-bold lg:p-1 rounded-full" />
                </Link>
                
                </div>
                </div>
        </div>
        </div>
    );
};

export default Workout;
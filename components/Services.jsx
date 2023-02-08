import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import icon1 from "../pages/asset/servic1.png"
import icon2 from "../pages/asset/service2.png"
import icon3 from "../pages/asset/service3.png"

const Services = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gradient-to-r from-[#6462F0] to-[#9190E9]  lg:p-[85px] p-[28px] mb-[120px]">
            <div className="flex gap-3 lg:gap-[30px]">
                <div className="bg-[#ABAAF1] px-2 lg:p-6 rounded-[20px] flex justify-center items-center">
                    <Image src={icon1} width='50' height='50' alt=""
                    />
                </div>
                <div>
                    <h5 className="text-xl font-bold tracking-[0.05em] text-white">Get that 11 <br /> line in 30 days</h5>
                    <Link href=''  className="w-[176px] h-[56px] text-white flex justify-between items-center rounded-xl px-5 py-3  opacity-50 hover:opacity-80 text-[16px]" >
                    <span className="leading-[28px] text-[Poppins] tracking-[0.01em]">Learn more</span>
                <BsArrowRightShort className="w-[32px] h-[32px] text-[#ffffff] p-1 rounded-full shadow-2xl" />
                </Link>
                </div>
            </div>
            <div className="flex gap-3 lg:gap-[30px]">
                <div className="bg-[#ABAAF1] px-3 lg:p-6 rounded-[20px] flex justify-center items-center">
                    <Image src={icon2} width='50' height='50' alt=""
                    />
                </div>
                <div>
                    <h5 className="text-xl font-bold tracking-[0.05em] text-white">14 Days <br />
sherd challenge</h5>
                    <Link href=''  className="w-[176px] h-[56px] text-white flex justify-between items-center rounded-xl px-5 py-3  opacity-50 hover:opacity-80 text-[16px]" >
                    <span className="leading-[28px] text-[Poppins] tracking-[0.01em]">Learn more</span>
                <BsArrowRightShort className="w-[32px] h-[32px] text-[#ffffff] p-1 rounded-full shadow-2xl" />
                </Link>
                </div>
            </div>
            <div className="flex gap-3 lg:gap-[30px]">
                <div className="bg-[#ABAAF1] px-3 lg:p-6 rounded-[20px] flex justify-center items-center">
                    <Image src={icon3} width='50' height='50' alt=""
                    />
                </div>
                <div>
                    <h5 className="text-xl font-bold tracking-[0.05em] text-white">Get flat belly <br /> in 30 days</h5>
                    <Link href=''  className="w-[176px] h-[56px] text-white flex justify-between items-center rounded-xl px-5 py-3  opacity-50 hover:opacity-80 text-[16px]" >
                    <span className="leading-[28px] text-[Poppins] tracking-[0.01em]">Learn more</span>
                <BsArrowRightShort className="w-[32px] h-[32px] text-[#ffffff] p-1 rounded-full shadow-2xl" />
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div className="w-full h-[670px] bg-white flex flex-col justify-center items-center gap-2">
            <h1 className="text-6xl font-extrabold tracking-[0.3em] text-red-700 ">404</h1>
            <p className="text-2xl text-black opacity-70">Oops, Page Not Found</p>
            <Link href='/' className="text-xl border-y-2 p-1 mt-2 border-blue-600 text-blue-500 hover:text-blue-600">Back to Home</Link>
        </div>
    );
};

export default Error;
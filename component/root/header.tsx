import { FaBell } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
export default function Header() {
    return (<div className="flex flex-row text-white items-center gap-[10%]">

        <div className='lg:h-10 2xl:h-12.5 flex flex-row items-center text-lg bg-[#1c465d] text-[#858585] font-normal p-2.5 rounded-lg flex-1'>
            <div>Tìm kiếm</div>
            <div className='ml-auto'><IoSearch /></div>
        </div>

        <div className='lg:text-[24px] 2xl:text-[30px] text-[#28a745]'><FaUnlockAlt /></div>

        <div className='lg:text-[24px] 2xl:text-[30px] flex flex-row w-fit items-center ml-auto gap-10 text-[#6c757d]'>
            <div className='lg:w-12.5 lg:h-12.5 2xl:h-15 2xl:w-15'>
                <img
                    src='/fallback.jpg'
                    className='w-full h-full rounded-full object-cover'
                    alt='avatar'
                />
            </div>
            <FaBell />

        </div>
    </div >)
}
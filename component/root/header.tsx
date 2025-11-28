import { FaBell } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
export default function Header() {
    return (<div className="flex flex-row text-white items-center h-fit gap-[10%]">

        <div className='flex flex-row items-center text-lg bg-[#1c465d] text-[#858585] font-medium p-2.5 rounded-lg flex-1'>
            <div>Tìm kiếm</div>
            <div className='ml-auto'><IoSearch /></div>
        </div>

        <div className='text-[30px] text-[#28a745]'><FaUnlockAlt /></div>

        <div className='flex flex-row w-fit items-center ml-auto gap-10 text-[30px] text-[#6c757d]'>
            <div className='w-12.5 h-12.5'>
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
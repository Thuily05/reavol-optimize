import Link from 'next/link'
import { GoHomeFill } from "react-icons/go";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { IoBookmarkSharp } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { PiFireSimpleFill } from "react-icons/pi";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaRankingStar } from "react-icons/fa6";
export default function SideBar() {
    const menu = [
        { id: 1, title: "Khám phá", path: "/", icon: <GoHomeFill /> },
        { id: 2, title: "Giới thiệu Reavol", path: '/introduce', icon: <IoExtensionPuzzleSharp /> },
        { id: 3, title: "Tuyển tập", path: '/collection', icon: <IoBookmarkSharp /> },
        { id: 4, title: "Sách miễn phí", path: '/bookfree', icon: <IoBook /> },
        { id: 5, title: "Tuyển chọn", path: '/selection', icon: <FaRankingStar /> },
        { id: 6, title: "Xu hướng", path: '/trending', icon: <PiFireSimpleFill /> },
        { id: 7, title: "Blog sách của tôi", path: '/blog', icon: <TbMessageChatbotFilled /> },
    ]
    return (
        <div className="
        sm: pl-5 sm:pr-5 sm:pt-5
        lg:pl-7.5 lg:pr-7.5 lg:pt-7.5 
        2xl:pl-10 2xl:pr-10 2xl:pt-10 
        flex flex-col w-fit text-[#808191] min-w-max" >
            <img src='pics/footer/footer_reavol.svg'
                className="lg:h-15 2xl:h-22.5 w-auto" />
            <div className='sm:border-b 2xl:border-b-2 border-dashed pb-10 pt-10 lg:pr-10 2xl:pr-15'>
                <div className='font-semibold lg:text-[11px] 2xl:text-sm pb-10 '>MENU</div>
                < div className="flex flex-col gap-5" >
                    {
                        menu.slice(0, 6).map((item) => (
                            <Link href={item.path} key={item.id} className='group'>
                                <div className='flex flex-row items-center gap-5 group '>
                                    <div className='text-white bg-[#1c465d] p-2 rounded-lg group-hover:bg-[#28a745]'>{item.icon}</div>
                                    <div className="font-semibold hover:text-white group-hover:font-bold">{item.title}</div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className='sm:border-b 2xl:border-b-2 border-dashed pb-10 pt-10 lg:pr-10 2xl:pr-15'>
                < div className='font-medium text-sm pb-10' >BLOG SÁCH</div >
                <Link href={menu[6].path} className='group'>
                    <div className='sidebarItem flex flex-row gap-5 text-[#808191]'>
                        <div className='text-white bg-[#1c465d] flex items-center justify-center p-2 rounded-lg group-hover:bg-[#28a745]'>{menu[6].icon}</div>
                        <div className="font-semibold text-ml font-sans flex items-center group-hover:text-white hover:font-bold">{menu[6].title}</div>
                    </div>
                </Link>
            </div >
        </div>
    )
}
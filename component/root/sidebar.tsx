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
        <div className="pl-10 pr-10 pt-10 flex flex-col w-fit text-[#808191] min-w-max" >
            <img src='pics/footer/footer_reavol.svg'
                className="w-auto h-auto max-w-full max-h-full" />
            <div className='border-b-2 border-dashed pr-15 pb-10 pt-10'>
                <div className='font-medium text-sm pb-10 '>MENU</div>
                < div className="flex flex-col gap-5" >
                    {
                        menu.slice(0, 6).map((item) => (
                            <Link href={item.path} key={item.id} className='group'>
                                <div className='sidebarItem flex flex-row gap-5 text-base '>
                                    <div className='text-white bg-[#1c465d] flex items-center justify-center p-2 rounded-lg group-hover:bg-[#28a745]'>{item.icon}</div>
                                    <div className="font-semibold font-sans flex items-center hover:text-white group-hover:font-bold ">{item.title}</div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className='border-b-2 border-dashed pr-15 pb-10 pt-10'>
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
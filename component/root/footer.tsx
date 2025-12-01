'use client'
import Image from 'next/image'
import logo from '@/public/pics/footer/footer_reavol.svg'
import facebook from '@/public/pics/footer/ic_facebook.svg'
import instagram from '@/public/pics/footer/ic_instagram.svg'
import tiktok from '@/public/pics/footer/tik-tok.svg'
import phonecall from '@/public/pics/footer/icon-telephone-call.svg'
import mail from '@/public/pics/footer/icon-email.svg'
import googleplay from '@/public/pics/footer/imgbin_app-google.svg'
import appstore from '@/public/pics/footer/imgbin_app-store.svg'
const logoList = [
    { id: 1, icon: facebook },
    { id: 2, icon: instagram },
    { id: 3, icon: tiktok },
    { id: 4, icon: phonecall },
    { id: 5, icon: mail }
]
export default function Footer() {
    return (
        <div className="bg-[oklch(0.3104_0.047_227.63)] text-white pl-[20%] grid grid-cols-2 p-20 ">
            <div className='flex flex-col gap-5'>
                <Image src={logo} alt="logo" />
                <h6 className='lg:text-[16px] font-medium' >DIGITAL E-COMMERCE PLATFORM</h6>
                <div className='font-bold'>Công ty Cổ Phần Reavol</div>

                <div className='lg:text-[14px] lg:leading-6'>
                    GPKD số 0109650648 do Sở KH và ĐT TP Hà Nội cấp ngày 27/05/2021<br />
                    Địa chỉ: Tầng 6, Toà văn phòng 1, Tổ hợp Sunsquare Số 21 Lê Đức Thọ,<br />
                    P. Mỹ Đình 2, Q. Nam Từ Liêm, Tp. Hà Nội<br />
                    Hotline: <a className="underline text-[oklch(0.7131_0.1632_153.79)]" href="tel:0977947961">0977947961</a> <br />
                    Mail: <a className="underline text-[oklch(0.7131_0.1632_153.79)]" href="mailto:namhoang@reavol.com">namhoang@reavol.com</a>
                </div>
                <div className="flex flex-row lg:gap-7.5">
                    {logoList.map((item) => (
                        <div className='border-white border rounded-lg p-2.5' key={item.id}>
                            <Image src={item.icon} alt="img" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-row lg:gap-10">
                    <Image src={googleplay} alt="ggplay" />
                    <Image src={appstore} alt="appstore" />
                </div>

            </div>

            <div className='grid grid-cols-2 lg:gap-5'>
                <div className="lg:text-[18px] flex flex-col lg:gap-5 font-normal">
                    <div className='text-[oklch(0.7131_0.1632_153.79)] text-[24px] font-semibold'>VỀ CHÚNG TÔI</div>
                    <div>Giới thiệu</div>
                    <div>Gia nhập đội ngũ của chúng tôi</div>
                    <div>Liên hệ</div>
                    <img src='pics/footer/logoSaleNoti.avif'
                        className='w-[70%]' />
                </div >
                <div className="lg:text-[18px] flex flex-col lg:gap-5 font-normal">
                    <div className='text-[oklch(0.7131_0.1632_153.79)] lg:text-[24px] font-semibold'>CHÍNH SÁCH</div>
                    <div>Điều khoản, Chính sách</div>
                    <div>Chính sách thanh toán</div>
                    <div>Chính sách xử lý khiếu nại</div>
                    <div>Chính sách vận chuyển và giao vận</div>
                    <div>Chính sách đổi trả và hoàn tiền</div>
                    <div>Chính sách bảo hành</div>
                    <div>Chính sách kiểm hàng</div>
                    <div>Chính sách bảo mật thông tin</div>
                    <div>Chính sách bảo vệ dữ liệu cá nhân Vinaphone</div>
                </div>
            </div>

        </div>
    );
}

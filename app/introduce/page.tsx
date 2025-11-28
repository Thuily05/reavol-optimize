'use client'
export default function Page() {
    return (
        <div className='flex flex-row gap-10 items-center'>
            <div className='m-20 flex items-center rounded-xl overflow-hidden w-150 h-150 '>
                <img src='/fallback.jpg'
                    className='object-cover' />
            </div>
            <div>
                <div className='text-white font-bold text-[40px]'>Trang giới thiệu</div>
                <div className='text-[#f2c9e4] font-bold text-[30px] pt-10'>Thu Ily homepage</div>
            </div>
        </div>
    )
}
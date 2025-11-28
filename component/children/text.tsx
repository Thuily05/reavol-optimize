export function TitlePage(text: string | undefined) {
    return (
        <div className="lg:text-[32px] text-white font-semibold">{text}</div>
    )
}

export function SmallTitlePage(text: string | undefined) {
    return (
        <div className='lg:text-[28px] text-white font-medium'>
            {text}
        </div>
    )
}
export function WatchAll(url: string | undefined) {
    return (
        <a href={url} className="lg:text-[16px] 2xl:text-[18px] text-[#28a745] font-light ml-auto">Xem tất cả</a>
    )
}
export function DescriptionText(text: string | undefined) {
    return (<div className='text-[#b7b9d2] lg:text-[13px] 2xl:text-[14px] lg:line-clamp-2 2xl:line-clamp-3'>
        {text}
    </div>)
}
export function AuthorText(text: string | undefined) {
    return (<div className='lg:text-[13px] 2xl:text-[14px] text-white font-normal'>
        {text}
    </div>)
}
export function BookTitleText(text: string | undefined) {
    return (<div className='lg:text-[16px] lg:line-clamp-1 2xl:line-clamp-2 text-white font-medium'>
        {text}
    </div>)

}
export function MinutesText() {
    return (
        <div className='lg:text-[10px] 2xl:text-[12px] lg:bottom-2 lg:right-2 2xl:bottom-4 2xl:right-4
        lg:pl-2 lg:pr-2 lg:pt-0.5 lg:pb-0.5
        2xl:pl-2.5 2xl:pr-2.5 2xl:pt-1 2xl:pb-1
         text-white font-medium absolute bg-[#242730]  opacity-50 w-fit rounded-sm'>15 phút</div>)

}
export function MinutesTextTop() {
    return (
        <div className='lg:text-[10px] 2xl:text-[12px] lg:top-2 lg:right-2 2xl:top-4 2xl:right-4
        lg:pl-2 lg:pr-2 lg:pt-0.5 lg:pb-0.5
        2xl:pl-2.5 2xl:pr-2.5 2xl:pt-1 2xl:pb-1
         text-white font-medium absolute bg-[#242730]  opacity-50 w-fit rounded-sm'>7 phút</div>)
}
export function TimeText(text: string) {
    return (<div className=' lg:text-[12px] 2xl:text-[14px] font-normal text-[white] opacity-80'>{text}</div>)
}

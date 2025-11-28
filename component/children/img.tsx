import { BlogItem } from '@/utils/interface'
//dung khi hover img (boc ngoai boi 1 the div)
export function imgScale(src: string | undefined) {
    return (
        <img src={src}
            className='object-cover h-full w-full hover:scale-125 transition-all duration-500 ease-in-out  ' />
    )
}

//dung trong trang detail
export function imgDetailPage(src: string | undefined) {
    return (
        <div className='rounded-2xl pt-20 w-full h-[80vh] overflow-hidden'>
            <img src={src}
                className='object-cover w-full rounded-t-2xl h-full' />
        </div>
    )
}

//dung trong cac trang list
export function imgRandom(item: BlogItem) {
    return (
        <div className='rounded-2xl pt-5 w-full h-[50vh] overflow-hidden' >
            <img src={item.thumbUrl}
                className='w-full object-cover rounded-t-2xl' />
        </div>
    )
}
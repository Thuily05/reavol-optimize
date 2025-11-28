import Link from 'next/link'
import { BlogItem, RelatedItem } from '@/utils/interface'
import Button from './button'
import FifteenMin from './fifteenmin';

//book o row block home
export function bookRowBlockItem(item: BlogItem) {
    const yearsAgo = new Date().getFullYear() - new Date(item.media.updatedAt).getFullYear();
    return (
        <div className='bg-[#123543] rounded-xl' key={item.id}>
            <Link href={{
                pathname: `/book/${item.slug}`,
                query: { id: item.id }
            }} >
                <div className='overflow-hidden h-50 rounded-t-xl'>
                    <img src={item.media.originUrl}
                        className='object-cover h-full w-full
                                            hover:scale-110 transition-all  ' />
                </div>
                <div className='p-5 h-60 text-justify flex flex-col gap-2.5'>
                    <div className='text-[#b7b9d2] text-[14px]'>{item.author}</div>
                    <div className='text-[18px] line-clamp-2 text-white'><b>{item.title}</b></div>
                    <div className='text-[#b7b9d2] text-[14px] line-clamp-3'>{item.subTitle}</div>
                    <div className=' text-[#808191] mt-auto text-[12px]'>53K views • {yearsAgo} years ago</div>
                </div>

            </Link>
        </div>
    )
}

//book o col block home
export function bookColBlockItem(item: BlogItem) {
    return (
        < Link
            href={{
                pathname: `/book/${item.slug}`,
                query: { id: item.id }
            }}
            className='flex flex-row gap-5'
            key={item.id}
        >
            <div className='flex-1 aspect-square rounded-2xl overflow-hidden'>
                <img src={item.media.originUrl}
                    className='object-cover h-full w-full hover:scale-125
                            transition-all duration-500 ease-in-out' />
            </div>
            <div className='text-white items-center flex flex-row w-[85%] pb-5 pr-5 pt-5  border-b border-solid border-[#1e475a]'>
                <div>
                    <div className='text-[16px]'><b>{item.title}</b></div>
                    <div className='text-[14px]'>{item.author}</div>
                </div>
                <Button />
            </div>
        </Link>
    )
}

//selection trang home
export function bookSelectionItem(item: BlogItem) {
    return (
        <div className=' rounded-xl' key={item.id}>
            <Link href={{
                pathname: `/book/${item.slug}`,
                query: { id: item.id }
            }} >
                <div className='overflow-hidden h-80 rounded-xl'>
                    <img src={item.image.originUrl}
                        className='object-cover h-full w-full
                                    hover:scale-125 transition-all duration-500 ease-in-out  ' />
                </div>
                <div className='p-5 h-fit text-justify flex flex-col gap-2.5'>
                    <div className='text-[#b7b9d2] text-[14px]'>{item.description}</div>
                    <div className='text-[18px] text-white line-clamp-1'><b>{item.name}</b></div>
                    <div className='text-[#b7b9d2] text-[14px] line-clamp-3'>{item.numArticle} chủ đề</div>

                </div>

            </Link>
        </div>
    )
}

//selection trang selection
export function bookSelectionItem1(item: BlogItem) {
    return (
        <div className=' rounded-t-xl border-b border-solid border-[#1e475a]' key={item.id}>
            <Link href={{
                pathname: `/book/${item.slug}`,
                query: { id: item.id }
            }} >
                <div className='overflow-hidden h-100 rounded-xl'>
                    <img src={item.image.originUrl}
                        className='object-cover h-full w-full
                                    hover:scale-125 transition-all duration-500 ease-in-out  ' />
                </div>
                <div className='p-5 h-fit text-justify flex flex-col gap-2.5'>
                    <div className='text-[18px] text-white'><b>{item.name}</b></div>
                    <div className='text-[#b7b9d2] text-[14px] line-clamp-1'>{item.description}</div>
                    <div className='text-white text-[14px] line-clamp-3 mt-auto'>{item.numArticle} chủ đề</div>
                </div>

            </Link>
        </div>
    )
}

//bookTrending
export function bookTrendingItem(item: BlogItem) {
    const yearsAgo = new Date().getFullYear() - new Date(item.media.updatedAt).getFullYear();
    return (
        <div className='bg-[#242730] rounded-xl' key={item.id}>
            <Link href={{
                pathname: `/book/${item.slug}`,
                query: { id: item.id }
            }} >
                <div className='overflow-hidden h-50 rounded-t-xl'>
                    <img src={item.media.originUrl}
                        className='object-cover h-full w-full
                                            hover:scale-125 transition-all  ' />
                </div>
                <div className='p-5 h-50 text-justify flex flex-col gap-2.5 justify-center'>
                    <div className='text-[18px] line-clamp-2 text-white'><b>{item.title}</b></div>
                    <div className='text-[#b7b9d2] text-[14px] line-clamp-2'>{item.subTitle}</div>
                    <div className=' text-[#808191] text-[12px]'>53K views • {yearsAgo} years ago</div>
                </div>

            </Link>
        </div>
    )
}

//blog homePage
export function bookBlogItem(item: BlogItem) {
    return (<div className=' rounded-xl' key={item.id}>
        <Link href={`/detailblog/` + item.slug} >
            <div className='overflow-hidden h-80 rounded-xl'>
                <img src={item.media.originUrl}
                    className='object-cover h-full w-full
                    hover:scale-125 transition-all duration-500 ease-in-out  ' />
            </div>
            <div className='p-5 h-fit text-justify flex flex-col gap-2.5'>
                <div className='text-[18px] text-white line-clamp-1'><b>{item.title}</b></div>
                <div className='text-[#b7b9d2] text-[14px] line-clamp-3'
                    dangerouslySetInnerHTML={{
                        __html: item.description.replace(/\n/g, '<br />')
                    }} />

            </div>

        </Link>
    </div>)
}

//anh random 50vh
export function randomImg(item: BlogItem) {
    return (
        <div className='rounded-2xl pt-5 w-full h-[50vh] overflow-hidden' >
            <img src={item.thumbUrl}
                className='w-full object-cover rounded-t-2xl' />
        </div>
    )
}

//related book
//bookTrending
export function bookRelatedItem(item: RelatedItem) {
    const yearsAgo = new Date().getFullYear() - new Date(item.media.updatedAt).getFullYear();
    return (
        <div className='bg-[#242730] rounded-xl' key={item.id}>
            <Link href={{
                pathname: `/book/${item.slug}`,
                query: { id: item.id }
            }} >
                <div className='relative overflow-hidden h-100 rounded-t-xl'>
                    <img src={item.media.originUrl}
                        className='object-cover h-full w-full
                        hover:scale-125 transition-all  ' />
                    <FifteenMin />
                </div>
                <div className='p-10 h-fit text-justify flex flex-col gap-2.5 justify-center'>
                    <div className='text-[18px] line-clamp-2 text-white'><b>{item.title}</b></div>
                    <div className='text-[#b7b9d2] text-[14px] line-clamp-2'>{item.subTitle}</div>
                    <div className=' text-[#808191] text-[12px]'>53K views • {yearsAgo} years ago</div>
                </div>

            </Link>
        </div>
    )
}
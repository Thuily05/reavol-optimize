'use client'
import Link from 'next/link'
import { BlogItem } from '@/utils/interface'
import Button from '@/component/children/button'
import { useBlogQuery } from '@/context-local/rtkData'

export default function Blog() {
    const { data, isLoading, isSuccess, isError } = useBlogQuery();
    if (isLoading) return 'loading...'
    if (isError) return 'error caught'
    if (isSuccess) {

        const list = data.data.blogs
        const listNewest = data.data.newest
        const listPopular = data.data.popular
        const listSuitable = data.data.suitable
        return (
            (
                < div className='flex flex-col gap-20' >
                    {/*BLOG SÁCH START */}
                    <div>
                        <div className='text-white text-[40px] font-semibold pb-10 pt-10'>BLOG SÁCH</div>
                        <div className='flex flex-row gap-10 h-[360px]'>
                            <Link
                                href={`/detailblog/` + list[0].slug}
                                className='overflow-hidden rounded-xl flex-1'
                                key={list[0].id}
                            >
                                <img
                                    src={list[0].media.originUrl}
                                    className='w-full object-cover 
                       transition-all duration-500 ease-in-out 
                       hover:scale-120'
                                />
                            </Link>

                            <div className='text-white text-justify w-[45%] flex flex-col'>
                                <div className='text-[24px] line-clamp-2'><b>{list[0].title}</b></div>
                                <div
                                    className='text-[16px] leading-10 font-normal'
                                    dangerouslySetInnerHTML={{
                                        __html: list[0].description.replace(/\n/g, '<br />')
                                    }}
                                />
                                <div className='text-[#33bf71] text-[18px] leading-10 font-medium'>Sự kiện</div>
                                <div className='mt-auto pb-5 text-[#808191] text-[16px]'>53K views • 2 years ago</div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-7.5 text-white'>
                        {list.slice(1).map((item: BlogItem) => (
                            <Link
                                href={`/detailblog/` + item.slug}
                                className='bg-[#242730] rounded-xl'
                                key={item.id}
                            >
                                <div className='overflow-hidden h-60 rounded-t-xl'>
                                    <img src={item.media.originUrl}
                                        className='w-full h-full object-cover
                            hover:scale-110 transition-all duration-500 ease-in-out' />
                                </div>
                                <div className='p-5 h-60 text-justify flex flex-col gap-2.5'>
                                    <div className='text-[#b7b9d2] text-[14px]'>{item.owner.name}</div>
                                    <div className='text-[18px]'><b>{item.title}</b></div>
                                    <div className='text-[#b7b9d2] text-[14px]'>{item.description}</div>
                                    <div className=' text-[#808191] mt-auto text-[12px]'>53k xem</div>
                                </div>
                            </Link>
                        ))}
                    </div >
                    {/*BLOG SÁCH END */}

                    {/*newbook trending start */}
                    <div className='grid grid-cols-2'>
                        {/*SÁCH MỚI START */}
                        <div className='flex flex-col justify-evenly h-full'>
                            <div className='text-[28px] text-white font-semibold'>Sách mới nhất</div>
                            <div className='newestBlock flex flex-col grow gap-7.5 pt-7.5'>
                                {
                                    listNewest.map((item: BlogItem) => {
                                        const yearsAgo = new Date().getFullYear() - new Date(item.media.updatedAt).getFullYear();
                                        return (
                                            < Link
                                                href={`/detailblog/` + item.slug}
                                                className='newestItem flex flex-row grow gap-5'
                                                key={item.id}
                                            >
                                                <div className='flex-1 aspect-square rounded-2xl overflow-hidden'>
                                                    <img src={item.media.originUrl} className='object-cover w-full h-full
                                            hover:scale-110 transition-all duration-500 ease-in-out' />
                                                </div>
                                                <div className='flex flex-col gap-5 w-[65%] pt-2.5 pb-2.5'>
                                                    <div className='text-[18px] font-medium'>
                                                        <span className='text-[#33bf71] '>{item.category.title}</span>
                                                        <span className='text-[#C4C4C4]'> • </span>
                                                        <span className='text-white'>{yearsAgo} years ago</span>
                                                    </div>
                                                    <div className='text-[20px] line-clamp-2 text-white w-[60%]'><b>{item.title}</b></div>
                                                    <div className='text-[14px] text-[#b7b9d2]'>{item.owner.name}</div>
                                                    <div className='text-[#808191] text-[12px] mt-auto'>53K views • {yearsAgo} years ago </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div >
                        </div>
                        {/*SÁCH MỚI END */}

                        {/*PHO BIEN START */}
                        <div className='flex flex-col justify-evenly h-full'>
                            <div className='text-[28px] text-white font-semibold'>Phổ biến</div>
                            <div className="flex flex-col grow gap-5 pt-7.5">
                                {
                                    listPopular.map((item: BlogItem) => (
                                        < Link
                                            href={`/detailblog/` + item.slug}
                                            className='popularItem flex flex-row gap-5'
                                            key={item.id}
                                        >
                                            <div className='flex-1 aspect-square rounded-2xl overflow-hidden'>
                                                <img src={item.media.originUrl}
                                                    className='object-cover h-full w-full hover:scale-110
                                        transition-all duration-500 ease-in-out' />
                                            </div>
                                            <div className='flex flex-row w-[85%] items-end pb-5 pr-5  border-b border-solid border-[#1e475a]'>
                                                <div>
                                                    <div className='text-[14px] text-[#b7b9d2]'>{item.owner.name}</div>
                                                    <div className='text-[14px] text-white line-clamp-1 w-[80%]'><b>{item.title}</b></div>
                                                </div>
                                                <Button />
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div >
                        {/*PHO BIEN END */}
                    </div >
                    {/*newbook trending end */}

                    {/*PHÙ HỢP START */}
                    <div>
                        <div className='text-[28px] text-white font-semibold'>Phù hợp</div>
                        <div className="grid grid-cols-4 gap-7.5 text-white pt-7.5">
                            {
                                listSuitable.map((item: BlogItem) => {
                                    const yearsAgo = new Date().getFullYear() - new Date(item.media.updatedAt).getFullYear();
                                    return (
                                        <Link href={`/detailblog/` + item.slug}
                                            className='bg-[#242730] rounded-xl'
                                            key={item.id} >
                                            <div className='overflow-hidden h-50 rounded-t-xl'>
                                                <img src={item.media.originUrl}
                                                    className='object-cover h-full w-full
                                            hover:scale-110 transition-all  ' />
                                            </div>
                                            <div className='p-5 h-60 text-justify flex flex-col gap-2.5'>
                                                <div className='text-[#b7b9d2] text-[14px]'>{item.owner.name}</div>
                                                <div className='text-[18px] line-clamp-2'><b>{item.title}</b></div>
                                                <div className='text-[#b7b9d2] text-[14px] line-clamp-3'
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.description.replace(/\n/g, '<br />')
                                                    }} />
                                                <div className=' text-[#808191] mt-auto text-[12px]'>53K views • {yearsAgo} years ago</div>
                                            </div>

                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/*PHÙ HỢP END */}
                </div >
            )
        )
    }
}

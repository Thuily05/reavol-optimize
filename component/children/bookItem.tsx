import Link from 'next/link'
import { BlogItem, RelatedItem } from '@/utils/interface'
import Button from './button'
import { DescriptionText, AuthorText, BookTitleText, MinutesText, MinutesTextTop, TimeText } from './text'
import { imgScale } from './img';

//book o row block home
export function bookRowBlockItem(item: BlogItem) {
    const yearsAgo = new Date().getFullYear() - new Date(item.media.updatedAt).getFullYear();
    return (
        <div className='bg-[#123543] rounded-xl' key={item.id}>
            <Link href={{
                pathname: `/book/${item.slug}`,
                query: { id: item.id }
            }} >
                <div className='lg:h-40 2xl:h-50 overflow-hidden rounded-t-xl relative'>
                    {imgScale(item.media.originUrl)}
                    <MinutesTextTop />
                </div>
                <div className='h-fit p-5 flex flex-col gap-2.5'>
                    {BookTitleText(item.title)}
                    {DescriptionText(item.subTitle)}
                    {TimeText(`53K views • ${yearsAgo} years ago`)}
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
            <div className='md:w-15 md:h-15 2xl:w-20 2xl:h-20 rounded-2xl overflow-hidden'>
                {imgScale(item.media.originUrl)}
            </div>
            <div className='items-center flex flex-row flex-1 md:pb-2.5 md:pt-2.5 2xl:pb-5 2xl:pt-5 pr-5  border-b border-solid border-[#1e475a]'>
                <div>
                    {BookTitleText(item.title)}
                    {AuthorText(item.author)}
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
                <div className='overflow-hidden sm:h-60 lg:h-80 rounded-xl'>
                    {imgScale(item.image.originUrl)}
                </div>
                <div className='md:p-2.5 2xl:p-5 h-fit text-justify flex flex-col gap-2.5'>
                    {DescriptionText(item.name)}
                    {BookTitleText(item.description)}
                    {DescriptionText(`${item.numArticle} chủ đề`)}

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
                    {imgScale(item.image.originUrl)}
                </div>
                <div className='p-5 h-fit text-justify flex flex-col gap-2.5'>
                    {BookTitleText(item.name)}
                    {DescriptionText(item.description)}
                    {DescriptionText(`${item.numArticle} chủ đề`)}

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
                    {imgScale(item.media.originUrl)}
                </div>
                <div className='p-5 h-50 text-justify flex flex-col gap-2.5 justify-center'>
                    {BookTitleText(item.title)}
                    {DescriptionText(item.subTitle)}
                    {TimeText(`53K views • ${yearsAgo} years ago`)}
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
                {imgScale(item.media.originUrl)}
            </div>
            <div className='sm:p-2.5 lg:p-5 h-fit text-justify flex flex-col gap-2.5'>
                {BookTitleText(item.title)}
                <div className='text-[#b7b9d2] text-[14px] line-clamp-3'
                    dangerouslySetInnerHTML={{
                        __html: item.description.replace(/\n/g, '<br />')
                    }} />
            </div>

        </Link>
    </div>)
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
                    {imgScale(item.media.originUrl)}
                    <MinutesText />
                </div>
                <div className='p-10 h-fit text-justify flex flex-col gap-2.5 justify-center'>
                    {BookTitleText(item.title)}
                    {DescriptionText(item.subTitle)}
                    {TimeText(`53K views • ${yearsAgo} years ago`)}
                </div>

            </Link>
        </div>
    )
}
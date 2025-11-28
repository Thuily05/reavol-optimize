import { getDetailBook, getRelatedBook } from '@/context-local/api'
import { getRandom } from '@/utils/utilFn'
import { RelatedItem, Chapter } from '@/utils/interface'
import { bookRelatedItem } from "@/component/children/bookItem";
import googleplay from '@/public/pics/footer/imgbin_app-google.svg'
import appstore from '@/public/pics/footer/imgbin_app-store.svg'

import Link from 'next/link'
import Image from 'next/image'

export default async function Book({
    params,
    searchParams
}: {
    params: { slug: string },
    searchParams: { id?: string }
}) {
    //lay slug
    const data = await params;
    const slug = data.slug;
    const search = await searchParams
    //lay id
    const id: string = search.id || "";
    //lay thong tin detail, related va chapter
    const detail1 = await getDetailBook(id)
    const detail = detail1.data
    const related1 = await getRelatedBook(id)
    const related = related1.data
    console.log(detail, related)
    //random 3 item tu related
    const listRelated = getRandom<RelatedItem>(related, 3)
    return (<div className='flex flex-row gap-10 pt-20 '>
        <div className='detailBook text-[16px] text-white bg-[#042c43] flex-1 rounded-xl border-white border overflow-hidden'>
            <img src={detail.media.originUrl}
                className='object-cover w-full' />
            <div className='text-white font-semibold flex flex-col gap-10 p-10'>
                <div className='text-[30px] font-bold'>{detail.title}</div>

                <div>
                    <div className='font-bold'>Những gì về sách</div>
                    <div className='pl-2.5'
                        dangerouslySetInnerHTML={{
                            __html: detail.aboutTheBook.replace(/\n/g, '<br/>')
                        }} />
                </div>

                <div>
                    <div className='font-bold'>Ai nên đọc sách này</div>
                    <div className='pl-2.5'
                        dangerouslySetInnerHTML={{
                            __html: detail.whoShouldRead.replace(/\n/g, '<br />')
                        }}
                    />
                </div>

                <div>
                    <div className='font-bold'>Ai viết ra cuốn sách này</div>
                    <div className='pl-2.5'
                        dangerouslySetInnerHTML={{
                            __html: detail.aboutTheAuthor.replace(/\n/g, '<br/>')
                        }} />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='font-bold'>Phụ lục</div>
                    <ul className='flex flex-col gap-2.5 pl-2.5'>
                        {detail.chapters.map((item: Chapter, index: number) => (
                            <li key={item.id}>{index + 1}. {item.title}</li>
                        ))}
                    </ul>
                </div>
                <div className='text-center text-[18px]'>Tải app để đọc bản tóm tắt đầy đủ</div>
                <div className="flex flex-row gap-10 w-full justify-center">
                    <Image src={googleplay} alt="ggplay" className='w-[20%] cursor-pointer' />
                    <Image src={appstore} alt="appstore" className='w-[20%] cursor-pointer' />
                </div>
            </div>
        </div>
        <div className="relatedBook flex flex-col gap-10 w-[35%]">
            <div className='text-white text-[20px] text-center'><b>Có thể bạn quan tâm</b></div>
            {listRelated.map((item: RelatedItem) => (
                bookRelatedItem(item)
            ))}
        </div>
    </div >)
}
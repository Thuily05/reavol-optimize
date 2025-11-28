import { API } from '@/context-local/api'

export default async function DetailBlogPage({ params }: { params: { slug: string } }) {

    //giá trị params trả về là một promise (bọc giá trị slug) nên cần xử lý await trước sau đó mới có thể lấy slug trong value của data được
    const data = await params;
    const slug = data.slug;
    const api = API.detailBlog + slug;
    const detail1 = await fetch(api)
    const detail2 = await detail1.json()
    const detail = detail2.data
    console.log(detail)
    if (!data) {
        return (
            <div>Lỗi tải trang</div>
        )
    }
    return (
        <div className='text-white flex flex-col gap-10 pt-10'>
            <div className='rounded-2xl pt-20 w-full h-[80vh] overflow-hidden'>
                <img src={detail.media.originUrl}
                    className='object-cover w-full rounded-t-2xl h-full' />
            </div>
            <div className='text-[#2fbc6d] text-[18px] font-medium'>{detail.category.title}</div>
            <div className='text-[40px] font-medium'><b>{detail.title}</b></div>
            <div
                className='text-[16px] leading-10'
                dangerouslySetInnerHTML={{
                    __html: detail.content
                }}
            /></div>
    )
}

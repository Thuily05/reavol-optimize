'use client'
import { useHomeDataQuery } from "@/context-local/rtkData"
import { BlogItem } from "@/utils/interface"
import { bookColBlockItem } from "@/component/children/bookItem"
import { TitlePage } from '@/component/children/text'
import { imgRandom } from '@/component/children/img'
import { getRandom } from '@/utils/utilFn'


export default function BookNew() {

    const { data, isError, isLoading, isSuccess } = useHomeDataQuery()
    if (isLoading) return 'loading...'
    if (isError) return 'error caught'
    if (isSuccess) {
        const list = data.data[8].newest as BlogItem[]
        const randomItem = getRandom(list, 1)
        return (
            <>
                {TitlePage('Sách mới cập nhật')}
                <div className='pt-10'>
                    {imgRandom(randomItem[0])}
                </div>
                <div className="introBlock grid grid-cols-2 gap-5 pt-10">
                    {list.map((item: BlogItem) => (
                        bookColBlockItem(item)
                    ))}
                </div>
            </>
        )
    }

}

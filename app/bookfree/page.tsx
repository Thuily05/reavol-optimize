'use client'
import { useHomeDataQuery } from "@/context-local/rtkData"
import { BlogItem } from "@/utils/interface"
import { bookColBlockItem } from "@/component/children/bookItem"
import { getRandom } from '@/utils/utilFn'
import { TitlePage } from '@/component/children/text'
import { imgRandom } from '@/component/children/img'


export default function BookFree() {

    const { data, isError, isLoading, isSuccess } = useHomeDataQuery()
    if (isLoading) return 'loading...'
    if (isError) return 'error caught'
    if (isSuccess) {
        const list = data.data[1].freeList as BlogItem[]
        const randomItem = getRandom(list, 1)
        return (
            <>
                {TitlePage('SÁCH MIỄN PHÍ')}

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

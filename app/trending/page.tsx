'use client'
import { BlogItem } from '@/utils/interface'
import { bookTrendingItem } from '@/component/children/bookItem'
import { useHomeDataQuery } from '@/context-local/rtkData'
import { TitlePage, SmallTitlePage } from '@/component/children/text'

export default function Trending() {
    const { data, isLoading, isError, isSuccess } = useHomeDataQuery()
    if (isLoading) return 'loading...'
    if (isError) return 'error caught'
    if (isSuccess) {
        const list = data.data[6].trending
        return (
            <div>
                {TitlePage('Xu hướng trong tuần')}
                {SmallTitlePage('Sách hay trong tuần')}
                <div className="grid grid-cols-4 gap-7.5 pt-10">
                    {
                        list.map((item: BlogItem) => (
                            bookTrendingItem(item)
                        ))
                    }
                </div>
            </div>
        )
    }
}
'use client'
import { BlogItem } from '@/utils/interface'
import { bookTrendingItem } from '@/component/children/bookItem'
import { useHomeDataQuery } from '@/context-local/rtkData'

export default function Trending() {
    const { data, isLoading, isError, isSuccess } = useHomeDataQuery()
    if (isLoading) return 'loading...'
    if (isError) return 'error caught'
    if (isSuccess) {
        const list = data.data[6].trending
        return (
            <div>
                <div className='text-white pt-10 font-semibold text-[28px]'>Xu hướng trong tuần</div>
                <div className='text-white font-semibold text-[40px]'>Sách hay trong tuần</div>
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
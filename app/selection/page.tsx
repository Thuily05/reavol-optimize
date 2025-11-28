'use client'
import { BlogItem } from '@/utils/interface'
import { bookSelectionItem1 } from '@/component/children/bookItem'
import { useHomeDataQuery } from '@/context-local/rtkData'

export default function Selection() {
    const { data, isLoading, isError, isSuccess } = useHomeDataQuery()

    if (isLoading) return 'loading...'
    if (isError) return 'error caught'
    if (isSuccess) {
        const list = data.data[5].selections;
        return (
            <div>
                <div className='text-white pt-10 font-semibold text-[28px]'>Tuyển chọn</div>
                <div className='text-white font-semibold text-[40px]'>Đọc sách mọi lúc mọi nơi</div>
                <div className="grid grid-cols-2 gap-7.5 pt-10">
                    {
                        list.map((item: BlogItem) => (
                            bookSelectionItem1(item)
                        ))
                    }
                </div>
            </div>
        )
    }
}

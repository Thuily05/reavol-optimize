'use client'
import { BlogItem } from '@/utils/interface'
import { bookSelectionItem1 } from '@/component/children/bookItem'
import { useHomeDataQuery } from '@/context-local/rtkData'
import { TitlePage, SmallTitlePage } from '@/component/children/text'


export default function Selection() {
    const { data, isLoading, isError, isSuccess } = useHomeDataQuery()

    if (isLoading) return 'loading...'
    if (isError) return 'error caught'
    if (isSuccess) {
        const list = data.data[5].selections;
        return (
            <div>
                {SmallTitlePage('Tuyển chọn')}
                {TitlePage('Đọc sách mọi lúc mọi nơi')}
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

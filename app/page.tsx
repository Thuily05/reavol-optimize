'use client';
import Link from 'next/link'
import { fetchBlogData, blogSelector } from '@/context-local/blog';
import { fetchHomeData, homeSelector } from '@/context-local/home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/context-local/store'
import { getRandom } from '@/utils/utilFn';
import { BlogItem } from '@/utils/interface';
import { bookColBlockItem, bookBlogItem, bookRowBlockItem, bookSelectionItem } from '@/component/children/bookItem';
import { TitlePage, SmallTitlePage, WatchAll, TimeText, MinutesText } from '@/component/children/text';
import { imgRandom, imgScale } from '@/component/children/img'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    console.log('Server re-render')
    dispatch(fetchHomeData())
    dispatch(fetchBlogData())
  }, [])
  //useSelector lấy ra state trong store, truyền state vào hàm tham số của nó
  //hàm tham số return state.book
  //const { loadingBlogData, blogData } = useSelector((state: RootState) => state.book)
  //hàm tham số returm HomeSelector(state) -> return state.home
  const { loading: loadingHomeData, data: homeData } = useSelector((state: RootState) => homeSelector(state))
  const { loading: loadingBlogData, data: blogData } = useSelector((state: RootState) => blogSelector(state))

  if (loadingBlogData || loadingHomeData) return 'loading...'
  if (!loadingBlogData && !loadingHomeData) {
    console.log(homeData)
    console.log(blogData)


    //JSX truy cập null -> throw error -> render bị chặn -> không thấy update
    const listdataBlog = blogData.data.blogs as BlogItem[];
    const listBookBlog = getRandom<BlogItem>(listdataBlog, 3) as BlogItem[];

    const bookToday = homeData.data[0].freeBook;
    const listBookForyou = getRandom(homeData.data[3].forYou, 4) as BlogItem[];
    const listBookTrending = getRandom(homeData?.data[6].trending, 4) as BlogItem[];
    const listBookFree = getRandom(homeData.data[1].freeList, 8) as BlogItem[];
    const listBookSelections = getRandom(homeData.data[5].selections, 2) as BlogItem[];
    const listBookNew = getRandom(homeData.data[8].newest, 6) as BlogItem[];
    const randomBookNew = getRandom(homeData.data[8].newest, 1) as BlogItem[];



    return (
      <div className='pt-10 flex flex-col gap-10'>

        {/*Explore and BookToday star */}
        <div className='sm:flex-col md:flex-row flex gap-5 h-[55vh]'>
          <div className='sm:w-[80%] md:w-[50%] lg:w-[60%] 2xl:w-[70%] flex flex-col gap-5'>
            {/*EXPLORE START */}
            {TitlePage('Khám phá')}
            <a
              href="detailblog/-soan-yolo125v-gui-888-e-tan-huong-7gb-datangay--data-vo-han-truy-cap-app-mytv-cho-mot-phim-va-reavol-cho-mot-sach--mt5cbinyh1wp6f7q"
              className=" h-full overflow-hidden rounded-xl">
              {imgScale('/intro.jpg')}
            </a>
            {/*EXPLORE END */}
          </div>

          <div className='flex flex-col gap-5 flex-1'>
            {/*BOOK TODAY START */}
            {TitlePage('Hôm nay')}
            <Link
              href={{
                pathname: `/book/${bookToday.slug}`,
                query: { id: bookToday.id }
              }}
              className="h-full flex-1 rounded-xl cursor-pointer overflow-hidden group relative"
            >
              <img
                src={bookToday.media.originUrl}
                className='transition-all duration-500 ease-in-out object-cover group-hover:scale-110 w-full h-full'
              />

              {/* overlay text */}
              <div className='absolute inset-0 flex flex-col p-5'>
                {TitlePage('15 phút đọc sách mỗi ngày')}
                <div className='flex flex-row mt-auto items-center gap-3'>
                  {TimeText(' 53K đọc • 1 ngày trước')}
                  <div className='lg:text-[10px] 2xl:text-[12px] 
                  lg:bottom-2 lg:right-2 2xl:bottom-4 2xl:right-4
                  lg:pl-2 lg:pr-2 lg:pt-0.5 lg:pb-0.5
                  2xl:pl-2.5 2xl:pr-2.5 2xl:pt-1 2xl:pb-1
                 text-white font-medium bg-[#242730] ml-auto opacity-50 w-fit rounded-sm'>
                    15 phút</div>
                </div>
              </div>
            </Link>
            {/*BOOK TODAY END */}
          </div>
        </div>
        {/*Explore and BookToday end */}

        {/*TUYỂN TẬP SÁCH HAY START */}
        <div>
          <div className='flex flex-row items-center'>
            {TitlePage('Tuyển tập sách hay cho bạn')}
            {WatchAll('/collection')}
          </div>
          <div className='lg:grid lg:grid-cols-4 lg:gap-5 2xl:gap-7.5 pt-5'>
            {listBookForyou.map((item) =>
              bookRowBlockItem(item))}
          </div>
        </div>
        {/*TUYỂN TẬP SÁCH HAY END */}

        {/*XU HƯỚNG START */}
        <div>
          <div className='flex flex-row items-center'>
            <div>
              {SmallTitlePage('Xu hướng')}
              {TitlePage('Sách hay trong tuần')}
            </div>
            {WatchAll('/trending')}
          </div>
          <div className='lg:grid lg:grid-cols-4 lg:gap-5 2xl:gap-7.5 pt-5'>
            {listBookTrending.map((item) =>
              bookRowBlockItem(item))}
          </div>
        </div>
        {/*XU HƯỚNG END */}

        {/*TOP SÁCH MIỄN PHÍ START */}
        <div>
          <div className='flex flex-row items-center'>
            {TitlePage('Top sách miễn phí')}
            {WatchAll('/bookfree')}
          </div>
          <div className='grid grid-cols-2 gap-5 pt-5'>
            {listBookFree.map((item) =>
              bookColBlockItem(item))}
          </div>
        </div>
        {/*TOP SÁCH MIỄN PHÍ END */}

        {/*TUYỂN CHỌN START */}
        <div>
          <div className='flex flex-row items-center'>
            <div>
              {SmallTitlePage('Tuyển chọn')}
              {TitlePage('Đọc sách mọi lúc mọi nơi')}
            </div>
            {WatchAll('/selection')}
          </div>
          <div className='grid grid-cols-2 gap-7.5 pt-5'>
            {listBookSelections.map((item) =>
              bookSelectionItem(item))}
          </div>
        </div>
        {/*TUYỂN CHỌN END */}

        {/*SÁCH MỚI CẬP NHẬT START */}
        <div>
          <div className='flex flex-row items-center'>
            <div>
              {SmallTitlePage('Sách mới cập nhật')}
              {TitlePage('Mỗi ngày một phong cách sách')}
            </div>
            {WatchAll('/booknew')}
          </div>
          {imgRandom(randomBookNew[0])}
          <div className='grid grid-cols-2 gap-5 pt-10'>
            {listBookNew.map((item) =>
              bookColBlockItem(item))}
          </div>
        </div>
        {/*SÁCH MỚI CẬP NHẬT END */}

        {/*BLOG SÁCH START */}
        <div>
          {SmallTitlePage('Blog sách')}
          {TitlePage('Nơi chia sẻ mọi kiến thức về sách')}
          <div className='grid grid-cols-3 gap-5 pt-5'>
            {listBookBlog.map((item) =>
              bookBlogItem(item))}
          </div>
        </div>
        {/*BLOG SÁCH END */}
      </div >
    )
  }

}

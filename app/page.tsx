'use client';
import { useHomeDataQuery, useBlogQuery } from '@/context-local/rtkData';
import { getRandom } from '@/utils/utilFn';
import { BlogItem } from '@/utils/interface';
import {
  BookToday,
  BookRowList,
  BookColList,
  BookSelectionList
} from '@/component/children/list';

export default function Home() {
  const { data: homeData, isError: isHomeError, isLoading: isHomeLoading, isSuccess: isHomeSuccess } = useHomeDataQuery();
  const { data: blogData, isError: isBlogError, isLoading: isBlogLoading, isSuccess: isBlogSuccess } = useBlogQuery();

  if (isHomeLoading || isBlogLoading) return 'loading...';
  if (isHomeError || isBlogError) return 'error caught'
  if (!(isHomeSuccess && isBlogSuccess)) return null;

  const listdataBlog = blogData.data.blogs as BlogItem[];
  const listBookBlog = getRandom<BlogItem>(listdataBlog, 3) as BlogItem[];

  const bookToday = homeData.data[0].freeBook;
  const listBookForyou = getRandom(homeData.data[3].forYou, 4) as BlogItem[];
  const listBookTrending = getRandom(homeData.data[6].trending, 4) as BlogItem[];
  const listBookFree = getRandom(homeData.data[1].freeList, 8) as BlogItem[];
  const listBookSelections = getRandom(homeData.data[5].selections, 2) as BlogItem[];
  const listBookNew = getRandom(homeData.data[8].newest, 6) as BlogItem[];
  const randomBookNew = getRandom(homeData.data[8].newest, 1) as BlogItem[];



  return (
    <div className="pt-10 flex flex-col gap-10">
      {/* Explore / BookToday */}
      <div className="flex flex-row gap-5 h-[55vh]">
        <div className="flex flex-col w-[70%] gap-5">
          <div className="text-[32px] text-white font-bold">Khám phá</div>
          <a href="/detailblog/some-slug" className="h-full overflow-hidden rounded-xl">
            <img src="/intro.jpg" className="object-cover w-full h-full hover:scale-110 transition-all duration-500" />
          </a>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div className="text-[32px] text-white font-bold">Hôm nay</div>
          <BookToday book={bookToday} />
        </div>
      </div>

      {/* Tuyển tập sách hay */}
      <div>
        <div className="flex flex-row items-center">
          <div className="text-[32px] text-white font-bold">Tuyển tập sách hay cho bạn</div>
          <a href="/collection" className="text-[#28a745] text-[20px] ml-auto">Xem tất cả</a>
        </div>
        <BookRowList books={listBookForyou} />
      </div>

      {/* Xu hướng */}
      <div>
        <div className="flex flex-row items-center">
          <div className="text-[32px] text-white font-bold">Xu hướng</div>
          <a href="/trending" className="text-[#28a745] text-[20px] ml-auto">Xem tất cả</a>
        </div>
        <BookRowList books={listBookTrending} />
      </div>

      {/* Top sách miễn phí */}
      <div>
        <div className="flex flex-row items-center">
          <div className="text-[32px] text-white font-bold">Top sách miễn phí</div>
          <a href="/bookfree" className="text-[#28a745] text-[20px] ml-auto">Xem tất cả</a>
        </div>
        <BookColList books={listBookFree} />
      </div>

      {/* Tuyển chọn */}
      <div>
        <div className="flex flex-row items-center">
          <div className="text-[32px] text-white font-bold">Tuyển chọn</div>
          <a href="/selection" className="text-[#28a745] text-[20px] ml-auto">Xem tất cả</a>
        </div>
        <BookSelectionList books={listBookSelections} />
      </div>

      {/* Sách mới cập nhật */}
      <div>
        <div className="flex flex-row items-center">
          <div className="text-[32px] text-white font-bold">Sách mới cập nhật</div>
          <a href="/booknew" className="text-[#28a745] text-[20px] ml-auto">Xem tất cả</a>
        </div>
        <div className="rounded-2xl pt-5 w-full h-[50vh] overflow-hidden">
          <img src={randomBookNew[0].media.originUrl} className="w-full object-cover" />
        </div>
        <BookColList books={listBookNew} />
      </div>

      {/* Blog sách */}
      <div>
        <div className="text-[32px] text-white font-bold">Blog sách</div>
        <BookRowList books={listBookBlog} />
      </div>
    </div>
  );
}

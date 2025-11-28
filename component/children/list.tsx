'use client';
import Link from 'next/link';
import { BlogItem } from '@/utils/interface';
import { bookRowBlockItem, bookColBlockItem, bookSelectionItem } from '@/component/children/bookItem';

export function BookToday({ book }: { book: BlogItem }) {
    return (
        <Link
            href={{
                pathname: `/book/${book.slug}`,
                query: { id: book.id }
            }}
            className="h-full flex-1 rounded-xl overflow-hidden group relative"
        >
            <img
                src={book.media.originUrl}
                className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
            />
        </Link>
    );
}

export function BookRowList({ books }: { books: BlogItem[] }) {
    return (
        <div className="grid grid-cols-4 gap-7.5 pt-5">
            {books.map((b) => bookRowBlockItem(b))}
        </div>
    );
}

export function BookColList({ books }: { books: BlogItem[] }) {
    return (
        <div className="grid grid-cols-2 gap-5 pt-5">
            {books.map((b) => bookColBlockItem(b))}
        </div>
    );
}

export function BookSelectionList({ books }: { books: BlogItem[] }) {
    return (
        <div className="grid grid-cols-2 gap-7.5 pt-5">
            {books.map((b) => bookSelectionItem(b))}
        </div>
    );
}

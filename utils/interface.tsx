export interface BlogItem {
    id: string | number;
    thumbUrl: string;
    slug: string;
    media: {
        originUrl: string;
        thumbUrl: string;
        updatedAt: string | Date;
    };
    owner: {
        name: string;
    };
    name: string;
    title: string;
    description: string;
    numArticle: string;
    category: {
        title: string;
    };
    author?: string;
    subTitle: string;
    image: {
        originUrl: string;
    }
}
export interface Chapter {
    id: number | string;
    title: string
}
export interface BookItem {
    author: string;
    aboutTheAuthor: string;
    aboutThebook: string;
    id: number | string;
    subTitle: string;
    title: string;
    whoShouldRead: string;
    totalChapter: number | string;
    media: {
        createdAt: string | Date;
        updatedAt: string | Date;
        originUrl: string;
    }
    chapters: Chapter[]

}
export interface RelatedItem {
    id: number | string;
    title: string;
    subTitle: string;
    author: string;
    slug: string;
    media: {
        createdAt: Date | string;
        updatedAt: Date | string;
        originUrl: string;
    }
}
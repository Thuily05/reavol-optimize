//for server render
export const API = {
    detailBlog: "https://api.reavol.vn/api/v1/blog/detail/",
    detailBook: 'https://api.reavol.vn/api/v1/article/get-detail-article?articleId=',
    relatedBook: 'https://api.reavol.vn/api/v1/article/get-related-article?articleId='
}
export async function getDetailBook(articleId: number | string) {
    let api = API.detailBook + articleId
    try {
        const res = await fetch(api, {
            cache: 'no-store'
        });
        if (!res.ok) {
            console.error("Failed API", res.status)
            return null;
        }
        return res.json()
    }
    catch (err) {
        console.error("Fetch error", err)
    }

}
export async function getRelatedBook(articleId: number | string) {
    let api = API.relatedBook + articleId
    try {
        const data = await fetch(api, {
            cache: 'no-cache'
        })
        if (!data.ok) {
            console.error("Failed API", data.status)
        }
        return data.json()
    }
    catch (err) {
        console.error("Fetch error", err)
    }

}
//for client render api
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//trả về file json
export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.reavol.vn/api/v1/`
    }),
    endpoints: (build) => ({
        homeData: build.query(
            {
                query() {
                    return {
                        url: 'home/get-home-data',
                        params: {
                            page: 0,
                            unLock: 'false'
                        },

                    }
                }
            }
        ),
        blog: build.query({
            query() {
                return {
                    url: 'blog/get-blog-for-web'
                }
            }
        }),
    })
})
export const {
    useHomeDataQuery,
    useBlogQuery } = api
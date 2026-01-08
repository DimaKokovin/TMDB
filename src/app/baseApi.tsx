// import {handleError} from "@/common/utils"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "filmsApi",
        baseQuery:  fetchBaseQuery({
            baseUrl: 'https://api.themoviedb.org/3/',

        }),

    endpoints: () => ({}),

})

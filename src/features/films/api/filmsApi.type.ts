import {z} from "zod";


export const PopularFilmSchema = z.object({
    adult:z.boolean(),

    // backdrop_path: z.string().nullable(),
    backdrop_path: z.string(),

    genre_ids:z.array(z.number().int()),
    id:z.number().int(),
    original_language:z.string(),
    original_title:z.string(),
    overview:z.string(),
    popularity:z.number(),

    poster_path: z.string(),
    // poster_path: z.string().nullable(),

    release_date:z.string(),
    title:z.string(),
    video:z.boolean(),
    vote_average:z.number(),
    vote_count:z.number().int(),
})

export type PopularFilm = z.infer<typeof PopularFilmSchema>





export const MoreFilmSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    belongs_to_collection: z
        .object({
            id: z.number().int(),
            name: z.string(),
            poster_path: z.string().nullable(),
            backdrop_path: z.string().nullable(),
        })
        .nullable(),
    budget: z.number().int(),
    genres: z.array(
        z.object({
            id: z.number().int(),
            name: z.string(),
        })
    ),
    homepage: z.string().nullable(),
    imdb_id: z.string().nullable(),
    id: z.number().int(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies: z.array(
        z.object({
            id: z.number().int(),
            logo_path: z.string().nullable(),
            name: z.string(),
            origin_country: z.string(),
        })
    ),
    production_countries: z.array(
        z.object({
            iso_3166_1: z.string(),
            name: z.string(),
        })
    ),
    release_date: z.string(),
    revenue: z.number().int(),
    runtime: z.number().int(),
    spoken_languages: z.array(
        z.object({
            english_name: z.string(),
            iso_639_1: z.string(),
            name: z.string(),
        })
    ),
    status: z.string(),
    tagline: z.string().nullable(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number().int(),
});


export type FilmWithMoreDate = z.infer<typeof MoreFilmSchema>
//решил что проще создать новый чем испльзовать утилитарные типы,gpt доплонил не достающие типиы


export const PopularFilmsResponseSchema = z.object({
    page: z.number().int(),
    results: z.array(PopularFilmSchema),
    total_pages: z.number().int(),
    total_results: z.number().int(),
});
export type PopularFilmsResponse = z.infer<
    typeof PopularFilmsResponseSchema
>;







const PersonBaseSchema = z.object({
    adult: z.boolean(),
    gender: z.number().int(),
    id: z.number().int(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    credit_id: z.string(),
});
export const CastSchema = PersonBaseSchema.extend({
    cast_id: z.number().int(),
    character: z.string(),
    order: z.number().int(),
});
export const CrewSchema = PersonBaseSchema.extend({
    department: z.string(),
    job: z.string(),
});
export const MovieCreditsSchema = z.object({
    id: z.number().int(),
    cast: z.array(CastSchema),
    crew: z.array(CrewSchema),
});
export type CastMember = z.infer<typeof CastSchema>;
export type CrewMember = z.infer<typeof CrewSchema>;
export type MovieCredits = z.infer<typeof MovieCreditsSchema>;

//писал чат
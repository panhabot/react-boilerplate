export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const FETCH_POST = 'FETCH_POST'
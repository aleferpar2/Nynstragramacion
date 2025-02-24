'use server'

import { sql } from '@vercel/postgres'
import PostList from '@/app/ui/post-list'
import SearchInput from '@/app/ui/search-input'

async function searchPosts(query) {
    if (!query || query.length < 2) return []

    const searchResults = await sql`
        SELECT 
            sa_posts.post_id, 
            content, 
            url, 
            sa_posts.user_id, 
            username, 
            picture,
            count(sa_likes.user_id) as num_likes 
        FROM 
            sa_posts 
        JOIN
            sa_users ON sa_posts.user_id = sa_users.user_id
        LEFT JOIN 
            sa_likes ON sa_posts.post_id = sa_likes.post_id
        WHERE 
            LOWER(content) LIKE ${`%${query.toLowerCase()}%`} OR
            LOWER(username) LIKE ${`%${query.toLowerCase()}%`}
        GROUP BY 
            sa_posts.post_id, 
            content, 
            url, 
            sa_posts.user_id, 
            username,
            picture
        ORDER BY
            sa_posts.post_id DESC
    `
    return searchResults.rows
}

export default async function SearchPage({ searchParams }) {
    const query = searchParams.q || ''
    const searchResults = await searchPosts(query)

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
            <SearchInput />
            {searchResults.length > 0 && (
                <PostList posts={searchResults} likes={[]} />
            )}
            {query.length >= 2 && searchResults.length === 0 && (
                <p className="text-gray-500">No results found</p>
            )}
        </div>
    )
}

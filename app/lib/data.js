import { sql } from "@vercel/postgres";


// TODO: 0 likes
export async function getPosts(){
    return (await sql
`
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
GROUP BY 
    sa_posts.post_id, 
    content, 
    url, 
    sa_posts.user_id, 
    username,
    picture

`).rows;
}

// TODO: 0 likes
export async function getPost(post_id){
    return (await sql`
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
    sa_posts.post_id=${post_id}
GROUP BY 
    sa_posts.post_id, 
    content, 
    url, 
    sa_posts.user_id, 
    username,
    picture 
   `).rows;
}

export async function getComments(post_id) {
    return (await sql`
      SELECT 
        sa_comments.comment_id,
        sa_comments.content, 
        sa_users.username, 
        sa_users.picture,
        sa_comments.created_at,
        CASE WHEN sa_comment_likes.comment_id IS NOT NULL THEN true ELSE false END as isLiked,
        COUNT(DISTINCT cl.user_id) as num_likes
      FROM 
        sa_comments
        JOIN sa_users ON sa_comments.user_id = sa_users.user_id
        LEFT JOIN sa_comment_likes ON sa_comments.comment_id = sa_comment_likes.comment_id
        LEFT JOIN sa_comment_likes cl ON sa_comments.comment_id = cl.comment_id
      WHERE sa_comments.post_id = ${post_id}
      GROUP BY 
        sa_comments.comment_id,
        sa_comments.content,
        sa_users.username,
        sa_users.picture,
        sa_comments.created_at,
        sa_comment_likes.comment_id
      ORDER BY sa_comments.created_at
    `).rows;
  }

export async function getLikes(user_id){
    return (await sql`
        SELECT post_id 
        FROM sa_likes 
        WHERE user_id = ${user_id}
    `).rows;
}

export async function getLike(user_id, post_id){
    return (await sql`
        SELECT post_id 
        FROM sa_likes
        WHERE user_id = ${user_id} AND post_id=${post_id}
    `).rows;
}

export async function getCommentLike(user_id, comment_id) {
    return (await sql`
        SELECT comment_id 
        FROM sa_comment_likes
        WHERE user_id = ${user_id} AND comment_id = ${comment_id}
    `).rows;
}

export async function getCommentLikes(user_id) {
    return (await sql`
        SELECT comment_id 
        FROM sa_comment_likes 
        WHERE user_id = ${user_id}
    `).rows;
}

export async function getPostsBorrar() {
    return (await sql`
      SELECT 
        sa_posts.post_id, 
        sa_posts.content, 
        sa_posts.user_id, 
        sa_users.username, 
        sa_users.picture,
        COUNT(sa_likes.user_id) AS num_likes
      FROM 
        sa_posts 
        JOIN sa_users USING(user_id) 
        LEFT JOIN sa_comments ON sa_comments.post_id = sa_posts.post_id
      GROUP BY 
        sa_posts.post_id, 
        sa_posts.content, 
        sa_posts.user_id, 
        sa_users.username, 
        sa_users.picture
    `).rows;
  }

export async function searchPosts(query) {
    if (!query) return [];
    
    return (await sql`
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
    `).rows;
}
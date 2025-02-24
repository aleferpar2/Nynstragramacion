import { searchPosts } from '@/app/lib/data';

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams;
    const query = searchParams.get('q');
    const searchResults = await searchPosts(query);

    return new Response(JSON.stringify(searchResults.rows), {
        headers: { 'Content-Type': 'application/json' },
    });
}
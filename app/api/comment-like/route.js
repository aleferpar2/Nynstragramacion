import { insertCommentLike, removeCommentLike } from "@/app/lib/actions";

export async function POST(request) {
    const { comment_id, user_id, action } = await request.json();

    try {
        if (action === 'like') {
            await insertCommentLike(comment_id, user_id);
        } else if (action === 'unlike') {
            await removeCommentLike(comment_id, user_id);
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error('Error handling comment like:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}
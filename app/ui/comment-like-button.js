'use client';

import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function CommentLikeButton({ comment_id, user_id, isLikedInitial, numLikes = 0 }) {
    const [isLiked, setIsLiked] = useState(isLikedInitial);
    const [likeCount, setLikeCount] = useState(numLikes);

    async function handleLike() {
        const response = await fetch('/api/comment-like', {
            method: 'POST',
            body: JSON.stringify({
                comment_id,
                user_id,
                action: isLiked ? 'unlike' : 'like'
            })
        });

        if (response.ok) {
            setIsLiked(!isLiked);
            setLikeCount(prevCount => isLiked ? prevCount - 1 : prevCount + 1);
        }
    }

    return (
        <div className="flex items-center gap-2">
            <HeartIcon
                onClick={handleLike}
                className={`w-5 h-5 ${isLiked ? 'text-rose-500 dark:text-rose-400' : 'text-gray-600 dark:text-gray-400'} hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer`}
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{likeCount}</span>
        </div>
    );
}
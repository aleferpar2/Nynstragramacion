'use client';

import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { insertCommentLike, removeCommentLike } from "../lib/actions";

export default function CommentLikeButton({ comment_id, user_id, isLikedInitial, numLikesInitial = 0 }) {
    const [isLiked, setIsLiked] = useState(isLikedInitial);
    const [numLikes, setNumLikes] = useState(Number(numLikesInitial) || 0);
    const [isLoading, setIsLoading] = useState(false);

    async function handleLike() {
        if (isLoading) return;
        
        setIsLoading(true);
        try {
            if (isLiked) {
                await removeCommentLike(comment_id, user_id);
                setIsLiked(false);
                setNumLikes(prev => Math.max(0, prev - 1));
            } else {
                await insertCommentLike(comment_id, user_id);
                setIsLiked(true);
                setNumLikes(prev => prev + 1);
            }
        } catch (error) {
            console.error('Error toggling comment like:', error);
            alert('Error al actualizar el like del comentario');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">{numLikes}</span>
            <HeartIcon
                onClick={handleLike}
                className={`w-5 h-5 ${isLiked ? 'text-rose-500 dark:text-rose-400' : 'text-gray-600 dark:text-gray-400'} hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer ${isLoading ? 'opacity-50' : ''}`}
            />
        </div>
    );
}
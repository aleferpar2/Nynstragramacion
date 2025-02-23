'use client'

import { HeartIcon } from "@heroicons/react/24/solid"
import { insertLike, removeLike } from "../lib/actions";
import clsx from "clsx";
import { useState } from "react";

export default ({post_id, user_id, isLikedInitial}) => {

    let [isLiked, setIsLiked] = useState(isLikedInitial);

    // TODO: quitar de aqui
    async function toogleLike() {
        try {
            if (isLiked) {
                await removeLike(post_id, user_id);
                setIsLiked(false);
            } else {
                await insertLike(post_id, user_id);
                setIsLiked(true);
            }
            // Revalidate the page to update the like count
            window.location.reload();
        } catch (error) {
            console.error('Error toggling post like:', error);
            alert('Error al actualizar el like del post');
        }
    }

    return (
        <HeartIcon onClick={toogleLike} 
        className={clsx("w-8",{"text-red-600":isLiked})} />

        

    )
}
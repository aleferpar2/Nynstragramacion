import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import LikeButton from "./like-button"
import { addComment } from "../lib/actions"

export default ({
    user_id, 
    post,
    isLikedInitial,
    comments
}) => {
    return (
        <div className="flex flex-col w-full max-w-sm bg-gradient-to-br from-white to-rose-50/30 dark:from-neutral-900 dark:to-rose-900/5 rounded-xl shadow-lg overflow-hidden border border-rose-100/50 dark:border-rose-900/20 backdrop-blur-sm transition-all duration-300 hover:shadow-rose-100 dark:hover:shadow-rose-900/20">
            <div className="flex items-center p-4 gap-3">
                <Image src={post.picture} 
                    alt="Foto de perfil"
                    className="rounded-full ring-2 ring-rose-200 dark:ring-rose-800 shadow-md"
                    width={40}
                    height={40}
                />
                <div className="flex flex-col">
                    <span className="font-semibold text-sm bg-gradient-to-r from-rose-600 to-purple-600 dark:from-rose-400 dark:to-purple-400 bg-clip-text text-transparent">{post.username}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">1 día</span>
                </div>
            </div>

            <div className="relative aspect-square w-full bg-gradient-to-br from-gray-50 to-rose-50 dark:from-neutral-900 dark:to-rose-900/10 overflow-hidden">
                <Image src={post.url} 
                    alt="Imagen del post"
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4 space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <LikeButton post_id={post.post_id} user_id={user_id} isLikedInitial={isLikedInitial} />
                            <ChatBubbleLeftIcon className="w-7 h-7 text-gray-600 dark:text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{post.num_likes} Me gusta</span>
                    </div>
                    <p className="text-sm">
                        <span className="font-semibold mr-2 text-gray-800 dark:text-gray-200">{post.username}</span>
                        <span className="text-gray-600 dark:text-gray-400">{post.content}</span>
                    </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-gray-200 dark:border-neutral-800">
                    {comments.map((comment) => (
                        <p key={comment.comment_id} className="text-sm">
                            <span className="font-semibold mr-2 text-gray-800 dark:text-gray-200">{comment.username || 'Usuario'}</span>
                            <span className="text-gray-600 dark:text-gray-400">{comment.content}</span>
                        </p>
                    ))}
                </div>

                <form action={addComment} className="pt-3 border-t border-gray-200 dark:border-neutral-800">
                    <input type="hidden" name="post_id" value={post.post_id} />
                    <input 
                        name="content" 
                        className="w-full p-2 text-sm bg-transparent border-none outline-none placeholder-gray-500 dark:placeholder-gray-400" 
                        type="text" 
                        placeholder="Añade un comentario..." 
                    />
                </form>
            </div>
        </div>
    )
}
'use client'

import { useState } from 'react'
import PostList from '@/app/ui/post-list'
import { searchPosts } from '@/app/lib/data'

export default function SearchComponent({ user_id }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async (e) => {
        const term = e.target.value
        setSearchTerm(term)

        if (term.length >= 2) {
            const results = await searchPosts(term)
            setSearchResults(results)
        } else {
            setSearchResults([])
        }
    }

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
            <div className="w-full max-w-sm p-4 bg-gradient-to-br from-white to-rose-50/30 dark:from-neutral-900 dark:to-rose-900/5 rounded-xl shadow-lg border border-rose-100/50 dark:border-rose-900/20 backdrop-blur-sm transition-all duration-300 hover:shadow-rose-100 dark:hover:shadow-rose-900/20">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search posts by content or username..."
                    className="w-full p-4 text-lg border-2 border-rose-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-200 ease-in-out placeholder-gray-400 hover:border-rose-300 dark:border-rose-800 dark:bg-neutral-900 dark:text-white dark:placeholder-gray-500"
                />
            </div>
            {searchResults.length > 0 && (
                <div className="w-full mt-4">
                    <PostList user_id={user_id} posts={searchResults} likes={[]} />
                </div>
            )}
            {searchTerm.length >= 2 && searchResults.length === 0 && (
                <p className="text-gray-500 mt-4">No results found</p>
            )}
        </div>
    )
}
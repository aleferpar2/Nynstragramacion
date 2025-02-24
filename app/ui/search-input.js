'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchInput() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentQuery = searchParams.get('q') || ''

    const handleSearch = (e) => {
        const term = e.target.value
        if (term.length >= 2) {
            router.push(`/search?q=${encodeURIComponent(term)}`)
        } else if (term.length === 0) {
            router.push('/search')
        }
    }

    return (
        <input
            type="text"
            defaultValue={currentQuery}
            onChange={handleSearch}
            placeholder="Search posts by content or username..."
            className="w-full p-2 mb-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    )
}
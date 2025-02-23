'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default ({ ruta, texto, icon: Icon }) => {
    const pathname = usePathname()
    const isActive = pathname === ruta

    return (
        <Link 
            href={ruta} 
            className={clsx(
                'flex items-center gap-2 text-base transition-all duration-200 rounded-lg p-3',
                {
                    'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 font-semibold': isActive,
                    'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white': !isActive
                }
            )}
        >
            <Icon className={clsx('w-6 h-6', {
                'text-rose-500': isActive,
                'transition-colors duration-200': true
            })} />
            <span className="hidden sm:inline">{texto}</span>
        </Link>
    )
}
'use client'

import NavLink from '@/app/ui/nav-link'
import { ArrowRightStartOnRectangleIcon, ArrowsRightLeftIcon, HomeIcon, MagnifyingGlassIcon, PlusCircleIcon, UserIcon } 
from '@heroicons/react/24/solid'

export default () => {
    return (
        <nav className="fixed z-50 top-0 sm:top-auto sm:left-0 flex w-full sm:w-64 sm:flex-col h-auto sm:h-dvh p-4 sm:p-8 bg-gradient-to-r sm:bg-gradient-to-b from-rose-50 to-purple-50 dark:from-rose-950/30 dark:to-purple-950/30 border-b sm:border-b-0 sm:border-r border-rose-100 dark:border-rose-900/20 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out">
            <h1 className='hidden sm:block text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent mb-8 opacity-0 sm:opacity-100 transform sm:transform-none -translate-x-4 sm:translate-x-0 transition-all duration-300 ease-in-out'>Nystagram</h1>
            
            <div className="flex sm:flex-col justify-around sm:justify-start w-full sm:w-auto gap-3 sm:gap-6 transition-all duration-300 ease-in-out">
                <NavLink ruta="/" texto="Inicio" icon={HomeIcon} />
                <NavLink ruta="/search" texto="Buscar" icon={MagnifyingGlassIcon} />
                <NavLink ruta="/create" texto="Crear" icon={PlusCircleIcon} />
                <NavLink ruta="/profile" texto="Perfil" icon={UserIcon} />
            </div>

            <a 
                href="/auth/logout" 
                className='hidden sm:flex items-center gap-3 mt-auto text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 ease-in-out opacity-0 sm:opacity-100 transform sm:transform-none -translate-x-4 sm:translate-x-0'
            >
                <ArrowRightStartOnRectangleIcon className='w-6 h-6 transition-transform duration-300 ease-in-out hover:translate-x-1'/>
                <span className="hidden sm:inline text-lg">Cerrar sesión</span>
            </a>
        </nav>
    )
}
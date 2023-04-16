import { Search, Library } from 'lucide-react'
import { HiHome } from 'react-icons/hi';
import { AiFillFolderAdd, AiFillHeart  } from 'react-icons/ai'

export function Sidebar () {
    return (
        <aside className="w-60 bg-zinc-950 p-6">
        <div className='fixed h-full'>
        <div className='flex items-center gap-2 '>
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <nav className='space-y-5 mt-8'>
          <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-100'>
            <HiHome size={26} />
            Home
          </a>
          <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-zinc-200'>
            <Search />
            Search
          </a>
          <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-zinc-200'>
            <Library />
            Your library
          </a>

          <div className='space-y-5'>
          <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-400  mt-9 hover:text-zinc-200'>
            <AiFillFolderAdd className='text-zinc-400' size={26} />
            Create playlist
          </a>
          <a href="" className='flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-zinc-200'>
            <div className='bg-indigo-800 w-6 h-6 flex items-center  justify-center'>
            <AiFillHeart />
            </div>
            Music you like
          </a>
          </div>
        </nav>

        <div className='mt-5 pt-5 border-t border-zinc-800 flex flex-col gap-3'>
          <a href="" className='text-base text-zinc-400 hover:text-zinc-200'>Nerd hit</a>
          <a href="" className='text-base text-zinc-400 hover:text-zinc-200'>Poesia acústica</a>
          <a href="" className='text-base text-zinc-400 hover:text-zinc-200'>RAP all</a>
          <a href="" className='text-base text-zinc-400 hover:text-zinc-200'>To study</a>
          <a href="" className='text-base text-zinc-400 hover:text-zinc-200'>wm list</a>
          <a href="" className='text-base text-zinc-400 hover:text-zinc-200'>Gospel</a>
        </div>
        </div>
      </aside> 
    )
}
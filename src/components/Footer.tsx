import Image from 'next/image';
import { Shuffle, SkipBack, SkipForward, Repeat, Laptop2, Mic2, List, Volume, Maximize } from 'lucide-react'
import { BsFillPlayFill } from 'react-icons/bs'

export function Footer () {
    return (
        <footer className="fixed bottom-0 w-full z-50 bg-zinc-900 border-t border-zinc-800 px-6 py-3 flex items-center  justify-between">
        <div className='flex items-center gap-2'>
        <Image src="/icarus.jpg" width={55} height={55} alt="Imagem album sugestão Spotify" />
        <div className='flex flex-col'>
          <strong className='font-semibold'>Música de amor nunca mais</strong>
          <span className='text-xs text-zinc-400'>BK, Luccas carlos, Nansy Silvvz, Gigantes</span>
        </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-5'>
            <Shuffle size={19} className='text-zinc-200'/>
            <SkipBack size={19} className='text-zinc-200'/>

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
              <BsFillPlayFill size={24} />
            </button>

            <SkipForward size={19} className='text-zinc-200'/>
            <Repeat size={19} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-400'>1:17</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-green-500 w-48 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-400'>3:22</span>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Mic2 size={18} />
          <List size={18} />
          <Laptop2 size={18}/>
          <div className='flex items-center gap-2'>
            <Volume size={18}/> 
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-green-400 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize size={18}/>
        </div>
      </footer>
    )
}
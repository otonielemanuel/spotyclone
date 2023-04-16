import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BsFillPlayFill } from 'react-icons/bs'
export default function Main() {
  return (
    <main className="flex-1 p-6 mb-32">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/70 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/30 p-1'>
              <ChevronRight className='text-zinc-500' />
            </button>
          </div>  

          <h1 className='font-bold text-3xl mt-9'>Good Morning</h1>

          <div className='grid grid-cols-3 gap-3 mt-4'>
            <a href='' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/icarus.jpg" width={80} height={80} alt="Imagem album sugestão Spotify" />
              <h5 className='font-semibold'>ICARUS</h5>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-5 invisible group-hover:visible transition-all'>
                <BsFillPlayFill size={30} />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/eluanda.jpg" width={80} height={80} alt="Imagem album sugestão Spotify" />
              <h5 className='font-semibold'>É Luanda</h5>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-5 invisible group-hover:visible transition-all'>
                <BsFillPlayFill size={30} />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/raridade.jpg" width={80} height={80} alt="Imagem album sugestão Spotify" />
              <h5 className='font-semibold'>Raridade</h5>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-5 invisible group-hover:visible transition-all'>
                <BsFillPlayFill size={30} />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/wfm.jpg" width={80} height={80} alt="Imagem album sugestão Spotify" />
              <h5 className='font-semibold'>RealestK</h5>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-5 invisible group-hover:visible transition-all'>
                <BsFillPlayFill size={30} />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/terror.jpg" width={80} height={80} alt="Imagem album sugestão Spotify" />
              <h5 className='font-semibold'>Enygma Rapper</h5>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-5 invisible group-hover:visible transition-all'>
                <BsFillPlayFill size={30} />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/acusticocancun.png" width={80} height={80} alt="Imagem album sugestão Spotify" />
              <h5 className='font-semibold'>Acústico Cancun</h5>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-5 invisible group-hover:visible transition-all'>
                <BsFillPlayFill size={30} />
              </button>
            </a>
          </div>

          <h2 className='font-bold text-2xl mt-8'>Mode for otonielemanuel</h2>
          <div className='grid grid-cols-5 gap-4 mt-5'>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/icarus.jpg" className=' rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 1</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/7mz.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 2</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/pinelapple.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 3</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/vish.jpg" className='w-full rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 4</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/nagi.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Discover Weekly</strong>
              <div className="text-sm font-medium text-zinc-400">Your weekly mixtape of fresh music. Enjoi new ...</div>
            </a>
          </div>

          <h2 className='font-bold text-2xl mt-8'>Your most listened to mixes</h2>
          <div className='grid grid-cols-5 gap-4 mt-5'>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/okenio.jpg" className='w-full rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 1</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/7mz2.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 2</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/freire.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 3</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/michael.jpg" className='w-full rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 4</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/chill.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Discover Weekly</strong>
              <div className="text-sm font-medium text-zinc-400">Your weekly mixtape of fresh music. Enjoi new ...</div>
            </a>
          </div>

          
          <h2 className='font-bold text-2xl mt-8'>Recently played</h2>
          <div className='grid grid-cols-5 gap-4 mt-5'>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/icarus.jpg" className='w-full rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 1</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/icarus.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 2</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/icarus.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 3</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/icarus.jpg" className='w-full rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Daily Mix 4</strong>
              <div className="text-sm font-medium text-zinc-400">BK, Vitão, L7NNON, Xamã in Poesia acústica 14</div>
            </a>
            <a className="bg-black/10 p-3 rounded-md group flex flex-col gap-2 transition-colors hover:bg-white/10">
              <Image src="/nagi.jpg" className='w-full object-cover rounded-md' width={300} height={300} alt="Imagem album sugestão Spotify" />
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-[7.4rem] mr-5 mt-[-4rem] invisible group-hover:visible '>
                <BsFillPlayFill size={30} />
              </button>
              <strong className='font-semibold mt-3'>Discover Weekly</strong>
              <div className="text-sm font-medium text-zinc-400">Your weekly mixtape of fresh music. Enjoi new ...</div>
            </a>
          </div>

        </main>
  )
}

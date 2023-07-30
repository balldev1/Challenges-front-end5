import Image from 'next/image'
import equilibrium from '../public/equilibrium.jpg'
import avatar from '../public/avatar.png'
import { FaEthereum } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';


export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-sky-950 w-[320px] h-[540px] rounded-2xl'>
        <div className='mx-5 my-5 flex flex-col gap-4  '>
          <div className='flex items-center justify-center'>
            <div className='absolute flex items-center justify-center  opacity-0 hover:opacity-100'>
              <div className='bg-cyan-400 opacity-50  w-[280px] h-[280px] 
              rounded-2xl flex items-center justify-center'></div>
              <AiFillEye size={40} className='absolute text-white opacity-100 w-[50px]' />
            </div>
            <Image src={equilibrium} alt='icon' className='rounded-2xl' />
          </div>
          <h1 className='text-white text-xl hover:text-cyan-300 cursor-pointer'>Equilibrium #3429 </h1>
          <h1 className='text-blue-200 text-md'>Our Equilibrium collection promotes
            <br />balance and calm.
          </h1>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-1 items-center text-cyan-300 '>
              <FaEthereum />
              <h1 className='text-md'>
                0.041 ETH
              </h1>
            </div>
            <div className='flex flex-row gap-1 items-center text-slate-400'>
              <AiFillClockCircle />
              <h1 className='text-md text-blue-200'>
                3 days left
              </h1>
            </div>
          </div>
          <hr className='' />
          <div className='flex flex-row items-center'>
            <Image src={avatar} alt='icon' className='w-[40px] rounded-full border-2' />
            <h1 className='ml-3 text-blue-200 text-md'>Creation of</h1>
            <h1 className='ml-1 text-white text-md hover:text-cyan-300 cursor-pointer'>Jules Wyvern</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

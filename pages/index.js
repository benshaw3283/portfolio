import Image from 'next/image'

export default function Home() {
  return (
   <div>
    <title>Ben Shaw</title>
    <div className='min-h-screen bg-stone-950 '>
      <div className='flex flex-col '>
        <div className='order-1 flex justify-center place-items-center mt-20'>
          <h1 className='text-7xl text-violet-500 font-bold pb-4'>Ben Shaw</h1>
        </div>
        <div className='order-2 place-self-center flex'>
        <h2 className='text-2xl font-semibold'>Front-End Web Dev</h2>
        </div>
        <div className='order-3'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        <div className='order-4 place-self-center flex'>
      <h3 className='text-2xl border-x-2 border-white p-2 rounded-md text-violet-500 font-semibold'>Projects</h3>
        </div>
      </div>
    </div>
   </div>
  )
}

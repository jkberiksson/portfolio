import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center bg-black'>
      <nav className=' fixed flex gap-4 bg-white/10 p-4 backdrop-blur-md rounded-lg'>
        <ul className='flex gap-4'>
          <li className='list-none text-white'>Home</li>
          <li className='list-none text-white'>About</li>
          <li className='list-none text-white'>Contact</li>
        </ul>
      </nav>
      <h1 className='text-white mt-28'>Welcome to my portfolio!</h1>
      <div className='avatar-container pointer-events-none select-none bg-slate-500 h-[300px] w-[300px] flex justify-center items-center rounded-full'>
        <Image
          src={
            'https://sdk.bitmoji.com/render/panel/9f483c99-decd-40ec-ab71-abad24669942-3faefa3b-12d6-452b-b34d-d6442cf662f6-v1.png?transparent=1&palette=1'
          }
          alt='Bitmoji Avatar'
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}

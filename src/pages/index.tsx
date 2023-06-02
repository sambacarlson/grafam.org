import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <title>GRAFAM</title>
      <main className='min-h-[100vh] flex justify-center mx-2 sm:mx-4 md:mx-8'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-center text-4xl'>Welcome to GRAFAM</h1>
          <p className='text-center leading-loose tracking-wider text-sm sm:text-base md:text-lg'>Grace Faith Missions International</p>
          <small className='bg-blue-500 p-2 text-yellow-200 rounded-lg text-center'> &#x26A0;  We are currently working on the site. come back later for updates</small>
        </div>
      </main>
    </>
  )
}

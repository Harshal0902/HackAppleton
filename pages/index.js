import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Who we are</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>Your exclusive space to practice self-care, strengthen your health and build positivity. </p>

          <Link href="/music" passHref>
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Listen Music</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src="/hero.svg" alt="img" width="350" height="350" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src="/feat.svg" alt="img" width="350" height="350" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> Good space is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Access curated video selection to boost your physical and mental health through meditation, stretches and breathing exercises. </li>
            <li className="list-disc">Get inspired everyday with words of wisdom </li>
            <li className="list-disc">Record good moments in your life with Journal</li>
            <li className="list-disc">Access curated music selection to help you relax, focus or sleep better</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

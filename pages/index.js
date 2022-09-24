import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Who we are</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Space Ore Stuff Inc. is a leading space exploration and mining organization. We have several Mining Bases and a Processing Rig. This web application is dedicated to all the employees who worked hard they have done till now.</p>

          <Link href="/laser_mining_drill" passHref>
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Laser Mining Drill</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src="/hero.svg" alt="img" width="350" height="350" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-6 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src="/feat.svg" alt="img" width="350" height="350" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>Space Ore Stuff Inc. is a web app where you can:
          </p>
          <ul className="text-2xl">
            <li className="list-disc">Get to know about the organization.</li>
            <li className="list-disc">Explore our futuristic Laser Mining Drill.</li>
            <li className="list-disc">Know more about the various Mining Base and Processing Rigs.</li>
            <li className="list-disc">Explore more with the help of 3D Models and Augmented Reality.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

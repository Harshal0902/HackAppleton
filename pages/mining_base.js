import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Mining_base() {
    return (
        <div className="min-h-screen text-white">

            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl text-center font-semibold tracking-wide">
                    Mining Base
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-56"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16">

                <Link href="/mining_base_spaceport" passHref>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-secondary rounded-lg">
                                <Image width="480" height="300" src="/426c5ab550d6414fbc05428bc144e6ba.jpeg" alt="" className="rounded-t-md" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl">Mining Base Spaceport</div>
                        </div>
                    </div>
                </Link>

                <Link href="/space_station_asteroid_mining_facility" passHref>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-secondary rounded-lg">
                                <Image width="680" height="300" src="/be8f97f657864a5a88a6b1220dd8b6e9.jpeg" alt="" className="rounded-t-md" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl">Asteroid Mining Facility</div>
                        </div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

import React from "react";
import Head from 'next/head'
import Navbar from './navbar'

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>Space Ore Stuff Inc.</title>
                <meta name="description" content="Space Ore Stuff Inc." />
                <link rel="icon" href="/logo.ico" />
            </Head>


            <div className='font-sansSerif'>
                <Navbar />
                <main>{children}</main>
            </div>
        </>
    )
}

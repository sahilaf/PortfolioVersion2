import React from 'react'
import Link from 'next/link'
import Nav from './nav'
import { Orbitron } from "next/font/google";
import { Lato } from "next/font/google";
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});
const orbitron = Orbitron({
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });
  
function Header() {
  return (
    <header className='py-8 xl:py-6 text-white'>
        <div className={orbitron.className}>
        <div className="container mx-auto flex justify-between items-center">
            <Link href='/'>
            <h1 className='text-3xl font-black' >
                Sahil<span className='text-accent'>.</span>
            </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            {/*}
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link> */}
            <Link href="/contact">
                <div className={`font-bold border border-accent py-1 px-3 rounded-md hover:bg-accent hover:text-black ${lato.className}`}>Contact</div>
            </Link>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
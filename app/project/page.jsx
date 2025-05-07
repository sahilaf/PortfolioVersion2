"use client"
import Header from '@/components/header'
import Preloader from '@/components/PreloaderAbout'
import Projects from '@/components/Projects'
import React from 'react'

function page() {
  return (
    <div>
        <Preloader/>
        <Header/>
        <Projects/>
    </div>
  )
}

export default page
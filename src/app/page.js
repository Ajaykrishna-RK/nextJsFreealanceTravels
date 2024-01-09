"use client"
import Header from '@/components/Header'
import React from 'react'
import "./global.css"
import Banner from '@/components/Banner'
import SectionOne from '@/components/SectionOne'
import SectionTwo from '@/components/SectionTwo'
import SectionThree from '@/components/SectionThree'
import SectionFour from '@/components/SectionFour'

export default function Home() {
  return (
    <div className="w-full mx-auto headFont overflow-hidden">
<Header/>
<Banner/>
<SectionOne/>
<SectionTwo/>
<SectionThree/>
<SectionFour/>
    </div>
  )
}

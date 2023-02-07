import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Notice from '@/components/Notice'
import Services from '@/components/Services'
import Workout from '@/components/Workout'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Healthy life</title>
      </Head>
      <main className='mx-[10%] lg:mx-[100px]'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Notice></Notice>
        <Services></Services>
        <Workout></Workout>
      </main>
    </>
  )
}

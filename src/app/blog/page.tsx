"use client"
import React from 'react'
import BlogCard from '@/components/blog-card'
import PageHeader from '../../components/pagerheader'
import ScrollBanner from '@/components/ScrollBanner'
function page() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col gap-y-3">
      <PageHeader title={'Blog'} subtitle1={'Home'} subtitle2={'blog'} classsubtitle2={'text-[#bff747]'} subtitle3={''} classsubtitle3={''} star={''}/>
      <ScrollBanner/>
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20'>
        <BlogCard/>
      </div>
    </section>
  )
}

export default page
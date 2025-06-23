import React from 'react'
import PageHeader from '../../components/pagerheader'
import Portfolio from '@/components/portfolio'

function page() {
  return (
    <section className="w-full min-h-screen">
      {/* <div
        className='w-full h-[90vh] flex flex-col items-center justify-center gap-[30px]'
        style={{
          backgroundImage: `url(${innerbg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
<h1 className='text-8xl font-semibold text-white'>Our <span className='text-lime-400'>Projects</span></h1>
<div className='flex gap-x-5 text-2xl'><span >Home</span><span>*</span><span className='text-lime-400'>project</span></div>
</div> */}
<PageHeader title='Project' subtitle1='Home' subtitle2={'project'} classsubtitle2={'text-lime-400'} subtitle3={''} classsubtitle3={''} star={''}/>
<Portfolio/>
    </section>
  )
}

export default page
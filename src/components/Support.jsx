import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'
const Support = () => {

    return (
        <div className='w-full h-screen mt-24'>
            <div className='absolute w-full h-[700px] bg-gray-900/90'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt='/' />
            </div>

            <div className='flex flex-col justify-center max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='content-center text-justify py-4 text-3xl text-slate-300'>Our products are built differently. With customers at the foundation of everything we do, we created a platform that makes it easier for businesses to adopt customer-centric practices. Say goodbye to siloed systems, fragmented customer data, and reactive customer service.</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black '>
                    <div className='flex flex-col h-[350px] justify-between bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Oversees the work of retail or non-retail sales employees.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-500'>Contact Us <ArrowSmRightIcon className='w-5' /></p>
                        </div>
                    </div>

                    <div className='flex flex-col h-[350px] justify-between bg-white rounded-xl shadow-2xl '>
                        <div className='p-8'>
                            <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>Advise and assist registered users with issues concerning their technical products.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-500'>Contact Us <ArrowSmRightIcon className='w-5' /></p>
                        </div>
                    </div>

                    <div className='flex flex-col h-[350px] justify-between bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>Working with media for the purpose of informing the public of an organization's mission, policies and practices in a positive, consistent and credible manner.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 '>
                            <p className='flex items-center text-indigo-500'>Contact Us <ArrowSmRightIcon className='w-5' /></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Support
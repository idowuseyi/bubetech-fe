"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Description from '@/app/components/market-components/details/Description'
import Feedback from '@/app/components/market-components/details/Feedback'

export default function Page() {
    const params = useParams()
    console.log(params)
    return (
        <div className='flex flex-col gap-4'>
            <Description />
            <Feedback />
        </div>
    )
}

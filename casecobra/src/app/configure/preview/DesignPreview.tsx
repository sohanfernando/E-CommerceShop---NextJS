"use client"

import Phone from '@/components/Phone'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { COLORS } from '@/validators/option-validator'
import { Configuration } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Confetti from "react-dom-confetti"

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const router = useRouter
  const { toast } = useToast()

  const [ showConfetti, setShowConfetti ] = useState(false)
  useEffect(() => setShowConfetti(true))

  const { color, model, finish, material } = configuration

  const tw = COLORS.find((surpportedColor) => surpportedColor.value === color)?.tw

  return (
    <>
      <div
        aria-hidden='true'
        className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
        <Confetti
          active={showConfetti}
          config={{ elementCount: 200, spread: 90 }}
        />
      </div>

      <div className='mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 mdLgap-x-8 lg:gap-x-12'>
        <div className='sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-3'>
          <Phone
            className={cn(`bg-${tw}`, "max-w-[150px] md:max-w-full")}
            imgSrc={configuration.croppedImageUrl!}/>
        </div>
      </div>
    </>
  )
}

export default DesignPreview;
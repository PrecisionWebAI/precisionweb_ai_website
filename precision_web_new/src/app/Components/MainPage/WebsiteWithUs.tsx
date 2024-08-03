import React from 'react'
import { FlipWordsDemo } from '../Universal/FlipWordsDemo'
import { CardStackDemo } from '../Universal/CardStackDemo'
import DotPattern from '../magic_ui/DotPatternProps'
import {cn} from "../../lib/utils"

const WebsiteWithUs = () => {
  return (
    <>
    {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      /> */}
    <div className="flex justify-center items-center h-[100vh]">

    <div className="flex flex-row justify-between w-[80%]">

    <FlipWordsDemo/>
    <CardStackDemo/>
    </div>
    </div>
    </>
  )
}

export default WebsiteWithUs
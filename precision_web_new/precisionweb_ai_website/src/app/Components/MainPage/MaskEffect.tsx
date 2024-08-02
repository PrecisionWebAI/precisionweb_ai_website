"use client";
import DotPattern from "../magic_ui/DotPatternProps";
import { MaskContainer } from "../ui/svg-mask-effect";
import {cn} from "../../lib/utils"

export function MaskEffect() {
  return (
    <>
     <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden  ">
      <MaskContainer
        revealText={
          <p className=" w-full mx-auto text-slate-800 text-center  text-6xl font-bold ">
            Who we are? What services does our company provide?
          </p>
        }
        className="h-[40rem] font-light "
      > At <span className="text-red-500">Precision Web AI</span>, we transform visionary ideas into captivating
        digital experiences, offering services in <span className="text-red-500">product design, UI/UX, mobile
        app development, cloud services, data science, blockchain, IT
        consulting, and AI</span>.
      </MaskContainer>
    </div>
    </>
  );
}

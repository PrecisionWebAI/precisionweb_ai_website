"use Client"

import { useTheme } from "next-themes";

import { MagicCard } from "../magic_ui/magiccard";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex justify-center items-center mt-[-13rem]">
        <div
          className={
            "flex h-[500px] w-[80%] flex-col gap-8 justify-center lg:h-[250px] lg:flex-row"
          }
        >
          <MagicCard
            className="cursor-pointer flex-col   shadow-2xl  w-[30%] justify-center items-center p-4 text-center"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex justify-center items-center">
              <div className="p-4 w-[3rem] h-[3rem] border border-2 rounded-full flex justify-center items-center text-3xl">
                1
              </div>
            </div>
            <h1 className="text-2xl mt-3 mb-3 text-center">
              Comprehensive Solutions
            </h1>
            <p className="w-[100%] text-sm text-center">
              We offer a range of digital services to kickstart your online
              journey, from web development to digital marketing strategies.
            </p>
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col   shadow-2xl  w-[30%] justify-center items-center p-4 text-center"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex justify-center items-center">
              <div className="p-4 w-[3rem] h-[3rem] border border-2 rounded-full flex justify-center items-center text-3xl">
                2
              </div>
            </div>
            <h1 className="text-2xl mt-3 mb-3 text-center">Expert Guidance</h1>
            <p className="w-[100%] text-sm text-center">
            Benefit from our experienced team's insights and industry knowledge to navigate the digital landscape effectively.
            </p>
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col   shadow-2xl  w-[30%] justify-center items-center p-4 text-center"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex justify-center items-center">
              <div className="p-4 w-[3rem] h-[3rem] border border-2 rounded-full flex justify-center items-center text-3xl">
                3
              </div>
            </div>
            <h1 className="text-2xl mt-3 mb-3 text-center">
            Tailored Approach
            </h1>
            <p className="w-[100%] text-sm text-center">
            Every client's journey is unique. We tailor our services to meet your specific needs and ensure a successful digital transformation.
            </p>
          </MagicCard>
        </div>
      </div>
    </>
  );
}

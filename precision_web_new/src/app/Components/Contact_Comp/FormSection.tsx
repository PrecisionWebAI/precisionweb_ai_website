"use client";

import { useEffect } from 'react';

import ShinyButton from "../magic_ui/ShinyButton";
import BoxReveal from "../magic_ui/BoxRevealProps";

declare global {
  interface Window {
    hbspt: any;
  }
}

export function FormSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45894918',
          formId: 'ec207008-5bf4-4b7f-86dc-c1b5d697f35f',
          target: '#hubspot-form-container',
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center">
    <div className="w-[80%] flex flex-row justify-center items-center h-[100vh]">
      <div className=" w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Precision Web {" "}<span className="text-[#5046e6]">AI</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
          Embark on a transformative journey {" "}
            <span className="text-[#5046e6]">with Us</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p>
              -&gt; &nbsp;Prioritize <span className="text-[#5046e6]">intuitive interfaces</span> and <span className="text-[#5046e6]">user-friendly navigation.</span><br /><br />
              -&gt;&nbsp; Make your digital experience <span className="text-[#5046e6]">inclusive</span> and <span className="text-[#5046e6]">accessible</span> to <span className="text-[#5046e6]">all users.</span> <br /><br />
              -&gt;&nbsp;Ensure fast loading times and <span className="text-[#5046e6]">smooth interactions.</span><br />
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <ShinyButton text="You Are One Step Ahead" className="mt-[1.6rem] "/>
        </BoxReveal>
      </div>

      {/* HubSpot form container */}
      <div id="hubspot-form-container" className="w-full max-w-md mx-auto mt-8 border p-4 rounded-lg h-[32rem] overflow-hidden"></div>
    </div>
    </div>
  );
}

export default FormSection;

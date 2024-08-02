"use client";

import React, { useState } from 'react';


interface HideShowProps {
  answer: string;
}

const Answer: React.FC<HideShowProps> = ({ answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="button-main-container flex justify-end pr-4 text-center w-full">
        <button 
          className="btns1-inner-div w-32 h-8 bg-blue-700 rounded text-white text-lg no-underline pt-1 pb-1 hover:bg-white hover:border-2 hover:border-blue-700 hover:text-blue-700"
          onClick={() => setShow(!show)}
        >
          {show ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>
      <div className="show-box m-4 pb-2 text-justify">
        {show && <p>{answer}</p>}
      </div>
    </>
  );
}

export default Answer;

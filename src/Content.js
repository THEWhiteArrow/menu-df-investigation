import React, { useState, useEffect } from "react";

const Content = () => {
  const texts = [
    "Driving your transformation projects1",
    "Driving your transformation projects2",
    "Driving your transformation projects3",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, setCurrentIndex, texts.length]);

  return (
    <div className="Content">
      <div className="flex justify-evenly items-center mx-4 mt-2 p-4 smalldiv h-screen bg-gray-100 rounded-3xl">
        <div className="flex flex-col w-[40%]">
          <h1 className="font-bold text-[52px] w-[60%] transition ease-in-out delay-150">
            {texts[currentIndex]}
          </h1>
          <div className="flex justify-between">
            {/*The next 3 things should be 1 component. Will make it in full project...*/}
            <div className="flex bg-white w-[30%] mt-5 rounded-2xl px-3 py-2">
              <img src="./icon.png" className="w-7 mr-1" />
              <p className="self-center text-xs font-medium">
                Tech
                <br />
                Transformation
              </p>
            </div>
            <div className="flex bg-white w-[30%] mt-5 rounded-2xl px-3 py-2">
              <img src="./icon.png" className="w-7 mr-1" />
              <p className="self-center text-xs font-medium">
                Talent
                <br />
                Augmentation
              </p>
            </div>
            <div className="flex bg-white w-[30%] mt-5 rounded-2xl px-3 py-2">
              <img src="./icon.png" className="w-7 mr-1" />
              <p className="self-center text-xs font-medium">
                Skills
                <br />
                Uplifting
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30%]">
          <img src="./road.png" />
        </div>
      </div>
    </div>
  );
};

export default Content;

import Image from "next/image";
import React from "react";

export default function LatestArticles() {
  return (
    <>
      <div className="latestarticles px-16 text-2xl py-20">
        (latest articles)
        <div className="article1 flex items-center justify-center w-full ">
          <div className="image w-1/2 h-96">this is sample title</div>
          <div className="title w-1/2 h-96">
            this is sample image
            <Image height={100} width={200} alt="image" src="/pic.png" />
          </div>
        </div>
        <div className="article2 flex items-center justify-center w-full ">
          {" "}
          <div className="title w-1/2 h-96">
            this is image
            <Image height={100} width={200} alt="image" src="/pic.png" />
          </div>
          <div className="image w-1/2 h-96">this is title</div>
        </div>
        <div className="article3 flex items-center justify-center w-full ">
          {" "}
          <div className="title w-1/2 h-96">this is title</div>
          <div className="image w-1/2 h-96">
            this is image
            <Image height={100} width={200} alt="image" src="/pic.png" />
          </div>
        </div>
      </div>
    </>
  );
}

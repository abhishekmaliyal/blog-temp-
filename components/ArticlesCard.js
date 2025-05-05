import Image from "next/image";
import React from "react";

export default function ArticlesCard() {
  return (
    <>
      <div className="article">
        <div className="article-image">
          <Image width={200} height={100} alt="image" src="/pic.png" />
          this is sample image
        </div>
        <div className="article-title">
          <p>this is sample title</p>
        </div>
      </div>
    </>
  );
}

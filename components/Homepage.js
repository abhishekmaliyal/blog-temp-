import React from "react";
import LatestArticles from "./LatestArticles";
import Filters from "./Filters";
import ArticlesCard from "./ArticlesCard";

export default function Homepage() {
  return (
    <>
      <div className="main h-full">
        <div className="descriptiontext h-fit text-5xl px-16 py-20">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s.
        </div>
        <div className="articles">
          <LatestArticles />
          <div className="allarticles px-16 py-20">
            <p className="text-4xl p-4">ARTICLES</p>
            <Filters />
            <p className="font-normal">showing 10 of 1122</p>
            <div className="listarticles grid grid-cols-3 place-content-center place-items-center gap-4">
              <ArticlesCard />
              <ArticlesCard />
              <ArticlesCard />
              <ArticlesCard />
              <ArticlesCard />
              <ArticlesCard />
              <ArticlesCard />
              <ArticlesCard />
              <ArticlesCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

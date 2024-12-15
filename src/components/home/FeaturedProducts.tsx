"use client";
import React from "react";
import { Text } from "../common/Text";
import BestSellers from "./BestSellers";
import MostPopular from "./MostPopular";
import NewArrivals from "./NewArrivals";
import Trending from "./Trending";

const tabList = ["Most Popular", "New Arrivals", "Trending", "Best Sellers"];

const FeaturedProducts = () => {
  const [activeTab, setTab] = React.useState("Most Popular");
  const activeSection = () => {
    switch (activeTab) {
      case tabList[0]:
        return <MostPopular />;
      case tabList[1]:
        return <NewArrivals />;
      case tabList[2]:
        return <Trending />;
      case tabList[3]:
        return <BestSellers />;

      default:
        return <MostPopular />;
    }
  };

  return (
    <section className="_container py-8">
      <Text
        title="Featured Products"
        className="text-2xl font-semibold text-center"
      />

      <div className="flex gap-1 md:gap-3 justify-center flex-wrap mt-3">
        {tabList.map((tab, index) => (
          <div
            onClick={() => setTab(tab)}
            key={index}
            className={`${
              activeTab === tab ? "bg-primary-100" : ""
            } hover:bg-primary-100 duration-300 text-sm font-medium rounded-full px-2 md:px-4 py-1 md:py-2 border border-dark-40`}
          >
            {tab}
          </div>
        ))}
      </div>

      {activeSection()}

      <div className="w-full flex flex-col sm:flex-row gap-4 pt-6">
        <div className="w-full sm:w-8/12 min-h-[260px] bg-dark-20"></div>
        <div className="w-full sm:w-4/12 min-h-[260px] bg-dark-40">jhghj</div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

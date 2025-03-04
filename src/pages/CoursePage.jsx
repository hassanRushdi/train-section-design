import React from "react";
import HeroSection from "../components/HeroSection";
import TabBar from "../components/TabBar";
import Accordion from "../components/Accordion";

const CoursePage = () => {
  return (
    <section>
      <HeroSection />
      <div className="lg:w-[55%] lg:ml-8 mt-5 sm:w-full">
        <TabBar />
        <Accordion chapterTitle="Chapter 1: Assessing Readiness and Export Opportunities" />
        <Accordion chapterTitle="Chapter 2: Export Procedures and Supply Chain" />
        <Accordion chapterTitle="Chapter 3 : Strategies for Cost Reduction and Optimizing Profitability" />
        <Accordion chapterTitle="Chapter 4 : Market Outreach and Online Export Strategies" />
        <Accordion chapterTitle="Chapter 5: Developing an Export Strategy" />
      </div>
    </section>
  );
};

export default CoursePage;

import React from "react";
import { User, BookOpen } from "lucide-react";
import GradientBackground from "../assets/banner-background-gradient.jpg";
import CourseCard from "./CourseCard";

const HeroSection = () => {
  return (
    <div>
      <div
        className="relative w-full h-[360px] bg-cover bg-bottom flex px-6 pt-7 sm:px-2 lg:px-10 "
        style={{ backgroundImage: `url('${GradientBackground}')` }}
      >
        <div className="text-white max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Export Managers Track - May 2024
          </h1>
          <p className="text-lg sm:text-xl mt-2 text-[#9F9A9A]">
            Tailored for those seeking to support export functions and
            operations
          </p>
          <div className="flex items-center pt-4 space-x-3">
            <User className="w-5 h-5 text-white" />
            <span>14 Students enrolled</span>
          </div>
        </div>
      </div>
      {/* Card Positioned Over Banner */}
      <div className="lg:absolute lg:right-16 z-10 sm:flex sm:justify-center sm:mt-10 bottom-2">
        <CourseCard />
      </div>

    </div>
  );
};

export default HeroSection;

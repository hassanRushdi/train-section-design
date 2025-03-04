import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Accordion = ({ chapterTitle }) => {
  const [openChapter, setOpenChapter] = useState(false);
  const [openModules, setOpenModules] = useState({});

  const toggleChapter = () => {
    setOpenChapter(!openChapter);
  };

  const toggleModule = (module) => {
    setOpenModules((prev) => ({
      ...prev,
      [module]: !prev[module],
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Chapter Header */}
      <button
        className="w-full flex justify-between items-center bg-primary text-white px-4 py-5 mt-10 text-left font-normal rounded-lg"
        onClick={toggleChapter}
      >
        {chapterTitle}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            openChapter && "rotate-180" 
          }`}
        />
      </button>

      {/* Chapter Content */}
      {openChapter && (
        <div className="p-4">
          <div className="w-full flex justify-between items-center text-gray-700 px-4 py-2 text-left rounded-md">
            <span>Post test</span>
            <span className="ml-auto bg-green-200 text-green-800 px-2 py-1 rounded-md text-sm">
              80%
            </span>
          </div>
          {/* Module 1 */}
          <button
            className={`w-full flex justify-between items-center text-gray-700 px-4 py-2 text-left font-semibold ${
              openModules["module1"] && "text-yellow-400" 
            } rounded-md`}
            onClick={() => toggleModule("module1")}
          >
            <span>Module 1: Export Readiness 6 hours</span>
            <ChevronRight
              className={`w-5 h-5 transition-transform ${
                openModules["module1"] && "rotate-90" 
              }`}
            />
          </button>
          {openModules["module1"] && (
            <div className="ml-6 mt-2 space-y-2">
              <div className="text-gray-600 px-4 py-1">Content</div>
              <div className="text-gray-600 px-4 py-1">Satisfaction Form</div>
            </div>
          )}

          {/* Module 2 */}
          <button
            className={`w-full flex justify-between items-center text-gray-700 px-4 py-2 text-left font-semibold ${
              openModules["module2"] && "text-yellow-400" 
            } rounded-md`}
            onClick={() => toggleModule("module2")}
          >
            <span>
              Module 2: Technical Requirement for Market Access 3 Hours
            </span>
            <ChevronRight
              className={`w-5 h-5 transition-transform ${
                openModules["module2"] && "rotate-90" 
              }`}
            />
          </button>

          {/* Module 3 */}
          <button
            className={`w-full flex justify-between items-center text-gray-700 px-4 py-2 text-left font-semibold ${
              openModules["module3"] && "text-yellow-400" 
            } rounded-md`}
            onClick={() => toggleModule("module3")}
          >
            <span>
              Module 3 (1/2): How to Study International Markets – EA 6 Hours
            </span>
            <ChevronRight
              className={`w-5 h-5 transition-transform ${
                openModules["module3"] && "rotate-90" 
              }`}
            />
          </button>

          <button
            className={`w-full flex justify-between items-center text-gray-700 px-4 py-2 text-left font-semibold ${
              openModules["module4"] && "text-yellow-400" 
            } rounded-md`}
            onClick={() => toggleModule("module4")}
          >
            <span>
              Module 3 (2/2): How to Study International Markets – EA 3 Hours
            </span>
            <ChevronRight
              className={`w-5 h-5 transition-transform ${
                openModules["module4"] && "rotate-90" 
              }`}
            />
          </button>

          {/* Post Test */}
          <button className="w-full flex justify-between items-center text-gray-700 px-4 py-2 text-left rounded-md">
            <span>Post test</span>
            <span className="ml-auto bg-green-200 text-green-800 px-2 py-1 rounded-md text-sm">
              80%
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Accordion;

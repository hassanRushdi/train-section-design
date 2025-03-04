import React, { useState } from "react";
import {
  BookOpen,
  Calendar,
  FileText,
  MessageCircle,
  File,
} from "lucide-react";

const TABS = [
  { name: "Description", icon: <FileText className="w-5 h-5" /> },
  { name: "Curriculum", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Sessions Schedule", icon: <Calendar className="w-5 h-5" /> },
  { name: "Q & A", icon: <MessageCircle className="w-5 h-5" /> },
  { name: "Material", icon: <File className="w-5 h-5" /> },
];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("Curriculum");

  return (
    <div className="border-b border-gray-200 flex justify-evenly overflow-x-auto bg-white">
      {TABS.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`lg:flex lg:flex-row sm:flex-col sm:gap-2 items-center space-x-2 px-4 py-2 text-sm font-medium transition-all rounded-t-lg ${
            activeTab === tab.name
              ? "bg-primary text-white shadow-md "
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <span>{tab.name}</span>
          <span className={activeTab === tab.name && "text-secondary"}>
            {tab.icon}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;

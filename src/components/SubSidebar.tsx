import React from "react";
import { Link } from "react-router-dom";

const subSidebarLinks: { [key: string]: string[] } = {
  dashboard: [],
  files: ["My Files", "Recent", "Starred", "Trash"],
  shared: ["Shared with me", "Links", "File requests"],
  settings: ["Profile", "Security", "Notifications"],
};

interface SubSidebarProps {
  activeSection: string;
  isSubSidebarOpen: boolean;
}

const SubSidebar: React.FC<SubSidebarProps> = ({ activeSection, isSubSidebarOpen }) => {
  return (
    <div
      className={`h-full bg-neutral-900 border-r border-zinc-800 flex flex-col transition-all duration-300 ${
        isSubSidebarOpen ? "w-64 px-6 py-4" : "w-0 overflow-hidden"
      }`}
    >
      {isSubSidebarOpen && (
        <>
          {/* Titre de la section active en haut */}
          <h2 className="text-xl font-semibold text-gray-300 mb-4 capitalize">{activeSection}</h2>
          {subSidebarLinks[activeSection]?.map((item) => (
            <Link
              key={item}
              to={`/${activeSection.toLowerCase()}`}
              className="p-3 rounded-lg hover:bg-gray-700 truncate"
            >
              {item}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default SubSidebar;

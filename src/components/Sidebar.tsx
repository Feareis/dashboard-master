import React from "react";
import { Home, Folder, Users, Settings, ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";

interface SidebarProps {
  setActiveSection: (section: string) => void;
  isSubSidebarOpen: boolean;
  setIsSubSidebarOpen: (state: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection, isSubSidebarOpen, setIsSubSidebarOpen }) => {
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    if (!isSubSidebarOpen) {
      setIsSubSidebarOpen(true);
    }
  };

  return (
    <div className="w-30 h-full bg-neutral-900 border-r border-zinc-800 px-6 py-4 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        {/* Logo de l'entreprise */}
        <div className="mb-4">
          <img src="../assets/images/drapeau_cayo_rsrp.png" alt="Company Logo" className="w-10 h-10" />
        </div>
        <nav className="flex flex-col gap-6">
          <SidebarItem onClick={() => handleSectionClick("dashboard")} icon={<Home size={24} />} label="Dashboard" />
          <SidebarItem onClick={() => handleSectionClick("files")} icon={<Folder size={24} />} label="Files" />
          <SidebarItem onClick={() => handleSectionClick("shared")} icon={<Users size={24} />} label="Shared" />
          <SidebarItem onClick={() => handleSectionClick("settings")} icon={<Settings size={24} />} label="Settings" />
        </nav>
      </div>
      <button
        onClick={() => setIsSubSidebarOpen(!isSubSidebarOpen)}
        className="p-2 rounded-md hover:bg-gray-600 transition"
      >
        {isSubSidebarOpen ? <ArrowLeftFromLine size={24} /> : <ArrowRightFromLine size={24} />}
      </button>
    </div>
  );
};

interface SidebarItemProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ onClick, icon, label }) => (
  <button onClick={onClick} className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700">
    {icon}
    <span className="text-base mt-1 text-gray-300">{label}</span>
  </button>
);

export default Sidebar;

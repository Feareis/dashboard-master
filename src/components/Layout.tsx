import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SubSidebar from "./SubSidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("files");
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#1A1A1A] to-[#121212] text-gray-100">
      <Sidebar setActiveSection={setActiveSection} isSubSidebarOpen={isSubSidebarOpen} setIsSubSidebarOpen={setIsSubSidebarOpen} />
      <SubSidebar activeSection={activeSection} isSubSidebarOpen={isSubSidebarOpen} />
      <div className="flex flex-col flex-1">
        {/* Header avec un gradient léger */}
        <header className="p-4">
          <Header />
        </header>
        {/* Main content avec un gradient subtil */}
        <main className="p-6 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

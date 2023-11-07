"use client";
import React, { useState } from "react";

const CollapsibleSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarWidth = isCollapsed ? "16" : "64";

  return (
    <div className="relative h-screen flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-200 w-${sidebarWidth} transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-center h-screen">
          {/* Sidebar Content */}
          {!isCollapsed && (
            <ul className="space-y-2">
              <li className="p-2">Item 1</li>
              <li className="p-2">Item 2</li>
              <li className="p-2">Item 3</li>
            </ul>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <button
          className="absolute top-0 left-0 p-4 cursor-pointer z-10"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* Main Content */}
        <h1>Main Content</h1>
        <p>This is your existing content that should not be pushed down.</p>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;

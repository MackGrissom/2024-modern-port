// CustomCursor.tsx
"use client";
// CustomCursor.tsx

import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      // Restore the default cursor when the component unmounts
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="w-2 h-1 border-2 border-purple-500 rounded-md bg-transparent fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.x, top: position.y }}
    >
      <div className="w-4 h-4 bg-purple-500 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 animate-ripple"></div>
    </div>
  );
};

export default CustomCursor;

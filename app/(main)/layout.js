import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto my-32 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

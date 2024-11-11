// Dashboard.tsx
import React, { useState } from "react";
import SideBar from "./SideBar";
import Content from "./Content";
import { useProfile } from "../users/useProfile";

const Dashboard: React.FC = () => {
  const [selectedContent, setSelectedContent] =
    useState<string>("edit-account");

  const handleButtonClick = (content: string) => {
    setSelectedContent(content);
  };

  const { user, isLoading } = useProfile();
  console.log(user,isLoading);
  

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-12 mb-16 gap-5">
      <SideBar onButtonClick={handleButtonClick} />
      <Content selectedContent={selectedContent} />
    </div>
  );
};

export default Dashboard;

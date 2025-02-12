"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
  containerClassName,
  tabClassName,
}) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
        containerClassName
      )}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "relative px-4 py-2 rounded-full",
            "cursor-pointer transition-all duration-500",
            activeTab === tab.id
              ? "text-white"
              : "hover:text-neutral-300 text-neutral-500",
            tabClassName
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 bg-neutral-800 rounded-full"
              style={{ transformStyle: "preserve-3d" }}
            />
          )}
          <span className="relative block">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export const TabsDemo = () => {
  const tabs = [
    {
      id: "world",
      label: "World",
    },
    {
      id: "ny",
      label: "New York",
    },
    {
      id: "business",
      label: "Business",
    },
    {
      id: "arts",
      label: "Arts",
    },
    {
      id: "science",
      label: "Science",
    },
  ];

  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-8">
        {activeTab === "world" && (
          <div className="text-white">World Content</div>
        )}
        {activeTab === "ny" && (
          <div className="text-white">New York Content</div>
        )}
        {activeTab === "business" && (
          <div className="text-white">Business Content</div>
        )}
        {activeTab === "arts" && (
          <div className="text-white">Arts Content</div>
        )}
        {activeTab === "science" && (
          <div className="text-white">Science Content</div>
        )}
      </div>
    </div>
  );
};

export default Tabs; 
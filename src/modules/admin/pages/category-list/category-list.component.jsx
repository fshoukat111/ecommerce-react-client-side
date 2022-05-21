import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import "./category-list.css";

export const CategoryList = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Calendar", icon: "pi pi-fw pi-calendar" },
  ];

  return (
    <div className="card">
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
    </div>
  );
};

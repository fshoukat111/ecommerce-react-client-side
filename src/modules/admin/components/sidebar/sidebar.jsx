import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from 'primereact/button';


export const SideBar = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);

  return (
    <>
      <div className="card">
        <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
          <h3>Left Sidebar</h3>
        </Sidebar>
        <Button
          icon="pi pi-arrow-left"
          onClick={() => setVisibleLeft(true)}
          className="mr-2"
        />
      </div>
    </>
  );
};

import React, { useState } from "react";
import Content from "../../components/app/Content";
import Header from "../../components/app/Header";
import Navigation from "../../components/app/Navigation";
import Sidebar from "../../components/app/Sidebar";
import SidebarContext from "../../context/SidebarContext";

export default function Dashboard() {
  return (
    <>
      <Header />

      <SidebarContext>
        <Navigation />
        <Sidebar />
        <Content />
      </SidebarContext>
    </>
  );
}

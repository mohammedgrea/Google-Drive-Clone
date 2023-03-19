import { createContext, useContext, useState } from "react";

const SideBarStateContext = createContext();
export function useSideBarContext() {
  return useContext(SideBarStateContext);
}
export default function SidebarContext({ children }) {
  const [isSidebarHided, setIsSidebarHided] = useState(false);

  function showOrhideSidebar() {
    setIsSidebarHided(!isSidebarHided);
  }
  const value = { isSidebarHided, showOrhideSidebar };
  return (
    <SideBarStateContext.Provider value={value}>
      {children}
    </SideBarStateContext.Provider>
  );
}

import { useContext, createContext, useState } from "react";

const ProgressContext = createContext();
export function useProgress() {
  return useContext(ProgressContext);
}

export default function Progress() {
  const [prog, setProg] = useState();
  function setProgress(prog) {
    setProg(prog);
  }
  const v = {
    setProgress,
    prog,
  };
  return <ProgressContext.Provider value={v}></ProgressContext.Provider>;
}

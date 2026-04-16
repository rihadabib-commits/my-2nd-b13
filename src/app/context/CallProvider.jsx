"use client";

import { useState } from "react";
import { CallContext } from "./Callcontext";

const CallProvider = ({ children }) => {
  const [call, setCall] = useState([]);

  return (
    <CallContext.Provider value={{ call, setCall }}>
      {children}
    </CallContext.Provider>
  );
};

export default CallProvider; 
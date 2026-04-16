// "use client";

// import { useState } from "react";
// import { CallContext } from "./Callcontext";

// const CallProvider = ({ children }) => {
//   const [call, setCall] = useState([]);

//   return (
//     <CallContext.Provider value={{ call, setCall }}>
//       {children}
//     </CallContext.Provider>
//   );
// };

// export default CallProvider; 
"use client"
import React, { createContext, useState } from 'react';

export const CallContext=createContext()

const CallContextProvider = ({children}) => {
    const [call,setCall]=useState([]);
    const data={
        call,
        setCall
    }
    return (
        <CallContext.Provider value={data}>
            {children}
        </CallContext.Provider>
    );
};

export default CallContextProvider;
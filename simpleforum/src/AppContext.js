import React, { createContext, useContext, useState } from "react";

const context = createContext();
const AppContext = ({ children }) => {
    const [userName, setUserName] = useState(null);

    return (
        <context.Provider value={{ userName, setUserName }}>
            {children}
        </context.Provider>
    );
};

export default AppContext;
export const AppState = () => {
    return useContext(context);
};
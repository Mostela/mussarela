import React, { createContext, useState, useEffect } from "react";
interface IDonationContext {

}

const DonationContext = createContext<IDonationContext>({} as IDonationContext);

export const AuthProvider: React.FC = ({ children }) => {

    return (
        <DonationContext.Provider value={{}}>
            {children}
        </DonationContext.Provider>
    );
};

export default DonationContext;

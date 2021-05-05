import React, { createContext, useState, useEffect } from "react";
import { IDonation } from "../Models/components.interface";
interface IDonationContext {
    donations: IDonation[],
    setDonations(donation: IDonation[]): void;
}

const DonationContext = createContext<IDonationContext>({} as IDonationContext);

export const DonationProvider: React.FC = ({ children }) => {
    const [donations, setDonationsState] = useState<IDonation[]>([])

    function setDonations(donation: IDonation[]) {
        setDonationsState(donation)
    }

    return (
        <DonationContext.Provider value={{donations, setDonations}}>
            {children}
        </DonationContext.Provider>
    );
};

export default DonationContext;

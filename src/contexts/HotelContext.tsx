
import React, { createContext, useContext } from "react";
import { HotelConfig } from "@/lib/types";

// Default hotel configuration
const defaultHotelConfig: HotelConfig = {
  name: "SRM Hotel",
  logo: "/lovable-uploads/78ee7a3c-95a7-470a-83fa-3937ce76d765.png", 
  tagline: "Experience Luxury & Comfort",
  heroImage: "/lovable-uploads/31047660-358c-4dcb-800a-d2bb67ec8159.png",
  contact: {
    phone: "+91 1234 567 890",
    email: "contact@srmhotel.com",
    address: "123 Main Street, City, India"
  }
};

interface HotelContextType {
  config: HotelConfig;
}

const HotelContext = createContext<HotelContextType | undefined>(undefined);

export const HotelProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HotelContext.Provider value={{ config: defaultHotelConfig }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => {
  const context = useContext(HotelContext);
  if (context === undefined) {
    throw new Error("useHotel must be used within a HotelProvider");
  }
  return context;
};

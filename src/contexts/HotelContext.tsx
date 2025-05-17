
import React, { createContext, useContext } from "react";
import { HotelConfig } from "@/lib/types";

// Default hotel configuration
const defaultHotelConfig: HotelConfig = {
  name: "SRM Hotel",
  logo: "/placeholder.svg", 
  tagline: "Experience Luxury & Comfort",
  contact: {
    phone: "+1 234 567 890",
    email: "contact@srmhotel.com",
    address: "123 Main Street, City, Country"
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

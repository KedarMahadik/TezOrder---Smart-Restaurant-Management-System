
import React from "react";
import { useHotel } from "@/contexts/HotelContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { config } = useHotel();
  
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {config.name}. Made by Kedar V Mahadik. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground">
            Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

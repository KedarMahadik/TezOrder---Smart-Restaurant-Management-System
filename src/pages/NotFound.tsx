
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page you're looking for cannot be found
        </p>
        <Button onClick={() => navigate("/")} size="lg">
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

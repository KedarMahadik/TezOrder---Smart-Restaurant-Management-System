
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Cart } from "@/components/Cart";

interface HeaderProps {
  tableNumber?: number;
}

const Header = ({ tableNumber }: HeaderProps) => {
  const location = useLocation();
  const { items } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  const isDashboard = location.pathname === "/dashboard";
  
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold gradient-text">Lovable.AO</span>
        </Link>
        
        <div className="flex items-center gap-3">
          {tableNumber && (
            <div className="table-badge">Table {tableNumber}</div>
          )}
          
          {isDashboard ? (
            <Link to="/">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Exit Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  <Menu className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              
              {location.pathname.includes('/menu') && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="sm" className="relative">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Cart
                      {totalItems > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                          {totalItems}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md">
                    <Cart />
                  </SheetContent>
                </Sheet>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getRandomTableNumber } from "@/lib/mock-data";
import Header from "@/components/Header";
import { ArrowRight, QrCode, ShoppingBag, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  const goToRandomTable = () => {
    const tableNumber = getRandomTableNumber();
    navigate(`/menu?table=${tableNumber}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center space-y-8">
              <ShoppingBag className="h-16 w-16 text-primary" />
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="gradient-text">Lovable.AO</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                The smart digital menu and ordering system for hotels and restaurants.
                Scan a QR code on your table to browse, order, and enjoy!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button onClick={goToRandomTable} size="lg">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  View Sample Menu
                </Button>
                <Button onClick={() => navigate("/dashboard")} variant="outline" size="lg">
                  Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gradient-to-b from-secondary to-background py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">How it Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">1. Scan QR Code</h3>
                <p className="text-muted-foreground">
                  Each table has a unique QR code that takes you directly to the digital menu
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">2. Place Your Order</h3>
                <p className="text-muted-foreground">
                  Browse the menu, select items, and place your order directly from your device
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">3. Enjoy & Give Feedback</h3>
                <p className="text-muted-foreground">
                  Sit back while your order is prepared and share your feedback after your meal
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lovable.AO. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

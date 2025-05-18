
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useHotel } from "@/contexts/HotelContext";
import { ArrowRight, Utensils, QrCode, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableSelector from "@/components/TableSelector";

const Index = () => {
  const navigate = useNavigate();
  const { config } = useHotel();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-container">
        <section className="py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to <span className="gradient-text">{config.name}</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {config.tagline}
                </p>
                <div className="py-6">
                  <TableSelector />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg" 
                    onClick={() => navigate('/menu')}
                    className="hover-scale"
                  >
                    View Our Menu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => navigate('/dashboard')}
                    className="hover-scale"
                  >
                    Manager Dashboard
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {config.heroImage ? (
                  <img
                    src={config.heroImage}
                    alt="SRM Hotel"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
                  />
                ) : (
                  <img
                    src="/placeholder.svg"
                    alt="Hotel Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Smart Digital Ordering
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our QR code-based ordering system makes dining easy and convenient
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Card className="glass-card hover-scale">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <QrCode className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">Scan QR Code</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Scan the QR code on your table to access the digital menu
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card hover-scale">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <Utensils className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">Browse Menu</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Explore our wide range of delicious food and beverages
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card hover-scale">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <Clock className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">Place Order</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Select items and place your order instantly
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card hover-scale">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <Star className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">Rate Your Experience</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Provide feedback to help us serve you better
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-24 lg:py-32 bg-muted/30 rounded-xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Try Our Smart Ordering System Today
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Visit {config.name} and experience our seamless ordering process
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/menu')}
                  className="hover-scale"
                >
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

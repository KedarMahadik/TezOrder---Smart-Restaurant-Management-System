
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, IndianRupee } from "lucide-react";
import Header from "@/components/Header";
import { useHotel } from "@/contexts/HotelContext";

const Contact = () => {
  const { config } = useHotel();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-container">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We'd love to hear from you. Reach out through any of these channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                  <CardDescription>Reach us directly by phone</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{config.contact?.phone || "+91 1234 567 890"}</p>
                  <p className="text-sm text-muted-foreground mt-2">Available 24/7 for reservations and queries</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                  <CardDescription>Send us an email</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{config.contact?.email || "contact@srmhotel.com"}</p>
                  <p className="text-sm text-muted-foreground mt-2">We usually respond within 24 hours</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Address
                  </CardTitle>
                  <CardDescription>Visit us in person</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium">{config.contact?.address || "123 Main Street, City, India"}</p>
                  <p className="text-sm text-muted-foreground mt-2">Located in the heart of the city</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Hours
                  </CardTitle>
                  <CardDescription>Our operating hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-1">
                    <p>Monday - Thursday</p>
                    <p>11:00 AM - 10:00 PM</p>
                  </div>
                  <div className="flex justify-between mb-1">
                    <p>Friday - Saturday</p>
                    <p>11:00 AM - 11:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Sunday</p>
                    <p>12:00 PM - 9:00 PM</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="h-5 w-5 text-primary" />
                    Payment Methods
                  </CardTitle>
                  <CardDescription>Ways to pay</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Cash</li>
                    <li>All major credit/debit cards</li>
                    <li>UPI Payments</li>
                    <li>Digital Wallets</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle>Reservations</CardTitle>
                  <CardDescription>Book a table in advance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    For reservations, please call us or use our online booking system.
                  </p>
                  <p className="text-sm">Book at least 2 hours in advance for guaranteed seating.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <Card className="glass-card hover-scale">
                <CardHeader>
                  <CardTitle>Location Map</CardTitle>
                  <CardDescription>Find us easily</CardDescription>
                </CardHeader>
                <CardContent className="aspect-video">
                  <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Map location placeholder</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {config.name}. Made by Kedar V Mahadik. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

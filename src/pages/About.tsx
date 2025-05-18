
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Users, Star, Clock, Award, Coffee } from "lucide-react";
import Header from "@/components/Header";
import { useHotel } from "@/contexts/HotelContext";

const About = () => {
  const { config } = useHotel();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-container">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="gradient-text">{config.name}</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Celebrating traditional flavors with a modern twist.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  Founded in 2005, {config.name} began as a small family-owned restaurant with a passion for authentic Indian cuisine. 
                  What started as a humble 20-seat eatery has now evolved into one of the most beloved culinary destinations in the region.
                </p>
                <p className="mb-4">
                  Our founder, Chef Rajesh Kumar, brought his family recipes from various regions of India and created a menu that 
                  celebrates the diversity of Indian culinary traditions. Each dish tells a story of heritage, passed down through generations.
                </p>
                <p>
                  Today, we continue our commitment to quality ingredients, traditional cooking methods, and exceptional service that 
                  has made {config.name} a landmark destination for food enthusiasts.
                </p>
              </div>
              <div className="w-full aspect-video overflow-hidden rounded-xl">
                {config.heroImage ? (
                  <img
                    src={config.heroImage}
                    alt={`${config.name} Restaurant`}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Restaurant Image</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      Authentic Flavors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We pride ourselves on preserving authentic recipes and cooking techniques from various regions of India.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Family Atmosphere
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our restaurant is designed to provide a welcoming environment where families can gather and create memories.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Quality Ingredients
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We source the freshest ingredients from local producers and import authentic spices directly from India.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle>Dine-In</CardTitle>
                    <CardDescription>Comfortable seating for up to 120 guests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experience our warm ambiance with indoor and outdoor seating options.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle>Takeaway</CardTitle>
                    <CardDescription>Order online or by phone</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Quick and efficient takeaway service with eco-friendly packaging.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle>Catering</CardTitle>
                    <CardDescription>For events large and small</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Custom menus for corporate events, weddings, and private parties.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle>Private Dining</CardTitle>
                    <CardDescription>Special occasions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Private rooms available for intimate gatherings and celebrations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Awards & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Best Indian Restaurant 2023
                    </CardTitle>
                    <CardDescription>Local Food Awards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Recognized for our exceptional cuisine and service.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Top 10 Restaurants
                    </CardTitle>
                    <CardDescription>Food & Travel Magazine</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Featured among the top dining destinations in the region.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Certificate of Excellence
                    </CardTitle>
                    <CardDescription>TripAdvisor (2020-2023)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Consistently rated 4.5+ stars by our valued customers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-muted">
                    {/* Chef Image Placeholder */}
                  </div>
                  <h3 className="text-xl font-bold">Chef Rajesh Kumar</h3>
                  <p className="text-muted-foreground">Founder & Head Chef</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-muted">
                    {/* Manager Image Placeholder */}
                  </div>
                  <h3 className="text-xl font-bold">Priya Sharma</h3>
                  <p className="text-muted-foreground">Restaurant Manager</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-muted">
                    {/* Chef Image Placeholder */}
                  </div>
                  <h3 className="text-xl font-bold">Sanjay Patel</h3>
                  <p className="text-muted-foreground">Executive Chef</p>
                </div>
              </div>
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

export default About;

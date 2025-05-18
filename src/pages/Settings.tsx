
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-container">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-lg mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                <span className="gradient-text">Settings</span>
              </h1>
              <p className="text-muted-foreground">
                Customize your experience
              </p>
            </div>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how the app looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <Switch
                    id="dark-mode"
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                  />
                </div>
                
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Current Theme</h3>
                  <div className={`p-4 rounded-md ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-white text-zinc-800 border'}`}>
                    {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;

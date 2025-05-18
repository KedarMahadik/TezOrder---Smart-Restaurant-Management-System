
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "@/lib/mock-data";
import { Category, DietaryTag, MenuItem } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import MenuItemCard from "@/components/MenuItemCard";
import Header from "@/components/Header";
import { Search, IndianRupee } from "lucide-react";

const categories: { value: Category; label: string }[] = [
  { value: "starters", label: "Starters" },
  { value: "main", label: "Main Course" },
  { value: "sides", label: "Sides" },
  { value: "desserts", label: "Desserts" },
  { value: "beverages", label: "Beverages" },
];

const dietaryFilters: { value: DietaryTag | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "veg", label: "Vegetarian" },
  { value: "non-veg", label: "Non-Vegetarian" },
  { value: "vegan", label: "Vegan" },
];

const MenuPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [dietaryFilter, setDietaryFilter] = useState<DietaryTag | "all">("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  
  // Extract table number from URL query params
  const params = new URLSearchParams(location.search);
  const tableNumber = params.get("table") ? parseInt(params.get("table") || "0") : undefined;
  
  // Calculate price range
  const minPrice = Math.min(...menuItems.map(item => item.price));
  const maxPrice = Math.max(...menuItems.map(item => item.price));
  
  // Apply filters
  useEffect(() => {
    let result = [...menuItems];
    
    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.ingredients.some(ing => ing.toLowerCase().includes(query))
      );
    }
    
    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    // Apply dietary filter
    if (dietaryFilter !== "all") {
      result = result.filter(item => item.dietaryTag === dietaryFilter);
    }
    
    // Apply price filter
    result = result.filter(
      item => item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    
    setFilteredItems(result);
  }, [searchQuery, selectedCategory, dietaryFilter, priceRange]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header tableNumber={tableNumber} />
      
      <main className="flex-1 page-container">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Our Menu</h1>
          <p className="text-muted-foreground">
            Browse our selection of delicious dishes and place your order
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium mb-2">Categories</h3>
              <Tabs 
                defaultValue="all" 
                value={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value as Category | "all")}
              >
                <TabsList className="w-full grid grid-cols-3 md:grid-cols-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  {categories.map((cat) => (
                    <TabsTrigger key={cat.value} value={cat.value}>
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Dietary Preferences</h3>
              <Tabs 
                defaultValue="all" 
                value={dietaryFilter}
                onValueChange={(value) => setDietaryFilter(value as DietaryTag | "all")}
              >
                <TabsList className="w-full grid grid-cols-4">
                  {dietaryFilters.map((filter) => (
                    <TabsTrigger key={filter.value} value={filter.value}>
                      {filter.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Price Range</h3>
              <span className="text-sm text-muted-foreground flex items-center">
                <IndianRupee className="h-3 w-3 mr-1" />{priceRange[0].toFixed(0)} - <IndianRupee className="h-3 w-3 mr-1" />{priceRange[1].toFixed(0)}
              </span>
            </div>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={50}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="mt-2"
            />
          </div>
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MenuPage;

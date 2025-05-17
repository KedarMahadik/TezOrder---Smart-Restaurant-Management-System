
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/lib/types";
import { useCart } from "@/contexts/CartContext";
import { Plus, Info, Clock, Flame } from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  
  const dietaryColor = {
    "veg": "text-green-600 bg-green-600/10 border-green-600/20",
    "non-veg": "text-red-600 bg-red-600/10 border-red-600/20",
    "vegan": "text-emerald-600 bg-emerald-600/10 border-emerald-600/20",
  };

  const spicyLevelIcons = {
    "mild": "🌶️",
    "medium": "🌶️🌶️",
    "hot": "🌶️🌶️🌶️",
    "extra hot": "🌶️🌶️🌶️🌶️"
  };
  
  return (
    <Card className="menu-card hover-scale glass-card">
      <div className="relative h-48 overflow-hidden rounded-md mb-3">
        <img 
          src={item.imageUrl} 
          alt={item.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" 
        />
        <Badge className={`absolute top-2 right-2 ${dietaryColor[item.dietaryTag]}`}>
          {item.dietaryTag}
        </Badge>
      </div>
      
      <CardContent className="p-0">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg line-clamp-1">{item.name}</h3>
          <span className="text-primary font-semibold">₹{item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {item.ingredients.join(", ")}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-xs ${i < Math.round(item.rating) ? "text-primary" : "text-muted-foreground"}`}>
                ★
              </span>
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({item.reviewCount})
            </span>
          </div>
          
          {item.spicyLevel && (
            <span className="text-xs" title={`Spice Level: ${item.spicyLevel}`}>
              {spicyLevelIcons[item.spicyLevel]}
            </span>
          )}
        </div>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-3">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full text-xs flex items-center">
              <Info className="h-3 w-3 mr-1" /> 
              {isOpen ? "Hide Details" : "View Details"}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 text-sm space-y-2">
            {item.description && (
              <div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            )}
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-2">
              {item.cookingTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs">{item.cookingTime}</span>
                </div>
              )}
              
              {item.calories && (
                <div className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs">{item.calories} cal</span>
                </div>
              )}
            </div>
            
            {item.allergens && item.allergens.length > 0 && (
              <div>
                <p className="text-xs font-medium mb-1">Allergens:</p>
                <div className="text-xs text-muted-foreground">
                  {item.allergens.join(", ")}
                </div>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      
      <CardFooter className="p-0 mt-3">
        <Button onClick={() => addToCart(item)} className="w-full transition-colors duration-300">
          <Plus className="h-4 w-4 mr-2" />
          Add to Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItemCard;

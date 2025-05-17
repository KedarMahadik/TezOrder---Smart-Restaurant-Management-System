
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/lib/types";
import { useCart } from "@/contexts/CartContext";
import { Plus } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  
  const dietaryColor = {
    "veg": "text-green-600 bg-green-600/10 border-green-600/20",
    "non-veg": "text-red-600 bg-red-600/10 border-red-600/20",
    "vegan": "text-emerald-600 bg-emerald-600/10 border-emerald-600/20",
  };
  
  return (
    <Card className="menu-card">
      <div className="relative h-48 overflow-hidden rounded-md mb-3">
        <img 
          src={item.imageUrl} 
          alt={item.name}
          className="object-cover w-full h-full" 
        />
        <Badge className={`absolute top-2 right-2 ${dietaryColor[item.dietaryTag]}`}>
          {item.dietaryTag}
        </Badge>
      </div>
      
      <CardContent className="p-0">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg line-clamp-1">{item.name}</h3>
          <span className="text-primary font-semibold">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {item.ingredients.join(", ")}
        </p>
        
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
      </CardContent>
      
      <CardFooter className="p-0 mt-3">
        <Button onClick={() => addToCart(item)} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add to Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItemCard;

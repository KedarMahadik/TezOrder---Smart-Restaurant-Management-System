
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { SheetTitle, SheetDescription, SheetHeader, SheetFooter } from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { OrderType } from "@/lib/types";
import { useNavigate } from "react-router-dom";
import { useOrders } from "@/contexts/OrderContext";
import { useToast } from "@/hooks/use-toast";

export const Cart = () => {
  const { 
    items, 
    orderType, 
    setOrderType, 
    updateQuantity, 
    removeFromCart,
    clearCart, 
    getCartTotal 
  } = useCart();
  const { placeOrder } = useOrders();
  const { toast } = useToast();
  const navigate = useNavigate();
  const total = getCartTotal();
  const params = new URLSearchParams(window.location.search);
  const tableNumber = parseInt(params.get("table") || "0");
  
  const handlePlaceOrder = async () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your order",
        variant: "destructive",
      });
      return;
    }
    
    if (tableNumber === 0 && orderType === "dine-in") {
      toast({
        title: "Table number required",
        description: "Please scan a table QR code or select Parcel option",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const order = await placeOrder({
        tableNumber: tableNumber,
        items,
        orderType,
        total
      });
      
      clearCart();
      navigate(`/order-success?id=${order.id}`);
    } catch (error) {
      toast({
        title: "Failed to place order",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>Your Order</SheetTitle>
        <SheetDescription>
          {items.length === 0 ? (
            "Your cart is empty"
          ) : (
            `You have ${items.length} item${items.length !== 1 ? 's' : ''} in your cart`
          )}
        </SheetDescription>
      </SheetHeader>
      
      <div className="flex flex-col gap-4 my-4">
        <div className="space-y-2">
          <div className="font-medium">Order Type</div>
          <RadioGroup 
            value={orderType} 
            onValueChange={(value) => setOrderType(value as OrderType)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dine-in" id="dine-in" />
              <Label htmlFor="dine-in">Dine-in</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="parcel" id="parcel" />
              <Label htmlFor="parcel">Parcel</Label>
            </div>
          </RadioGroup>
        </div>
        
        {tableNumber > 0 && orderType === "dine-in" && (
          <div className="bg-primary/10 text-primary p-2 rounded-md text-sm">
            Your order will be served to Table #{tableNumber}
          </div>
        )}
      </div>
      
      {items.length > 0 && (
        <>
          <Separator />
          
          <div className="flex-1 overflow-auto py-4">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)} each
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-r-none" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <div className="w-10 text-center">{item.quantity}</div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-l-none" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-red-600" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <Separator />
        </>
      )}
      
      <SheetFooter className="mt-auto">
        {items.length > 0 && (
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>
            <Button onClick={handlePlaceOrder} className="w-full">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Place Order
            </Button>
          </div>
        )}
      </SheetFooter>
    </div>
  );
};

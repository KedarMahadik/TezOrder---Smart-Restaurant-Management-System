
import React, { createContext, useContext, useState } from "react";
import { Order, OrderStatus } from "@/lib/types";
import { orders as mockOrders } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";

interface OrderContextType {
  orders: Order[];
  placeOrder: (order: Omit<Order, "id" | "timestamp" | "status">) => Promise<Order>;
  updateOrderStatus: (orderId: number, status: OrderStatus) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const { toast } = useToast();

  const placeOrder = async (orderData: Omit<Order, "id" | "timestamp" | "status">) => {
    // In a real app, this would be an API call
    return new Promise<Order>((resolve) => {
      setTimeout(() => {
        const newOrder: Order = {
          ...orderData,
          id: Math.floor(Math.random() * 9000) + 1000, // Generate a random 4-digit id
          timestamp: new Date().toISOString(),
          status: "pending"
        };
        
        setOrders([newOrder, ...orders]);
        
        toast({
          title: "Order placed successfully",
          description: `Your order #${newOrder.id} is being processed.`,
        });
        
        resolve(newOrder);
      }, 800);
    });
  };

  const updateOrderStatus = (orderId: number, status: OrderStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
    
    toast({
      title: "Order status updated",
      description: `Order #${orderId} is now ${status}`,
    });
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};

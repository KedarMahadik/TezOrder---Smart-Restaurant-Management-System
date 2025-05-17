
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import Header from "@/components/Header";
import { useOrders } from "@/contexts/OrderContext";
import { OrderStatus } from "@/lib/types";
import { Search, Package, Clock, Check, ChefHat, X } from "lucide-react";

const Dashboard = () => {
  const { orders, updateOrderStatus } = useOrders();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [activeTab, setActiveTab] = useState<OrderStatus | "all">("all");
  
  useEffect(() => {
    let result = [...orders];
    
    // Filter by status
    if (activeTab !== "all") {
      result = result.filter(order => order.status === activeTab);
    }
    
    // Apply search
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      result = result.filter(
        order => order.id.toString().includes(query) || 
                order.tableNumber.toString().includes(query)
      );
    }
    
    setFilteredOrders(result);
  }, [orders, searchTerm, activeTab]);
  
  const getStatusBadge = (status: OrderStatus) => {
    const statusConfig = {
      pending: { color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: Clock },
      preparing: { color: "bg-blue-500/10 text-blue-500 border-blue-500/20", icon: ChefHat },
      served: { color: "bg-green-500/10 text-green-500 border-green-500/20", icon: Check },
      completed: { color: "bg-primary/10 text-primary border-primary/20", icon: Check },
      cancelled: { color: "bg-red-500/10 text-red-500 border-red-500/20", icon: X }
    };
    
    const StatusIcon = statusConfig[status].icon;
    
    return (
      <Badge className={`${statusConfig[status].color} flex gap-1 items-center`}>
        <StatusIcon className="h-3 w-3" />
        <span className="capitalize">{status}</span>
      </Badge>
    );
  };
  
  const getOrderTypeIcon = (type: string) => {
    return type === "parcel" ? (
      <Badge variant="outline" className="flex gap-1 items-center">
        <Package className="h-3 w-3" />
        Parcel
      </Badge>
    ) : (
      <Badge variant="outline" className="flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3z" />
          <path d="M3 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z" />
        </svg>
        Dine-in
      </Badge>
    );
  };
  
  const getNextStatus = (currentStatus: OrderStatus): OrderStatus | null => {
    const statusFlow = {
      pending: "preparing",
      preparing: "served",
      served: "completed",
      completed: null,
      cancelled: null,
    };
    
    return statusFlow[currentStatus] as OrderStatus | null;
  };
  
  const handleUpdateStatus = (orderId: number, currentStatus: OrderStatus) => {
    const nextStatus = getNextStatus(currentStatus);
    if (nextStatus) {
      updateOrderStatus(orderId, nextStatus);
    }
  };
  
  const handleCancelOrder = (orderId: number) => {
    updateOrderStatus(orderId, "cancelled");
  };
  
  // Format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 page-container">
        <h1 className="text-3xl font-bold mb-2">Manager Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Monitor orders and manage restaurant operations
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>
                Manage customer orders and update their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      placeholder="Search orders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <Tabs 
                    value={activeTab} 
                    onValueChange={(value) => setActiveTab(value as OrderStatus | "all")}
                  >
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="preparing">Preparing</TabsTrigger>
                      <TabsTrigger value="served">Served</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <ScrollArea className="h-[500px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Table</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">#{order.id}</TableCell>
                            <TableCell>{order.tableNumber}</TableCell>
                            <TableCell>{getOrderTypeIcon(order.orderType)}</TableCell>
                            <TableCell>{formatDate(order.timestamp)}</TableCell>
                            <TableCell>${order.total.toFixed(2)}</TableCell>
                            <TableCell>{getStatusBadge(order.status)}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                {getNextStatus(order.status) && (
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleUpdateStatus(order.id, order.status)}
                                  >
                                    Update Status
                                  </Button>
                                )}
                                {(order.status === "pending" || order.status === "preparing") && (
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="text-red-500"
                                    onClick={() => handleCancelOrder(order.id)}
                                  >
                                    Cancel
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8">
                            No orders found
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-4 text-center border">
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                    <p className="text-3xl font-bold">{orders.length}</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 text-center border">
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-3xl font-bold">
                      {orders.filter(order => order.status === "pending").length}
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-4 text-center border">
                    <p className="text-sm text-muted-foreground">In Progress</p>
                    <p className="text-3xl font-bold">
                      {orders.filter(order => order.status === "preparing").length}
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-4 text-center border">
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-3xl font-bold">
                      {orders.filter(order => 
                        order.status === "served" || 
                        order.status === "completed"
                      ).length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <QRCodeGenerator />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

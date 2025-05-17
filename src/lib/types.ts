
export type OrderType = "dine-in" | "parcel";
export type OrderStatus = "pending" | "preparing" | "served" | "completed" | "cancelled";
export type Category = "starters" | "main" | "desserts" | "beverages" | "sides";
export type DietaryTag = "veg" | "non-veg" | "vegan";

export interface MenuItem {
  id: number;
  name: string;
  category: Category;
  price: number;
  imageUrl: string;
  ingredients: string[];
  dietaryTag: DietaryTag;
  rating: number;
  reviewCount: number;
  description?: string;
  cookingTime?: string;
  spicyLevel?: "mild" | "medium" | "hot" | "extra hot";
  calories?: number;
  allergens?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: number;
  tableNumber: number;
  items: CartItem[];
  orderType: OrderType;
  status: OrderStatus;
  timestamp: string;
  total: number;
}

export interface Review {
  id: number;
  itemId: number;
  rating: number;
  comment: string;
  timestamp: string;
}

// Hotel configuration
export interface HotelConfig {
  name: string;
  logo: string;
  tagline?: string;
  heroImage?: string;
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

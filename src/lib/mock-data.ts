
import { MenuItem, Order } from './types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Garlic Butter Prawns",
    category: "starters",
    price: 12.99,
    imageUrl: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=400&h=300&auto=format",
    ingredients: ["Fresh prawns", "Garlic butter", "Herbs", "Lemon"],
    dietaryTag: "non-veg",
    rating: 4.7,
    reviewCount: 42
  },
  {
    id: 2,
    name: "Caprese Salad",
    category: "starters",
    price: 9.50,
    imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=400&h=300&auto=format",
    ingredients: ["Fresh tomatoes", "Buffalo mozzarella", "Basil", "Olive oil", "Balsamic glaze"],
    dietaryTag: "veg",
    rating: 4.3,
    reviewCount: 28
  },
  {
    id: 3,
    name: "Grilled Salmon",
    category: "main",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&h=300&auto=format",
    ingredients: ["Atlantic salmon", "Lemon", "Dill", "Butter", "Seasonal vegetables"],
    dietaryTag: "non-veg",
    rating: 4.8,
    reviewCount: 56
  },
  {
    id: 4,
    name: "Mushroom Risotto",
    category: "main",
    price: 18.50,
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=400&h=300&auto=format",
    ingredients: ["Arborio rice", "Mixed mushrooms", "White wine", "Parmesan", "Truffle oil"],
    dietaryTag: "veg",
    rating: 4.5,
    reviewCount: 37
  },
  {
    id: 5,
    name: "Chocolate Fondant",
    category: "desserts",
    price: 8.99,
    imageUrl: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=400&h=300&auto=format",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Vanilla ice cream"],
    dietaryTag: "veg",
    rating: 4.9,
    reviewCount: 64
  },
  {
    id: 6,
    name: "Fruit Platter",
    category: "desserts",
    price: 7.50,
    imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=400&h=300&auto=format",
    ingredients: ["Seasonal fruits", "Honey", "Mint"],
    dietaryTag: "vegan",
    rating: 4.4,
    reviewCount: 31
  },
  {
    id: 7,
    name: "Signature Cocktail",
    category: "beverages",
    price: 10.99,
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&h=300&auto=format",
    ingredients: ["Premium vodka", "Fresh berries", "Lime", "Soda"],
    dietaryTag: "vegan",
    rating: 4.6,
    reviewCount: 48
  },
  {
    id: 8,
    name: "Truffle Fries",
    category: "sides",
    price: 6.99,
    imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=400&h=300&auto=format",
    ingredients: ["Hand-cut potatoes", "Truffle oil", "Parmesan", "Fresh herbs"],
    dietaryTag: "veg",
    rating: 4.5,
    reviewCount: 39
  }
];

export const orders: Order[] = [
  {
    id: 1001,
    tableNumber: 5,
    items: [
      { ...menuItems[2], quantity: 2 },
      { ...menuItems[7], quantity: 1 }
    ],
    orderType: "dine-in",
    status: "served",
    timestamp: new Date(Date.now() - 45 * 60000).toISOString(), // 45 minutes ago
    total: 2 * menuItems[2].price + menuItems[7].price
  },
  {
    id: 1002,
    tableNumber: 3,
    items: [
      { ...menuItems[0], quantity: 1 },
      { ...menuItems[3], quantity: 1 },
      { ...menuItems[5], quantity: 2 }
    ],
    orderType: "dine-in", 
    status: "preparing",
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(), // 15 minutes ago
    total: menuItems[0].price + menuItems[3].price + 2 * menuItems[5].price
  },
  {
    id: 1003,
    tableNumber: 7,
    items: [
      { ...menuItems[1], quantity: 1 },
      { ...menuItems[6], quantity: 2 }
    ],
    orderType: "parcel",
    status: "pending",
    timestamp: new Date().toISOString(), // Just now
    total: menuItems[1].price + 2 * menuItems[6].price
  }
];

export const getRandomTableNumber = (): number => {
  return Math.floor(Math.random() * 20) + 1; // Random table between 1-20
};

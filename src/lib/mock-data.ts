
import { MenuItem, Order } from './types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Garlic Butter Prawns",
    category: "starters",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=400&h=300&auto=format",
    ingredients: ["Fresh prawns", "Garlic butter", "Herbs", "Lemon"],
    dietaryTag: "non-veg",
    rating: 4.7,
    reviewCount: 42,
    description: "Succulent prawns sautéed in a rich garlic butter sauce, garnished with fresh herbs and a squeeze of lemon.",
    cookingTime: "15 min",
    spicyLevel: "mild",
    calories: 320,
    allergens: ["Shellfish", "Dairy"]
  },
  {
    id: 2,
    name: "Caprese Salad",
    category: "starters",
    price: 649,
    imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=400&h=300&auto=format",
    ingredients: ["Fresh tomatoes", "Buffalo mozzarella", "Basil", "Olive oil", "Balsamic glaze"],
    dietaryTag: "veg",
    rating: 4.3,
    reviewCount: 28,
    description: "A classic Italian salad with layers of ripe tomatoes, creamy buffalo mozzarella, and fresh basil, drizzled with olive oil and balsamic glaze.",
    cookingTime: "10 min",
    spicyLevel: "mild",
    calories: 250,
    allergens: ["Dairy"]
  },
  {
    id: 3,
    name: "Grilled Salmon",
    category: "main",
    price: 1699,
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&h=300&auto=format",
    ingredients: ["Atlantic salmon", "Lemon", "Dill", "Butter", "Seasonal vegetables"],
    dietaryTag: "non-veg",
    rating: 4.8,
    reviewCount: 56,
    description: "Tender Atlantic salmon fillet grilled to perfection, served with a lemon-dill butter sauce and a side of seasonal vegetables.",
    cookingTime: "25 min",
    spicyLevel: "mild",
    calories: 420,
    allergens: ["Fish", "Dairy"]
  },
  {
    id: 4,
    name: "Mushroom Risotto",
    category: "main",
    price: 1249,
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=400&h=300&auto=format",
    ingredients: ["Arborio rice", "Mixed mushrooms", "White wine", "Parmesan", "Truffle oil"],
    dietaryTag: "veg",
    rating: 4.5,
    reviewCount: 37,
    description: "Creamy Arborio rice cooked with a medley of wild mushrooms, white wine, and finished with Parmesan cheese and a drizzle of truffle oil.",
    cookingTime: "30 min",
    spicyLevel: "mild",
    calories: 480,
    allergens: ["Dairy", "Alcohol"]
  },
  {
    id: 5,
    name: "Chocolate Fondant",
    category: "desserts",
    price: 599,
    imageUrl: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=400&h=300&auto=format",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Vanilla ice cream"],
    dietaryTag: "veg",
    rating: 4.9,
    reviewCount: 64,
    description: "Decadent chocolate cake with a molten center, served warm with a scoop of vanilla ice cream.",
    cookingTime: "20 min",
    spicyLevel: "mild",
    calories: 550,
    allergens: ["Gluten", "Dairy", "Eggs"]
  },
  {
    id: 6,
    name: "Fruit Platter",
    category: "desserts",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=400&h=300&auto=format",
    ingredients: ["Seasonal fruits", "Honey", "Mint"],
    dietaryTag: "vegan",
    rating: 4.4,
    reviewCount: 31,
    description: "A vibrant selection of freshly cut seasonal fruits, drizzled with honey and garnished with fresh mint leaves.",
    cookingTime: "10 min",
    spicyLevel: "mild",
    calories: 180,
    allergens: []
  },
  {
    id: 7,
    name: "Signature Cocktail",
    category: "beverages",
    price: 749,
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&h=300&auto=format",
    ingredients: ["Premium vodka", "Fresh berries", "Lime", "Soda"],
    dietaryTag: "vegan",
    rating: 4.6,
    reviewCount: 48,
    description: "Our house specialty cocktail with premium vodka, muddled fresh berries, a splash of lime, and topped with soda water.",
    cookingTime: "5 min",
    spicyLevel: "mild",
    calories: 220,
    allergens: ["Alcohol"]
  },
  {
    id: 8,
    name: "Truffle Fries",
    category: "sides",
    price: 479,
    imageUrl: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=400&h=300&auto=format",
    ingredients: ["Hand-cut potatoes", "Truffle oil", "Parmesan", "Fresh herbs"],
    dietaryTag: "veg",
    rating: 4.5,
    reviewCount: 39,
    description: "Crispy hand-cut potato fries tossed in aromatic truffle oil, sprinkled with grated Parmesan cheese and fresh herbs.",
    cookingTime: "15 min",
    spicyLevel: "mild",
    calories: 380,
    allergens: ["Dairy"]
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

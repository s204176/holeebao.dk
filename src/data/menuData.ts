// Menu Data for Holee Bao
// This file contains all menu items, prices, and categories

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  price?: number;
  priceOption?: string; // For items like "1 for 39KR, 2 for 69KR"
  category: 'bao' | 'bowl' | 'share' | 'special' | 'dessert' | 'drink';
  isVegetarian?: boolean;
  isVegan?: boolean;
  availability?: 'everyday' | 'weekend' | 'monthly';
  cookingMethod?: 'steamed' | 'pan-fried' | 'both';
  image?: string;
}

// BAOS - 1 for 39KR / 2 for 69KR (steam or pan fried)
export const baos: MenuItem[] = [
  {
    id: 'bao-mala-beef',
    name: 'Mala Beef Bao',
    description: 'Spicy Sichuan beef with numbing mala spice',
    priceOption: '1 for 39KR / 2 for 69KR',
    category: 'bao',
    cookingMethod: 'both',
    availability: 'everyday',
  },
  {
    id: 'bao-duck',
    name: 'Ducking Bao',
    description: 'Tender duck with hoisin and cucumber',
    priceOption: '1 for 39KR / 2 for 69KR',
    category: 'bao',
    cookingMethod: 'both',
    availability: 'everyday',
  },
  {
    id: 'bao-vegan',
    name: 'Vegan Bao',
    description: 'Plant-based filling with fresh vegetables',
    priceOption: '1 for 39KR / 2 for 69KR',
    category: 'bao',
    cookingMethod: 'both',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
  {
    id: 'bao-curry',
    name: 'Curry Bao',
    description: 'Chicken and vegetables in aromatic curry',
    priceOption: '1 for 39KR / 2 for 69KR',
    category: 'bao',
    cookingMethod: 'both',
    availability: 'everyday',
  },
];

// BOWLS - Choose noodles (2 types) or plain rice
export const bowls: MenuItem[] = [
  {
    id: 'bowl-hong-shao-pork',
    name: 'Hong Shao Pork Bowl',
    description: 'Braised pork belly in sweet soy sauce. Choose noodles or rice.',
    price: 98,
    category: 'bowl',
    availability: 'everyday',
  },
  {
    id: 'bowl-braised-beef',
    name: 'Braised Beef Bowl',
    description: 'Slow-cooked beef in rich broth. Choose noodles or rice.',
    price: 98,
    category: 'bowl',
    availability: 'everyday',
  },
  {
    id: 'bowl-jingdu-chicken',
    name: 'Jingdu Chicken Bowl',
    description: 'Tomato-based chicken with vegetables. Choose noodles or rice.',
    price: 98,
    category: 'bowl',
    availability: 'everyday',
  },
  {
    id: 'bowl-mock-duck',
    name: 'Braised Mock Duck Bowl',
    description: 'Plant-based duck alternative. Choose noodles or rice.',
    price: 98,
    category: 'bowl',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
];

// TO SHARE
export const toShare: MenuItem[] = [
  {
    id: 'share-agurk-salad',
    name: 'Agurk Salad',
    nameEn: 'Cucumber Salad',
    description: 'Refreshing Danish cucumber salad',
    price: 49,
    category: 'share',
    isVegetarian: true,
    availability: 'everyday',
  },
  {
    id: 'share-mala-lotus',
    name: 'Chili Oil Beef Lotus Mala',
    description: 'Spicy beef with lotus root in numbing chili oil',
    price: 69,
    category: 'share',
    availability: 'everyday',
  },
  {
    id: 'share-silky-tofu',
    name: 'Silky Tofu w/ Chili Oil',
    description: 'Soft tofu in aromatic chili oil',
    price: 49,
    category: 'share',
    isVegetarian: true,
    availability: 'everyday',
  },
  {
    id: 'share-prawn-toast',
    name: 'Prawn Toast',
    description: 'Crispy toast topped with prawn mixture',
    priceOption: '4 pieces for 69KR',
    price: 69,
    category: 'share',
    availability: 'everyday',
  },
];

// SPECIALS (Weekend/Monthly)
export const specials: MenuItem[] = [
  {
    id: 'special-char-siu',
    name: 'Char Siu Bao',
    description: 'Classic BBQ pork bun',
    price: 45,
    category: 'special',
    availability: 'weekend',
  },
  {
    id: 'special-custard',
    name: 'Custard Bao',
    description: 'Sweet custard-filled bao',
    price: 45,
    category: 'special',
    availability: 'weekend',
  },
  {
    id: 'special-chives-pork',
    name: 'Chives & Pork Bao',
    description: 'Savory chives and pork filling',
    price: 45,
    category: 'special',
    availability: 'weekend',
  },
  {
    id: 'special-bolo-custard',
    name: 'Bolo Bao with Custard',
    description: 'Sweet pineapple bun with custard filling',
    price: 50,
    category: 'special',
    availability: 'monthly',
  },
  {
    id: 'special-bolo-sesame',
    name: 'Bolo Bao with Black Sesame',
    description: 'Sweet pineapple bun with black sesame filling',
    price: 50,
    category: 'special',
    availability: 'monthly',
  },
  {
    id: 'special-xlb',
    name: 'XLB (Soup Dumplings)',
    description: 'Pork, vegetable, or chicken soup dumplings',
    priceOption: '4 for 69KR',
    price: 69,
    category: 'special',
    availability: 'weekend',
  },
];

// DESSERT
export const desserts: MenuItem[] = [
  {
    id: 'dessert-black-sesame-ice',
    name: 'Black Sesame Soft Ice',
    description: 'Creamy soft-serve ice cream with nutty black sesame flavor',
    price: 60,
    category: 'dessert',
    isVegetarian: true,
    availability: 'everyday',
  },
];

// DRINKS
export const drinks: MenuItem[] = [
  {
    id: 'drink-americano',
    name: 'Americano',
    description: 'Espresso with hot water',
    price: 35,
    category: 'drink',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
];

// Combine all menu items
export const allMenuItems: MenuItem[] = [
  ...baos,
  ...bowls,
  ...toShare,
  ...specials,
  ...desserts,
  ...drinks,
];

// Export by category for easy access
export const menuByCategory = {
  baos,
  bowls,
  toShare,
  specials,
  desserts,
  drinks,
};

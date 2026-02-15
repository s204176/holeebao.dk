// Menu Data for Holee Bao
// This file contains all menu items, prices, and categories

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  price?: number;
  priceOption?: string; // For items like "1 for 30KR, 3 for 70KR"
  category: 'bao' | 'drink' | 'hot-drink';
  isVegetarian?: boolean;
  isVegan?: boolean;
  availability?: 'everyday' | 'weekend' | 'monthly';
  cookingMethod?: 'steamed' | 'pan-fried' | 'both';
  image?: string;
}

// BAOS - 1 for 30KR / 3 for 70KR (Steamed)
export const baos: MenuItem[] = [
  {
    id: 'bao-ducking-good',
    name: 'Duck Bao',
    description: 'Tender duck with hoisin and cucumber',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
  },
  {
    id: 'bao-mala-beef',
    name: 'Mala Beef Bao',
    description: 'Spicy Sichuan beef with numbing mala spice',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
  },
  {
    id: 'bao-pork',
    name: 'Pork Bao',
    description: 'Savory pork filling',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
  },
  {
    id: 'bao-veggie',
    name: 'Veggie Bao',
    description: 'Fresh vegetables with savory sauce',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
  {
    id: 'bao-custard',
    name: 'Custard Bao',
    description: 'Sweet golden custard filling',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    isVegetarian: true,
    availability: 'everyday',
  },
  {
    id: 'bao-char-siu',
    name: 'Char Siu Bao',
    description: 'Sweet and savory BBQ pork',
    priceOption: '1 for 30KR / 3 for 70KR',
    category: 'bao',
    cookingMethod: 'steamed',
    availability: 'everyday',
    image: '13',
  },
];

// COFFEE & DRINKS
export const drinks: MenuItem[] = [
  {
    id: 'drink-americano-large',
    name: 'Americano (Large)',
    description: 'Espresso with hot water',
    price: 35,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-americano-small',
    name: 'Americano (Small)',
    description: 'Espresso with hot water',
    price: 28,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-cappuccino',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 42,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-flat-white',
    name: 'Flat White',
    description: 'Espresso with velvety microfoam',
    price: 42,
    category: 'drink',
    availability: 'everyday',
  },
  {
    id: 'drink-latte',
    name: 'Latte',
    description: 'Espresso with steamed milk',
    price: 45,
    category: 'drink',
    availability: 'everyday',
  },
];

// HOT DRINKS
export const hotDrinks: MenuItem[] = [
  {
    id: 'hot-soya-milk',
    name: 'Hot Soya Milk',
    description: 'Homemade hot soya milk',
    price: 35,
    category: 'hot-drink',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
  {
    id: 'hot-jasmine-tea',
    name: 'Jasmine Tea',
    description: 'Fragrant jasmine tea',
    price: 25,
    category: 'hot-drink',
    isVegetarian: true,
    isVegan: true,
    availability: 'everyday',
  },
];

// Combine all menu items
export const allMenuItems: MenuItem[] = [...baos, ...drinks, ...hotDrinks];

// Export by category for easy access
export const menuByCategory = {
  baos,
  drinks,
  hotDrinks,
};

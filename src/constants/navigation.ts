import { Home, Grid3X3, ShoppingBag, UserCircle } from 'lucide-react';

export const desktopNavigation = [
  { name: 'Home', href: 'home' },
  { name: 'New Arrivals', href: 'catalog/new' },
  { name: 'Necklaces', href: 'catalog/necklaces' },
  { name: 'Bracelets', href: 'catalog/bracelets' },
  { name: 'Earrings', href: 'catalog/earrings' },
  { name: 'Rings', href: 'catalog/rings' },
  { name: 'Collections', href: 'collections' },
];

export const mobileNavigation = [
  { name: 'Home', href: 'home', icon: Home },
  { name: 'Shop', href: 'catalog', icon: Grid3X3 },
  { name: 'Cart', href: 'cart', icon: ShoppingBag },
  { name: 'Account', href: 'account', icon: UserCircle },
];

export const mobileMenuItems = [
  ...desktopNavigation,
  { name: 'Wishlist', href: 'wishlist' },
  { name: 'Shopping Bag', href: 'cart' },
  { name: 'My Account', href: 'account' },
];
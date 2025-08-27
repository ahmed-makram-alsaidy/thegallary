import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from './ui/sheet';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
import { LanguageSwitcher } from './LanguageSwitcher';
import { desktopNavigation, mobileNavigation, mobileMenuItems } from '../constants/navigation';
import { useTranslation } from './RTLProvider';
import exampleLogo from 'figma:asset/6d6ce35b970d9d4a2fa8c61fceb6f27b1523b7da.png';
import { 
  ShoppingBag, 
  Menu, 
  Search, 
  User,
  Heart
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount] = useState(2); // Mock cart count
  const [wishlistCount] = useState(5); // Mock wishlist count
  const { t, language } = useTranslation();
  const isRTL = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePage = (href: string) => {
    if (href === 'home') return currentPage === 'home';
    if (href === 'catalog') return currentPage.startsWith('catalog');
    if (href === 'collections') return currentPage === 'collections';
    return currentPage === href || currentPage.startsWith(href);
  };

  const headerClass = `sticky top-0 z-50 transition-all duration-200 ${
    isScrolled 
      ? 'bg-gallery-white/95 backdrop-blur-sm shadow-sm border-b border-gallery-dark-brown/10' 
      : 'bg-gallery-white border-b border-gallery-dark-brown/20'
  }`;

  // Navigation items with translations
  const translatedDesktopNav = [
    { name: t('nav.home'), href: 'home' },
    { name: t('category.newArrivals'), href: 'catalog/new' },
    { name: t('category.necklaces'), href: 'catalog/necklaces' },
    { name: t('category.bracelets'), href: 'catalog/bracelets' },
    { name: t('category.earrings'), href: 'catalog/earrings' },
    { name: t('category.rings'), href: 'catalog/rings' },
    { name: t('nav.collections'), href: 'collections' },
  ];

  const translatedMobileNav = [
    { name: t('nav.home'), href: 'home', icon: mobileNavigation[0].icon },
    { name: t('nav.shop'), href: 'catalog', icon: mobileNavigation[1].icon },
    { name: t('nav.cart'), href: 'cart', icon: mobileNavigation[2].icon },
    { name: t('nav.account'), href: 'account', icon: mobileNavigation[3].icon },
  ];

  const translatedMobileMenu = [
    ...translatedDesktopNav,
    { name: t('nav.wishlist'), href: 'wishlist' },
    { name: t('nav.cart'), href: 'cart' },
    { name: t('nav.account'), href: 'account' },
  ];

  return (
    <div className={`min-h-screen bg-gallery-white flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Desktop Header */}
      <header className={headerClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <ImageWithFallback
                src={exampleLogo}
                alt="THE GALLERY Logo"
                className="h-10 w-auto lg:h-12"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {translatedDesktopNav.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.href)}
                  className={`transition-colors relative group ${
                    isActivePage(item.href)
                      ? 'text-gallery-dark-brown'
                      : 'text-gallery-dark-brown/70 hover:text-gallery-dark-brown'
                  }`}
                >
                  {item.name}
                  {isActivePage(item.href) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gallery-rose-gold rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageSwitcher />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('search')}
                className="text-gallery-dark-brown hover:text-gallery-rose-gold"
                title={t('common.search')}
              >
                <Search className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('wishlist')}
                className="text-gallery-dark-brown hover:text-gallery-rose-gold relative"
                title={t('nav.wishlist')}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-gallery-rose-gold">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('cart')}
                className="text-gallery-dark-brown hover:text-gallery-rose-gold relative"
                title={t('nav.cart')}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-gallery-rose-gold">
                    {cartCount}
                  </Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('auth')}
                className="text-gallery-dark-brown hover:text-gallery-rose-gold"
                title={t('nav.account')}
              >
                <User className="w-5 h-5" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-4 rtl:space-x-reverse">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('search')}
                className="text-gallery-dark-brown"
              >
                <Search className="w-5 h-5" />
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gallery-dark-brown">
                    <Menu className="w-5 h-5" />
                    <span className="sr-only">{isRTL ? 'فتح القائمة' : 'Open menu'}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side={isRTL ? "left" : "right"} className="w-80 bg-gallery-white">
                  <SheetHeader>
                    <SheetTitle className="sr-only">
                      {isRTL ? 'قائمة التنقل' : 'Navigation Menu'}
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                      {isRTL ? 'الوصول إلى جميع صفحات الموقع' : 'Access all website pages'}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col h-full">
                    {/* Mobile Logo & Language */}
                    <div className="flex items-center justify-between mb-8">
                      <ImageWithFallback
                        src={exampleLogo}
                        alt="THE GALLERY Logo"
                        className="h-8 w-auto"
                      />
                      <LanguageSwitcher />
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1">
                      <div className="space-y-1">
                        {translatedMobileMenu.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => onNavigate(item.href)}
                            className={`w-full text-left px-3 py-3 rounded-lg transition-colors flex items-center justify-between rtl:text-right ${
                              isActivePage(item.href)
                                ? 'bg-gallery-beige text-gallery-dark-brown'
                                : 'text-gallery-dark-brown/70 hover:bg-gallery-beige/50 hover:text-gallery-dark-brown'
                            }`}
                          >
                            <span>{item.name}</span>
                            {(item.href === 'wishlist' && wishlistCount > 0) && (
                              <Badge className="bg-gallery-rose-gold text-gallery-white">
                                {wishlistCount}
                              </Badge>
                            )}
                            {(item.href === 'cart' && cartCount > 0) && (
                              <Badge className="bg-gallery-rose-gold text-gallery-white">
                                {cartCount}
                              </Badge>
                            )}
                          </button>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile Footer */}
                    <div className="mt-auto pt-6 border-t border-gallery-dark-brown/20">
                      <Button 
                        onClick={() => onNavigate('auth')}
                        className="w-full mb-4"
                      >
                        {t('auth.signIn')} / {t('auth.signUp')}
                      </Button>
                      <div className="text-center text-sm text-gallery-dark-brown/60">
                        <button 
                          onClick={() => onNavigate('contact')}
                          className="hover:text-gallery-dark-brown transition-colors"
                        >
                          {t('nav.contact')}
                        </button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gallery-white border-t border-gallery-dark-brown/20 z-40">
        <div className="grid grid-cols-4">
          {translatedMobileNav.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.href)}
              className={`flex flex-col items-center py-3 px-2 transition-colors relative ${
                isActivePage(item.href)
                  ? 'text-gallery-rose-gold'
                  : 'text-gallery-dark-brown/60 hover:text-gallery-dark-brown'
              }`}
            >
              <div className="relative">
                <item.icon className="w-6 h-6" />
                {((item.href === 'cart' && cartCount > 0)) && (
                  <Badge className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center p-0 text-xs bg-gallery-rose-gold">
                    {cartCount}
                  </Badge>
                )}
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="lg:hidden h-20" />
    </div>
  );
}
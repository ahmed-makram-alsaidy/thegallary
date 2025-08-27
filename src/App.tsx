import { useState, useEffect } from 'react';
import { RTLProvider } from './components/RTLProvider';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { CatalogPage } from './components/CatalogPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { WishlistPage } from './components/WishlistPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderSuccessPage } from './components/OrderSuccessPage';
import { AccountPage } from './components/AccountPage';
import { AuthPage } from './components/AuthPage';
import { AdminDashboard } from './components/AdminDashboard';
import { StaticPages } from './components/StaticPages';
import { DesignSystem } from './components/DesignSystem';
import { DesignPortfolio } from './components/DesignPortfolio';
import { ClientPresentation } from './components/ClientPresentation';
import { Toaster } from './components/ui/sonner';

type Page = 
  | 'home'
  | 'catalog'
  | 'catalog/necklaces'
  | 'catalog/bracelets'
  | 'catalog/earrings'
  | 'catalog/rings'
  | 'catalog/new'
  | 'catalog/limited'
  | 'collections'
  | 'wishlist'
  | 'cart'
  | 'checkout'
  | 'order-success'
  | 'account'
  | 'auth'
  | 'auth/login'
  | 'auth/register'
  | 'auth/forgot'
  | 'admin'
  | 'design-system'
  | 'design-portfolio'
  | 'client-presentation'
  | 'about'
  | 'contact'
  | 'shipping'
  | 'returns'
  | 'size-guide'
  | 'care-guide'
  | 'warranty'
  | 'terms'
  | 'privacy'
  | 'accessibility'
  | 'search'
  | '404'
  | string; // For dynamic routes like product/123

export default function App() {
  // Initialize state from the browser's URL path, defaulting to 'home'
  const [currentPage, setCurrentPage] = useState<Page>(window.location.pathname.substring(1) || 'home');

  /**
   * This effect listens for browser navigation events (back/forward buttons)
   * and updates the app's state to match the URL.
   */
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname.substring(1) || 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  /**
   * Handles internal navigation.
   * It updates the browser's URL using the History API and then updates the app's state.
   * @param {Page} page - The new page to navigate to.
   */
  const handleNavigate = (page: Page) => {
    // Update the URL in the browser's address bar
    window.history.pushState({}, '', `/${page}`);
    setCurrentPage(page);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Handle product detail pages
    if (currentPage.startsWith('product/')) {
      const productId = currentPage.split('/')[1];
      return <ProductDetailPage productId={productId} onNavigate={handleNavigate} />;
    }

    // Handle catalog pages
    if (currentPage.startsWith('catalog')) {
      const category = currentPage.split('/')[1] || 'all';
      return <CatalogPage category={category} onNavigate={handleNavigate} />;
    }

    // Handle auth pages
    if (currentPage.startsWith('auth')) {
      const authPage = currentPage.split('/')[1];
      const initialTab = authPage === 'register' ? 'register' : authPage === 'forgot' ? 'forgot' : 'login';
      return <AuthPage onNavigate={handleNavigate} initialTab={initialTab} />;
    }

    // Handle static pages
    const staticPages = ['about', 'contact', 'shipping', 'returns', 'size-guide', 'care-guide', 'warranty', 'terms', 'privacy', 'accessibility'];
    if (staticPages.includes(currentPage)) {
      return <StaticPages page={currentPage} onNavigate={handleNavigate} />;
    }

    // Handle other pages
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      
      case 'collections':
        return <CatalogPage category="all" onNavigate={handleNavigate} />;
      
      case 'wishlist':
        return <WishlistPage onNavigate={handleNavigate} />;
      
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      
      case 'order-success':
        return <OrderSuccessPage onNavigate={handleNavigate} />;
      
      case 'account':
        return <AccountPage onNavigate={handleNavigate} />;
      
      case 'auth':
        return <AuthPage onNavigate={handleNavigate} />;
      
      case 'admin':
        return <AdminDashboard onNavigate={handleNavigate} />;
      
      case 'design-system':
        return <DesignSystem onNavigate={handleNavigate} />;
      
      case 'design-portfolio':
        return <DesignPortfolio onNavigate={handleNavigate} />;
      
      case 'client-presentation':
        return <ClientPresentation onNavigate={handleNavigate} />;
      
      case 'search':
        return <CatalogPage category="search" onNavigate={handleNavigate} />;
      
      case '404':
        return <StaticPages page="404" onNavigate={handleNavigate} />;
      
      default:
        // If the path is empty, it's the home page
        if (!currentPage) {
          return <HomePage onNavigate={handleNavigate} />;
        }
        return <StaticPages page="404" onNavigate={handleNavigate} />;
    }
  };

  const toasterStyles = {
    background: 'var(--gallery-white)',
    color: 'var(--gallery-dark-brown)',
    border: '1px solid var(--gallery-beige)',
  };

  // Don't wrap admin dashboard, design system, design portfolio, and client presentation in main layout
  if (currentPage === 'admin' || currentPage === 'design-system' || currentPage === 'design-portfolio' || currentPage === 'client-presentation') {
    return (
      <RTLProvider defaultLanguage="en">
        {renderPage()}
        <Toaster 
          position="top-right" 
          toastOptions={{ style: toasterStyles }}
        />
      </RTLProvider>
    );
  }

  return (
    <RTLProvider defaultLanguage="en">
      <Layout currentPage={currentPage} onNavigate={handleNavigate}>
        {renderPage()}
      </Layout>
      <Toaster 
        position="top-right" 
        toastOptions={{ style: toasterStyles }}
      />
    </RTLProvider>
  );
}

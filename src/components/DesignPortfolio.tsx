import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import exampleLogo from 'figma:asset/6d6ce35b970d9d4a2fa8c61fceb6f27b1523b7da.png';
import { 
  Download,
  Palette,
  Type,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  ShoppingBag,
  Heart,
  User,
  Settings,
  Star,
  Check,
  ArrowRight,
  Home,
  Search,
  Filter,
  ShoppingCart,
  Package,
  CreditCard,
  Truck,
  Users,
  BarChart3,
  Languages,
  Layout,
  Zap,
  Shield,
  Grid3X3
} from 'lucide-react';

interface DesignPortfolioProps {
  onNavigate: (page: string) => void;
}

export function DesignPortfolio({ onNavigate }: DesignPortfolioProps) {
  const [currentSection, setCurrentSection] = useState('overview');

  const brandColors = [
    { name: 'Gallery White', hex: '#FFFFFF', class: 'bg-gallery-white border-2 border-gallery-dark-brown/20' },
    { name: 'Gallery Beige', hex: '#F6EFE9', class: 'bg-gallery-beige' },
    { name: 'Gallery Dark Brown', hex: '#8B4513', class: 'bg-gallery-dark-brown' },
    { name: 'Gallery Rose Gold', hex: '#B76E79', class: 'bg-gallery-rose-gold' },
    { name: 'Gallery Gold', hex: '#D4AF37', class: 'bg-gallery-gold' },
    { name: 'Gallery Silver', hex: '#C0C0C0', class: 'bg-gallery-silver' },
    { name: 'Gallery Black', hex: '#111111', class: 'bg-gallery-black' }
  ];

  const features = [
    {
      title: 'Premium E-Commerce Platform',
      description: 'Complete shopping experience with product catalog, cart, wishlist, and secure checkout',
      icon: ShoppingBag,
      color: 'text-gallery-rose-gold'
    },
    {
      title: 'Responsive Design',
      description: 'Optimized for desktop, tablet, and mobile devices with touch-friendly interactions',
      icon: Grid3X3,
      color: 'text-gallery-gold'
    },
    {
      title: 'Multi-Language Support',
      description: 'Full English and Arabic support with RTL layout for Middle Eastern markets',
      icon: Languages,
      color: 'text-gallery-silver'
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin panel for managing products, orders, customers, and analytics',
      icon: Settings,
      color: 'text-gallery-dark-brown'
    },
    {
      title: 'Design System',
      description: 'Consistent brand experience with custom color palette, typography, and components',
      icon: Palette,
      color: 'text-gallery-rose-gold'
    },
    {
      title: 'User Authentication',
      description: 'Secure login, registration, and account management with social media integration',
      icon: Shield,
      color: 'text-gallery-gold'
    }
  ];

  const pages = [
    {
      title: 'Homepage',
      description: 'Hero section with featured products and brand introduction',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBob21lcGFnZXxlbnwxfHx8fDE3NTYzMjgyOTB8MA&ixlib=rb-4.1.0&q=80&w=800'
    },
    {
      title: 'Product Catalog',
      description: 'Filterable product grid with categories and search functionality',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwY2F0YWxvZ3xlbnwxfHx8fDE3NTYzMjkyNzl8MA&ixlib=rb-4.1.0&q=80&w=800'
    },
    {
      title: 'Product Detail',
      description: 'Detailed product view with image gallery, reviews, and purchasing options',
      image: 'https://images.unsplash.com/photo-1654700194896-6318cdc3b184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ29sZCUyMGVhcnJpbmdzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjkyNzl8MA&ixlib=rb-4.1.0&q=80&w=800'
    },
    {
      title: 'Shopping Cart',
      description: 'Cart management with quantity adjustment and price calculations',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnR8ZW58MXx8fHwxNzU2MzI5Mjc5fDA&ixlib=rb-4.1.0&q=80&w=800'
    },
    {
      title: 'Checkout Process',
      description: 'Secure multi-step checkout with shipping and payment options',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVja291dCUyMHBheW1lbnR8ZW58MXx8fHwxNzU2MzI5Mjc5fDA&ixlib=rb-4.1.0&q=80&w=800'
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin interface for store management and analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZG1pbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYzMjkyNzl8MA&ixlib=rb-4.1.0&q=80&w=800'
    }
  ];

  const components = [
    {
      title: 'Buttons',
      description: 'Primary, secondary, and tertiary button variants with hover states',
      examples: ['Primary Action', 'Secondary Option', 'Text Link']
    },
    {
      title: 'Cards',
      description: 'Product cards, information cards, and dashboard widgets',
      examples: ['Product Card', 'Info Card', 'Stats Card']
    },
    {
      title: 'Forms',
      description: 'Input fields, selects, checkboxes, and form validation',
      examples: ['Text Input', 'Select Menu', 'Checkbox']
    },
    {
      title: 'Navigation',
      description: 'Header navigation, mobile menu, and breadcrumbs',
      examples: ['Main Nav', 'Mobile Menu', 'Breadcrumbs']
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Create a new window with print styles
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>THE GALLERY - Design Portfolio</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
            @media print {
              * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
              body { font-family: 'Poppins', sans-serif; }
              h1, h2, h3 { font-family: 'Playfair Display', serif; }
              .no-print { display: none !important; }
              .page-break { page-break-before: always; }
            }
          </style>
          ${document.head.innerHTML}
        </head>
        <body>
          ${document.getElementById('design-portfolio')?.innerHTML}
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div id="design-portfolio" className="min-h-screen bg-gallery-white">
      {/* Header - No Print */}
      <div className="no-print sticky top-0 z-50 bg-gallery-white border-b border-gallery-dark-brown/20 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <ImageWithFallback
              src={exampleLogo}
              alt="THE GALLERY Logo"
              className="h-10 w-auto"
            />
            <div>
              <h1>Design Portfolio</h1>
              <p className="text-gallery-dark-brown/70 mt-1">THE GALLERY E-Commerce Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handlePrint} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Print PDF
            </Button>
            <Button onClick={() => onNavigate('home')}>
              View Live Site
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* Cover Page */}
        <section className="text-center py-16 bg-gradient-to-br from-gallery-beige to-gallery-white rounded-2xl">
          <ImageWithFallback
            src={exampleLogo}
            alt="THE GALLERY Logo"
            className="h-24 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl text-gallery-dark-brown mb-6">
            THE GALLERY
          </h1>
          <p className="text-xl text-gallery-dark-brown/80 mb-8 max-w-2xl mx-auto">
            Premium Stainless Steel Accessories for the Modern Woman
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-gallery-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Monitor className="w-8 h-8 text-gallery-rose-gold" />
              </div>
              <p className="font-medium text-gallery-dark-brown">Desktop</p>
            </div>
            <div className="text-center">
              <div className="bg-gallery-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Tablet className="w-8 h-8 text-gallery-gold" />
              </div>
              <p className="font-medium text-gallery-dark-brown">Tablet</p>
            </div>
            <div className="text-center">
              <div className="bg-gallery-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Smartphone className="w-8 h-8 text-gallery-silver" />
              </div>
              <p className="font-medium text-gallery-dark-brown">Mobile</p>
            </div>
            <div className="text-center">
              <div className="bg-gallery-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Globe className="w-8 h-8 text-gallery-dark-brown" />
              </div>
              <p className="font-medium text-gallery-dark-brown">Global</p>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="page-break">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Design System</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              A cohesive design language that ensures consistency across all touchpoints, 
              reflecting the premium and feminine aesthetic of THE GALLERY brand.
            </p>
          </div>

          {/* Color Palette */}
          <div className="mb-12">
            <h3 className="text-gallery-dark-brown mb-6 flex items-center gap-2">
              <Palette className="w-6 h-6 text-gallery-rose-gold" />
              Brand Color Palette
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {brandColors.map((color) => (
                <div key={color.name} className="text-center">
                  <div className={`${color.class} w-full h-20 rounded-lg mb-3 shadow-sm`}></div>
                  <p className="font-medium text-gallery-dark-brown text-sm">{color.name}</p>
                  <p className="text-gallery-dark-brown/60 text-xs">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <h3 className="text-gallery-dark-brown mb-6 flex items-center gap-2">
              <Type className="w-6 h-6 text-gallery-rose-gold" />
              Typography Scale
            </h3>
            <div className="bg-gallery-beige rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-gallery-dark-brown">Heading 1 - Playfair Display</h1>
                  <p className="text-gallery-dark-brown/60 text-sm">36px / 2.25rem - Semibold</p>
                </div>
                <div>
                  <h2 className="text-gallery-dark-brown">Heading 2 - Playfair Display</h2>
                  <p className="text-gallery-dark-brown/60 text-sm">30px / 1.875rem - Semibold</p>
                </div>
                <div>
                  <h3 className="text-gallery-dark-brown">Heading 3 - Playfair Display</h3>
                  <p className="text-gallery-dark-brown/60 text-sm">24px / 1.5rem - Medium</p>
                </div>
                <div>
                  <p className="text-gallery-dark-brown">Body Text - Poppins Regular</p>
                  <p className="text-gallery-dark-brown/60 text-sm">16px / 1rem - Regular</p>
                </div>
                <div>
                  <p className="text-gallery-dark-brown text-sm">Small Text - Poppins Regular</p>
                  <p className="text-gallery-dark-brown/60 text-sm">14px / 0.875rem - Regular</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="page-break">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Platform Features</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              A comprehensive e-commerce solution built for the luxury jewelry market 
              with advanced features and exceptional user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gallery-dark-brown/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gallery-beige rounded-lg p-3">
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-gallery-dark-brown">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gallery-dark-brown/70">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Page Showcases */}
        <section className="page-break">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Page Designs</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Every page is carefully crafted to provide an intuitive and luxurious 
              shopping experience across all devices and languages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pages.map((page, index) => (
              <Card key={index} className="overflow-hidden border-gallery-dark-brown/20">
                <div className="aspect-video bg-gallery-beige overflow-hidden">
                  <ImageWithFallback
                    src={page.image}
                    alt={page.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gallery-dark-brown">{page.title}</CardTitle>
                  <CardDescription className="text-gallery-dark-brown/70">
                    {page.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Component Library */}
        <section className="page-break">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Component Library</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Reusable UI components built with accessibility and consistency in mind, 
              ensuring a cohesive experience across the entire platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="border-gallery-dark-brown/20">
                <CardHeader>
                  <CardTitle className="text-gallery-dark-brown">{component.title}</CardTitle>
                  <CardDescription className="text-gallery-dark-brown/70">
                    {component.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {component.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gallery-rose-gold rounded-full"></div>
                        <span className="text-gallery-dark-brown/80">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="page-break">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Technical Specifications</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Built with modern web technologies for optimal performance, 
              accessibility, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gallery-dark-brown/20">
              <CardHeader>
                <CardTitle className="text-gallery-dark-brown flex items-center gap-2">
                  <Zap className="w-5 h-5 text-gallery-rose-gold" />
                  Frontend Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gallery-dark-brown/80">
                  <li>• React 18 with TypeScript</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• Radix UI Components</li>
                  <li>• Lucide React Icons</li>
                  <li>• Custom Design System</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gallery-dark-brown/20">
              <CardHeader>
                <CardTitle className="text-gallery-dark-brown flex items-center gap-2">
                  <Layout className="w-5 h-5 text-gallery-gold" />
                  Design Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gallery-dark-brown/80">
                  <li>• Responsive Design</li>
                  <li>• RTL Language Support</li>
                  <li>• Accessibility (WCAG 2.1)</li>
                  <li>• Print-Optimized</li>
                  <li>• Progressive Enhancement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gallery-dark-brown/20">
              <CardHeader>
                <CardTitle className="text-gallery-dark-brown flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-gallery-silver" />
                  E-Commerce Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gallery-dark-brown/80">
                  <li>• Product Catalog</li>
                  <li>• Shopping Cart</li>
                  <li>• Secure Checkout</li>
                  <li>• User Authentication</li>
                  <li>• Admin Dashboard</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mobile Experience */}
        <section className="page-break">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Mobile Experience</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Optimized mobile experience with touch-friendly interactions 
              and native app-like performance.
            </p>
          </div>

          <div className="bg-gallery-beige rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-gallery-white rounded-2xl p-6 shadow-sm mb-4">
                  <Smartphone className="w-12 h-12 text-gallery-rose-gold mx-auto mb-3" />
                  <h4 className="text-gallery-dark-brown mb-2">Mobile First</h4>
                  <p className="text-gallery-dark-brown/70 text-sm">
                    Designed and optimized for mobile devices from the ground up
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gallery-white rounded-2xl p-6 shadow-sm mb-4">
                  <Zap className="w-12 h-12 text-gallery-gold mx-auto mb-3" />
                  <h4 className="text-gallery-dark-brown mb-2">Fast Performance</h4>
                  <p className="text-gallery-dark-brown/70 text-sm">
                    Optimized loading times and smooth animations
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gallery-white rounded-2xl p-6 shadow-sm mb-4">
                  <Heart className="w-12 h-12 text-gallery-silver mx-auto mb-3" />
                  <h4 className="text-gallery-dark-brown mb-2">Touch Friendly</h4>
                  <p className="text-gallery-dark-brown/70 text-sm">
                    Large touch targets and intuitive gestures
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Badge variant="outline" className="justify-center py-2">iOS Safari</Badge>
              <Badge variant="outline" className="justify-center py-2">Chrome Mobile</Badge>
              <Badge variant="outline" className="justify-center py-2">Samsung Internet</Badge>
              <Badge variant="outline" className="justify-center py-2">Firefox Mobile</Badge>
            </div>
          </div>
        </section>

        {/* RTL Support */}
        <section className="page-break">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Arabic & RTL Support</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Complete Arabic language support with right-to-left layout 
              for Middle Eastern markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-gallery-dark-brown/20">
              <CardHeader>
                <CardTitle className="text-gallery-dark-brown flex items-center gap-2">
                  <Languages className="w-5 h-5 text-gallery-rose-gold" />
                  English Version
                </CardTitle>
                <CardDescription>Left-to-right layout with English text</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gallery-beige rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gallery-dark-brown font-medium">THE GALLERY</span>
                    <div className="flex gap-2">
                      <ShoppingBag className="w-4 h-4 text-gallery-dark-brown" />
                      <User className="w-4 h-4 text-gallery-dark-brown" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <p className="text-gallery-dark-brown">Premium Jewelry Collection</p>
                    <p className="text-gallery-dark-brown/70 text-sm">Elegant stainless steel accessories</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gallery-dark-brown/20">
              <CardHeader>
                <CardTitle className="text-gallery-dark-brown flex items-center gap-2">
                  <Languages className="w-5 h-5 text-gallery-gold" />
                  Arabic Version
                </CardTitle>
                <CardDescription>Right-to-left layout with Arabic text</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gallery-beige rounded-lg p-4 space-y-3 rtl">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <User className="w-4 h-4 text-gallery-dark-brown" />
                      <ShoppingBag className="w-4 h-4 text-gallery-dark-brown" />
                    </div>
                    <span className="text-gallery-dark-brown font-medium">المعرض</span>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-right">
                    <p className="text-gallery-dark-brown">مجموعة المجوهرات الفاخرة</p>
                    <p className="text-gallery-dark-brown/70 text-sm">إكسسوارات الستانلس ستيل الأنيقة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer - Contact Information */}
        <section className="text-center py-12 border-t border-gallery-dark-brown/20">
          <ImageWithFallback
            src={exampleLogo}
            alt="THE GALLERY Logo"
            className="h-16 w-auto mx-auto mb-6"
          />
          <h3 className="text-gallery-dark-brown mb-4">Thank You</h3>
          <p className="text-gallery-dark-brown/70 mb-6 max-w-xl mx-auto">
            This comprehensive design portfolio showcases THE GALLERY's complete 
            e-commerce platform, designed for the modern luxury jewelry market.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gallery-dark-brown/60">
            <span>THE GALLERY</span>
            <span>•</span>
            <span>Premium E-Commerce Platform</span>
            <span>•</span>
            <span>2024</span>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            @page { 
              margin: 1in; 
              size: letter; 
            }
            .no-print { 
              display: none !important; 
            }
            .page-break { 
              page-break-before: always; 
            }
            * { 
              -webkit-print-color-adjust: exact !important; 
              color-adjust: exact !important; 
            }
            body { 
              font-size: 12pt; 
              line-height: 1.4; 
            }
            h1 { font-size: 28pt; }
            h2 { font-size: 22pt; }
            h3 { font-size: 18pt; }
            h4 { font-size: 16pt; }
          }
        `
      }} />
    </div>
  );
}
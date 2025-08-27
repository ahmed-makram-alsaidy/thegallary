import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Globe, 
  Star,
  CheckCircle,
  Eye,
  Settings,
  BarChart3,
  CreditCard,
  Truck,
  ArrowRight,
  Palette,
  Type,
  Layout,
  Layers
} from 'lucide-react';

type Page = string;

interface ClientPresentationProps {
  onNavigate: (page: Page) => void;
}

export function ClientPresentation({ onNavigate }: ClientPresentationProps) {
  const [selectedFeature, setSelectedFeature] = useState('overview');

  const pageScreenshots = [
    {
      title: 'الصفحة الرئيسية',
      titleEn: 'Home Page',
      description: 'واجهة أنيقة مع عرض المجموعات والمنتجات المميزة',
      descriptionEn: 'Elegant interface showcasing featured collections and products',
      image: 'https://images.unsplash.com/photo-1739664664545-5ea43f486f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZGlzcGxheSUyMHNob3djYXNlfGVufDF8fHx8MTc1NjMxNjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      page: 'home'
    },
    {
      title: 'كتالوج المنتجات',
      titleEn: 'Product Catalog',
      description: 'عرض منظم لجميع المنتجات مع فلاتر متقدمة',
      descriptionEn: 'Organized display of all products with advanced filters',
      image: 'https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MjcyODc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      page: 'catalog'
    },
    {
      title: 'تفاصيل المنتج',
      titleEn: 'Product Details',
      description: 'عرض مفصل للمنتج مع إمكانية الشراء',
      descriptionEn: 'Detailed product view with purchase options',
      image: 'https://images.unsplash.com/photo-1708221269975-cc31682c7fc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeSUyMGJveCUyMHByZW1pdW18ZW58MXx8fHwxNzU2MzMxNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      page: 'product/1'
    },
    {
      title: 'سلة المشتريات',
      titleEn: 'Shopping Cart',
      description: 'إدارة المنتجات المحددة قبل الدفع',
      descriptionEn: 'Manage selected products before checkout',
      image: 'https://images.unsplash.com/photo-1702479744031-2bf1f4bdfd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NTYzMzE2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      page: 'cart'
    }
  ];

  const features = [
    {
      id: 'responsive',
      title: 'تصميم متجاوب',
      titleEn: 'Responsive Design',
      description: 'يعمل بشكل مثالي على جميع الأجهزة',
      descriptionEn: 'Works perfectly on all devices',
      icon: <Smartphone className="h-6 w-6" />,
      details: [
        'Mobile-first responsive design',
        'Optimized for tablets and desktops',
        'Touch-friendly interface',
        'Fast loading on all devices'
      ]
    },
    {
      id: 'rtl',
      title: 'دعم اللغة العربية',
      titleEn: 'Arabic RTL Support',
      description: 'دعم كامل للغة العربية والإنجليزية',
      descriptionEn: 'Full Arabic and English language support',
      icon: <Globe className="h-6 w-6" />,
      details: [
        'Right-to-left (RTL) layout support',
        'Arabic/English language switcher',
        'Localized content and UI',
        'Cultural adaptation'
      ]
    },
    {
      id: 'ecommerce',
      title: 'متجر إلكتروني متكامل',
      titleEn: 'Complete E-commerce',
      description: 'جميع مميزات التجارة الإلكترونية',
      descriptionEn: 'All e-commerce features included',
      icon: <ShoppingBag className="h-6 w-6" />,
      details: [
        'Product catalog with categories',
        'Shopping cart and wishlist',
        'Secure checkout process',
        'Order management system'
      ]
    },
    {
      id: 'admin',
      title: 'لوحة تحكم إدارية',
      titleEn: 'Admin Dashboard',
      description: 'إدارة شاملة للمتجر والطلبات',
      descriptionEn: 'Comprehensive store and order management',
      icon: <Settings className="h-6 w-6" />,
      details: [
        'Product inventory management',
        'Order tracking and fulfillment',
        'Customer management',
        'Analytics and reporting'
      ]
    },
    {
      id: 'design',
      title: 'تصميم فاخر ومميز',
      titleEn: 'Premium Design',
      description: 'هوية بصرية أنيقة ومميزة',
      descriptionEn: 'Elegant and distinctive visual identity',
      icon: <Palette className="h-6 w-6" />,
      details: [
        'Luxury brand aesthetics',
        'Custom color palette',
        'Premium typography system',
        'Smooth animations and interactions'
      ]
    },
    {
      id: 'security',
      title: 'الأمان والموثوقية',
      titleEn: 'Security & Reliability',
      description: 'حماية عالية لبيانات العملاء',
      descriptionEn: 'High-level customer data protection',
      icon: <ShieldCheck className="h-6 w-6" />,
      details: [
        'Secure payment processing',
        'Data encryption',
        'User authentication',
        'Privacy protection'
      ]
    }
  ];

  const technicalSpecs = [
    { label: 'Framework', value: 'React 18 + TypeScript' },
    { label: 'Styling', value: 'Tailwind CSS v4' },
    { label: 'UI Components', value: 'ShadCN UI Library' },
    { label: 'Icons', value: 'Lucide React' },
    { label: 'Typography', value: 'Playfair Display + Poppins' },
    { label: 'Responsive', value: 'Mobile-first Design' },
    { label: 'Internationalization', value: 'Arabic RTL + English' },
    { label: 'Performance', value: 'Optimized & Fast Loading' }
  ];

  const colorPalette = [
    { name: 'White', value: '#FFFFFF', description: 'Primary background' },
    { name: 'Beige', value: '#F6EFE9', description: 'Secondary background' },
    { name: 'Dark Brown', value: '#8B4513', description: 'Primary brand color' },
    { name: 'Rose Gold', value: '#B76E79', description: 'Accent color' },
    { name: 'Gold', value: '#D4AF37', description: 'Luxury accent' },
    { name: 'Silver', value: '#C0C0C0', description: 'Metallic accent' },
    { name: 'Black', value: '#111111', description: 'Text and contrast' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gallery-white via-gallery-beige/30 to-gallery-white">
      {/* Header */}
      <div className="bg-gallery-white border-b border-gallery-dark-brown/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gallery-dark-brown rounded-lg flex items-center justify-center">
                <span className="text-gallery-white font-bold text-lg">TG</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gallery-dark-brown">THE GALLERY</h1>
                <p className="text-gallery-dark-brown/70">E-commerce Platform Presentation</p>
              </div>
            </div>
            <Button 
              onClick={() => onNavigate('home')}
              className="bg-gallery-dark-brown hover:bg-gallery-dark-brown/90"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Live Site
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Premium E-commerce Solution
          </Badge>
          <h2 className="text-4xl font-bold text-gallery-dark-brown mb-6">
            Complete E-commerce Platform for Luxury Jewelry
          </h2>
          <p className="text-xl text-gallery-dark-brown/80 max-w-3xl mx-auto leading-relaxed">
            A sophisticated, bilingual e-commerce platform designed specifically for THE GALLERY, 
            featuring premium aesthetics, complete functionality, and seamless user experience across all devices.
          </p>
        </div>

        <Tabs value={selectedFeature} onValueChange={setSelectedFeature} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="demo">Demo</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gallery-dark-brown mb-6">
                  Complete E-commerce Solution
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gallery-rose-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gallery-dark-brown">Full-Featured E-commerce Platform</p>
                      <p className="text-gallery-dark-brown/70">Complete shopping experience from browsing to checkout</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gallery-rose-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gallery-dark-brown">Bilingual Support (Arabic/English)</p>
                      <p className="text-gallery-dark-brown/70">Full RTL support with seamless language switching</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gallery-rose-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gallery-dark-brown">Mobile-First Responsive Design</p>
                      <p className="text-gallery-dark-brown/70">Optimized for all devices and screen sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gallery-rose-gold mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gallery-dark-brown">Admin Dashboard</p>
                      <p className="text-gallery-dark-brown/70">Complete management system for products and orders</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739664664545-5ea43f486f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZGlzcGxheSUyMHNob3djYXNlfGVufDF8fHx8MTc1NjMxNjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury jewelry showcase"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gallery-dark-brown/20 to-transparent rounded-xl" />
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-gallery-dark-brown mb-2">15+</div>
                  <div className="text-gallery-dark-brown/70">Complete Pages</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-gallery-rose-gold mb-2">50+</div>
                  <div className="text-gallery-dark-brown/70">UI Components</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-gallery-gold mb-2">2</div>
                  <div className="text-gallery-dark-brown/70">Languages</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-gallery-silver mb-2">100%</div>
                  <div className="text-gallery-dark-brown/70">Responsive</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pages Tab */}
          <TabsContent value="pages" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gallery-dark-brown mb-4">
                Complete Page Collection
              </h3>
              <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
                Every page you need for a complete e-commerce experience, designed with attention to detail and user experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageScreenshots.map((page, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={page.image}
                      alt={page.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <Button
                      onClick={() => onNavigate(page.page)}
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      size="sm"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gallery-dark-brown mb-2">{page.titleEn}</h4>
                    <p className="text-sm text-gallery-dark-brown/70 mb-2">{page.descriptionEn}</p>
                    <div className="text-xs text-gallery-dark-brown/50 text-right" dir="rtl">
                      {page.title} - {page.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Pages List */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-gallery-dark-brown">Additional Pages Included</CardTitle>
                <CardDescription>Complete set of essential e-commerce pages</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Account Management', 'Order History', 'Wishlist', 'Checkout Process',
                    'Authentication (Login/Register)', 'About Us', 'Contact Us', 'Shipping Info',
                    'Returns Policy', 'Size Guide', 'Care Instructions', 'Warranty Info',
                    'Terms & Conditions', 'Privacy Policy', 'Admin Dashboard'
                  ].map((page, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gallery-beige/50 transition-colors">
                      <CheckCircle className="h-4 w-4 text-gallery-rose-gold flex-shrink-0" />
                      <span className="text-sm font-medium text-gallery-dark-brown">{page}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gallery-dark-brown mb-4">
                Comprehensive Feature Set
              </h3>
              <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
                Everything you need for a successful e-commerce platform, built with modern technologies and best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.id} className="p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-gallery-rose-gold/10 text-gallery-rose-gold">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gallery-dark-brown mb-1">{feature.titleEn}</h4>
                        <p className="text-sm text-gallery-dark-brown/70 mb-2">{feature.descriptionEn}</p>
                        <div className="text-xs text-gallery-dark-brown/50 text-right" dir="rtl">
                          {feature.title} - {feature.description}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gallery-dark-brown/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-gallery-rose-gold flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Design Tab */}
          <TabsContent value="design" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gallery-dark-brown mb-4">
                Premium Design System
              </h3>
              <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
                A carefully crafted design system that reflects the luxury and elegance of THE GALLERY brand.
              </p>
            </div>

            {/* Color Palette */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2 text-gallery-dark-brown">
                  <Palette className="h-5 w-5" />
                  Brand Color Palette
                </CardTitle>
                <CardDescription>Carefully selected colors that represent luxury and elegance</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {colorPalette.map((color) => (
                    <div key={color.name} className="text-center">
                      <div 
                        className="w-full h-20 rounded-lg mb-3 border border-gallery-dark-brown/20"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="text-sm font-semibold text-gallery-dark-brown">{color.name}</div>
                      <div className="text-xs text-gallery-dark-brown/70 font-mono">{color.value}</div>
                      <div className="text-xs text-gallery-dark-brown/50 mt-1">{color.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2 text-gallery-dark-brown">
                  <Type className="h-5 w-5" />
                  Typography System
                </CardTitle>
                <CardDescription>Premium fonts that enhance readability and brand identity</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gallery-dark-brown/70 mb-2">Headings - Playfair Display</div>
                    <div className="font-heading text-3xl text-gallery-dark-brown font-bold">Elegant Luxury Jewelry</div>
                  </div>
                  <Separator />
                  <div>
                    <div className="text-sm text-gallery-dark-brown/70 mb-2">Body Text - Poppins</div>
                    <div className="font-body text-lg text-gallery-dark-brown">
                      Premium stainless steel accessories designed for the modern woman who values elegance and quality.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design Principles */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-gallery-rose-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layout className="h-6 w-6 text-gallery-rose-gold" />
                </div>
                <h4 className="font-bold text-gallery-dark-brown mb-2">Minimal & Clean</h4>
                <p className="text-sm text-gallery-dark-brown/70">
                  Clean layouts that focus attention on the products and create a premium feel.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-gallery-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-gallery-gold" />
                </div>
                <h4 className="font-bold text-gallery-dark-brown mb-2">Luxury Aesthetic</h4>
                <p className="text-sm text-gallery-dark-brown/70">
                  Premium visual elements that reflect the high-quality nature of the products.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-gallery-silver/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-6 w-6 text-gallery-silver" />
                </div>
                <h4 className="font-bold text-gallery-dark-brown mb-2">Consistent System</h4>
                <p className="text-sm text-gallery-dark-brown/70">
                  Cohesive design language across all pages and components for seamless experience.
                </p>
              </Card>
            </div>
          </TabsContent>

          {/* Technical Tab */}
          <TabsContent value="technical" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gallery-dark-brown mb-4">
                Technical Specifications
              </h3>
              <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
                Built with modern technologies and best practices for performance, scalability, and maintainability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-gallery-dark-brown">Technology Stack</CardTitle>
                  <CardDescription>Modern, reliable technologies for optimal performance</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    {technicalSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gallery-beige/50 last:border-0">
                        <span className="text-gallery-dark-brown/70">{spec.label}</span>
                        <span className="font-semibold text-gallery-dark-brown">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-gallery-dark-brown">Key Features</CardTitle>
                  <CardDescription>Advanced functionality for optimal user experience</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-3">
                    {[
                      'Server-side rendering ready',
                      'Progressive Web App (PWA) capabilities',
                      'SEO optimized structure',
                      'Accessibility compliant (WCAG 2.1)',
                      'Cross-browser compatibility',
                      'Performance optimized',
                      'Component-based architecture',
                      'Type-safe development'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-gallery-rose-gold flex-shrink-0" />
                        <span className="text-sm text-gallery-dark-brown">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Device Compatibility */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-gallery-dark-brown">Device Compatibility</CardTitle>
                <CardDescription>Optimized for all devices and screen sizes</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-gallery-beige/20">
                    <Smartphone className="h-8 w-8 text-gallery-rose-gold mx-auto mb-3" />
                    <h4 className="font-semibold text-gallery-dark-brown mb-2">Mobile</h4>
                    <p className="text-sm text-gallery-dark-brown/70">Optimized for touch interfaces and small screens</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gallery-beige/20">
                    <Tablet className="h-8 w-8 text-gallery-gold mx-auto mb-3" />
                    <h4 className="font-semibold text-gallery-dark-brown mb-2">Tablet</h4>
                    <p className="text-sm text-gallery-dark-brown/70">Perfect layout for medium-sized screens</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gallery-beige/20">
                    <Monitor className="h-8 w-8 text-gallery-silver mx-auto mb-3" />
                    <h4 className="font-semibold text-gallery-dark-brown mb-2">Desktop</h4>
                    <p className="text-sm text-gallery-dark-brown/70">Full-featured experience for large displays</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Demo Tab */}
          <TabsContent value="demo" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gallery-dark-brown mb-4">
                Interactive Demo
              </h3>
              <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
                Explore the live platform and experience all features firsthand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Browse Products',
                  description: 'Explore the complete product catalog',
                  page: 'catalog',
                  icon: <ShoppingBag className="h-6 w-6" />,
                  color: 'bg-gallery-rose-gold'
                },
                {
                  title: 'View Product Details',
                  description: 'See detailed product information',
                  page: 'product/1',
                  icon: <Eye className="h-6 w-6" />,
                  color: 'bg-gallery-gold'
                },
                {
                  title: 'Shopping Cart',
                  description: 'Experience the checkout process',
                  page: 'cart',
                  icon: <CreditCard className="h-6 w-6" />,
                  color: 'bg-gallery-silver'
                },
                {
                  title: 'User Account',
                  description: 'Manage profile and orders',
                  page: 'account',
                  icon: <User className="h-6 w-6" />,
                  color: 'bg-gallery-dark-brown'
                },
                {
                  title: 'Admin Dashboard',
                  description: 'Complete management system',
                  page: 'admin',
                  icon: <BarChart3 className="h-6 w-6" />,
                  color: 'bg-gallery-rose-gold'
                },
                {
                  title: 'Design System',
                  description: 'View the complete design system',
                  page: 'design-system',
                  icon: <Palette className="h-6 w-6" />,
                  color: 'bg-gallery-gold'
                }
              ].map((demo, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => onNavigate(demo.page)}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${demo.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                      {demo.icon}
                    </div>
                    <h4 className="font-bold text-gallery-dark-brown mb-2">{demo.title}</h4>
                    <p className="text-sm text-gallery-dark-brown/70 mb-4">{demo.description}</p>
                    <div className="flex items-center text-gallery-rose-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Try it out <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="p-8 text-center bg-gradient-to-r from-gallery-beige/50 to-gallery-white border-gallery-rose-gold/20">
              <CardContent>
                <h4 className="text-2xl font-bold text-gallery-dark-brown mb-4">
                  Ready to Experience THE GALLERY?
                </h4>
                <p className="text-gallery-dark-brown/70 mb-6 max-w-2xl mx-auto">
                  Explore the complete platform and see how it can transform your jewelry business with a premium online presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => onNavigate('home')}
                    className="bg-gallery-dark-brown hover:bg-gallery-dark-brown/90"
                    size="lg"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Live Demo
                  </Button>
                  <Button 
                    onClick={() => onNavigate('design-portfolio')}
                    variant="outline"
                    className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-white"
                    size="lg"
                  >
                    <Layout className="w-5 h-5 mr-2" />
                    Design Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="bg-gallery-dark-brown text-gallery-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-8 bg-gallery-white rounded-lg flex items-center justify-center">
              <span className="text-gallery-dark-brown font-bold text-sm">TG</span>
            </div>
            <h3 className="text-xl font-bold">THE GALLERY E-commerce Platform</h3>
          </div>
          <p className="text-gallery-white/80 mb-6 max-w-2xl mx-auto">
            A complete, premium e-commerce solution designed specifically for luxury jewelry brands. 
            Built with modern technologies and attention to every detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gallery-white/60">
            <span>React 18 + TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS v4</span>
            <span>•</span>
            <span>Arabic RTL Support</span>
            <span>•</span>
            <span>Mobile-First Design</span>
            <span>•</span>
            <span>Premium UI Components</span>
          </div>
        </div>
      </div>
    </div>
  );
}
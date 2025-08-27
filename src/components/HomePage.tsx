import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { 
  Star, 
  Truck, 
  Shield, 
  RotateCcw, 
  Heart,
  ArrowRight,
  Sparkles,
  Award,
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Featured products with real images
  const featuredProducts = [
    {
      id: '1',
      name: 'Rose Gold Delicate Chain Necklace',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ29sZCUyMG5lY2tsYWNlJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjgyOTB8MA&ixlib=rb-4.1.0&q=80&w=600',
      badge: 'SALE'
    },
    {
      id: '2',
      name: 'Silver Minimalist Bracelet',
      price: 65.99,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1725368844213-c167fe556f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMGpld2Vscnl8ZW58MXx8fHwxNzU2MjQyNjk0fDA&ixlib=rb-4.1.0&q=80&w=600',
      badge: 'NEW'
    },
    {
      id: '3',
      name: 'Gold Statement Earrings',
      price: 125.99,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1654700194896-6318cdc3b184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ29sZCUyMGVhcnJpbmdzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjkyNzl8MA&ixlib=rb-4.1.0&q=80&w=600',
      badge: 'TRENDING'
    },
    {
      id: '4',
      name: 'Stainless Steel Ring Set',
      price: 75.99,
      rating: 4.6,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1677316732918-e1acafda522c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHJpbmclMjBqZXdlbHJ5fGVufDF8fHx8MTc1NjMyOTI3OXww&ixlib=rb-4.1.0&q=80&w=600'
    }
  ];

  const categories = [
    {
      name: 'Necklaces',
      href: 'catalog/necklaces',
      image: 'https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ29sZCUyMG5lY2tsYWNlJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjgyOTB8MA&ixlib=rb-4.1.0&q=80&w=400',
      count: '12 pieces'
    },
    {
      name: 'Bracelets',
      href: 'catalog/bracelets',
      image: 'https://images.unsplash.com/photo-1725368844213-c167fe556f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMGpld2Vscnl8ZW58MXx8fHwxNzU2MjQyNjk0fDA&ixlib=rb-4.1.0&q=80&w=400',
      count: '8 pieces'
    },
    {
      name: 'Earrings',
      href: 'catalog/earrings',
      image: 'https://images.unsplash.com/photo-1654700194896-6318cdc3b184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ29sZCUyMGVhcnJpbmdzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjkyNzl8MA&ixlib=rb-4.1.0&q=80&w=400',
      count: '15 pieces'
    },
    {
      name: 'Rings',
      href: 'catalog/rings',
      image: 'https://images.unsplash.com/photo-1677316732918-e1acafda522c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHJpbmclMjBqZXdlbHJ5fGVufDF8fHx8MTc1NjMyOTI3OXww&ixlib=rb-4.1.0&q=80&w=400',
      count: '10 pieces'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Absolutely love my new necklace! The quality is outstanding and it goes with everything.',
      product: 'Rose Gold Chain Necklace'
    },
    {
      name: 'Emma L.',
      rating: 5,
      text: 'Perfect for everyday wear. The bracelet is so comfortable and elegant.',
      product: 'Silver Minimalist Bracelet'
    },
    {
      name: 'Jessica K.',
      rating: 5,
      text: 'THE GALLERY has become my go-to for all my jewelry needs. Exceptional quality!',
      product: 'Complete Collection'
    }
  ];

  const trustBadges = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $75'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Premium materials only'
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns',
      description: 'Easy returns & exchanges'
    },
    {
      icon: Award,
      title: 'Lifetime Warranty',
      description: 'On all our pieces'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-gallery-gold text-gallery-gold' : 'text-gallery-dark-brown/30'}`} 
      />
    ));
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'SALE': return 'bg-red-500 text-white';
      case 'NEW': return 'bg-gallery-rose-gold text-white';
      case 'TRENDING': return 'bg-gallery-gold text-white';
      default: return 'bg-gallery-dark-brown text-white';
    }
  };

  return (
    <div className="bg-gallery-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1691669505981-f2caaca04454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwbGlmZXN0eWxlJTIwd29tYW58ZW58MXx8fHwxNzU2MzI5MjgwfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="THE GALLERY luxury jewelry lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gallery-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-gallery-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-white">
              Shine Every Day
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gallery-beige">
              Premium Stainless Steel Accessories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => onNavigate('catalog/new')}
                className="bg-gallery-rose-gold hover:bg-gallery-rose-gold/90 text-white"
              >
                Shop New Arrivals
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onNavigate('collections')}
                className="border-gallery-white text-gallery-white hover:bg-gallery-white hover:text-gallery-dark-brown"
              >
                View Collections
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gallery-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gallery-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <badge.icon className="w-6 h-6 text-gallery-rose-gold" />
                </div>
                <h4 className="text-gallery-dark-brown mb-2">{badge.title}</h4>
                <p className="text-gallery-dark-brown/70 text-sm">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gallery-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Shop by Category</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Discover our carefully curated collections designed for every occasion and style preference.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onNavigate(category.href)}
              >
                <Card className="overflow-hidden border-gallery-dark-brown/20 hover:shadow-lg transition-all duration-300 group-hover:border-gallery-rose-gold/50">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gallery-black/20 group-hover:bg-gallery-black/30 transition-colors duration-300" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-gallery-dark-brown mb-1">{category.name}</h3>
                      <p className="text-gallery-dark-brown/60 text-sm">{category.count}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gallery-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">Featured Collection</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Handpicked pieces that embody elegance, quality, and timeless style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onNavigate(`product/${product.id}`)}
              >
                <Card className="overflow-hidden border-gallery-dark-brown/20 hover:shadow-lg transition-all duration-300 group-hover:border-gallery-rose-gold/50">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <Badge className={`absolute top-3 left-3 ${getBadgeColor(product.badge)}`}>
                          {product.badge}
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-3 right-3 bg-gallery-white/90 hover:bg-gallery-white text-gallery-dark-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <h3 className="text-gallery-dark-brown mb-2 group-hover:text-gallery-rose-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        {renderStars(product.rating)}
                        <span className="text-gallery-dark-brown/60 text-sm ml-2">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gallery-dark-brown">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gallery-dark-brown/50 line-through text-sm">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => onNavigate('catalog')}
              variant="outline"
              className="border-gallery-dark-brown text-gallery-dark-brown hover:bg-gallery-dark-brown hover:text-gallery-white"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gallery-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gallery-dark-brown mb-4">What Our Customers Say</h2>
            <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust THE GALLERY for their jewelry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-gallery-dark-brown/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gallery-dark-brown/70 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="text-gallery-dark-brown font-medium">{testimonial.name}</p>
                      <p className="text-gallery-dark-brown/60 text-sm">{testimonial.product}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gallery-dark-brown text-gallery-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-12 h-12 text-gallery-rose-gold mx-auto mb-6" />
            <h2 className="text-gallery-white mb-4">Stay in the Loop</h2>
            <p className="text-gallery-beige text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and styling tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gallery-white text-gallery-dark-brown focus:outline-none focus:ring-2 focus:ring-gallery-rose-gold"
              />
              <Button className="bg-gallery-rose-gold hover:bg-gallery-rose-gold/90 text-white px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-gallery-beige/70 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Star, Heart, Share2, Truck, RefreshCw, Shield, Plus, Minus, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";
import { unsplash_tool } from '../tools';

interface ProductDetailPageProps {
  productId: string;
  onNavigate?: (page: string) => void;
}

export function ProductDetailPage({ productId, onNavigate }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('rose-gold');
  const [selectedPlating, setSelectedPlating] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [relatedImages, setRelatedImages] = useState<string[]>([]);

  // Load product images
  useEffect(() => {
    const loadImages = async () => {
      const productPromises = [
        unsplash_tool({ query: "rose gold pendant necklace jewelry" }),
        unsplash_tool({ query: "elegant necklace detail close up" }),
        unsplash_tool({ query: "jewelry pendant chain detail" }),
        unsplash_tool({ query: "luxury necklace clasp detail" }),
        unsplash_tool({ query: "woman wearing rose gold necklace" })
      ];

      const relatedPromises = [
        unsplash_tool({ query: "rose gold bracelet" }),
        unsplash_tool({ query: "matching earrings gold" }),
        unsplash_tool({ query: "jewelry ring set" }),
        unsplash_tool({ query: "pendant necklace similar" })
      ];

      const [productResults, relatedResults] = await Promise.all([
        Promise.all(productPromises),
        Promise.all(relatedPromises)
      ]);

      setProductImages(productResults);
      setRelatedImages(relatedResults);
    };
    loadImages();
  }, [productId]);

  const product = {
    id: 1,
    name: "Eternal Elegance Pendant Necklace",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 127,
    category: "Necklaces",
    material: "Premium Stainless Steel",
    description: "Elevate your everyday style with our Eternal Elegance Pendant Necklace. Crafted from premium stainless steel with a luxurious rose gold finish, this timeless piece features a delicate geometric pendant that catches the light beautifully. Perfect for layering or worn alone as a statement piece.",
    features: [
      "Hypoallergenic stainless steel construction",
      "Tarnish-resistant rose gold plating",
      "Adjustable 16-20 inch chain length",
      "Secure lobster clasp closure",
      "Water-resistant and durable",
      "Gift box included"
    ],
    specifications: {
      "Material": "316L Stainless Steel",
      "Plating": "Rose Gold PVD Coating",
      "Chain Length": "Adjustable 16-20 inches",
      "Pendant Size": "15mm x 15mm",
      "Chain Width": "2mm",
      "Weight": "8.5g",
      "Clasp": "Lobster Claw",
      "Care": "Water resistant, wipe clean"
    },
    sizes: [
      { id: '16', name: '16"', available: true },
      { id: '18', name: '18"', available: true },
      { id: '20', name: '20"', available: true },
      { id: 'adjustable', name: 'Adjustable (16-20")', available: true }
    ],
    colors: [
      { id: 'rose-gold', name: 'Rose Gold', color: '#B76E79', available: true },
      { id: 'gold', name: 'Gold', color: '#D4AF37', available: true },
      { id: 'silver', name: 'Silver', color: '#C0C0C0', available: true },
      { id: 'black', name: 'Black', color: '#111111', available: false }
    ],
    plating: [
      { id: 'standard', name: 'Standard Plating', price: 0 },
      { id: 'premium', name: 'Premium Plating (+$20)', price: 20 },
      { id: 'luxury', name: 'Luxury Plating (+$40)', price: 40 }
    ],
    inStock: true,
    inventory: 24,
    isNew: true,
    isBestseller: false
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      title: "Absolutely beautiful!",
      comment: "This necklace exceeded my expectations. The quality is outstanding and it looks exactly like the photos. I've gotten so many compliments!",
      helpful: 12
    },
    {
      id: 2,
      name: "Emily R.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      title: "Perfect for sensitive skin",
      comment: "I have very sensitive skin and this necklace doesn't irritate me at all. The rose gold color is gorgeous and matches everything.",
      helpful: 8
    },
    {
      id: 3,
      name: "Jessica L.",
      rating: 4,
      date: "3 weeks ago",
      verified: true,
      title: "Great quality, fast shipping",
      comment: "Beautiful necklace, arrived quickly and well packaged. Only reason for 4 stars is that it's slightly shorter than I expected, but still lovely.",
      helpful: 5
    },
    {
      id: 4,
      name: "Amanda K.",
      rating: 5,
      date: "1 week ago",
      verified: true,
      title: "Love it!",
      comment: "This is my second purchase from The Gallery and I'm never disappointed. The quality is consistently excellent.",
      helpful: 3
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "Matching Rose Gold Bracelet",
      price: 89,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Complementary Hoop Earrings",
      price: 119,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Stackable Ring Set",
      price: 129,
      rating: 4.8,
      reviews: 187
    },
    {
      id: 5,
      name: "Similar Pendant Style",
      price: 139,
      rating: 4.6,
      reviews: 94
    }
  ];

  const ratingBreakdown = [
    { stars: 5, count: 87, percentage: 68 },
    { stars: 4, count: 25, percentage: 20 },
    { stars: 3, count: 10, percentage: 8 },
    { stars: 2, count: 3, percentage: 2 },
    { stars: 1, count: 2, percentage: 2 }
  ];

  const getCurrentPrice = () => {
    const basePrice = product.originalPrice ? product.price : product.price;
    const platingPrice = product.plating.find(p => p.id === selectedPlating)?.price || 0;
    return basePrice + platingPrice;
  };

  const handleAddToCart = () => {
    toast("Added to your luxury collection ✨", {
      description: `${product.name} has been added to your cart.`,
      action: {
        label: "View Cart",
        onClick: () => onNavigate?.('cart'),
      },
    });
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast(isWishlisted ? "Removed from wishlist" : "Added to wishlist ❤️", {
      description: isWishlisted 
        ? `${product.name} removed from your wishlist.`
        : `${product.name} saved for later.`,
    });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="min-h-screen bg-gallery-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gallery-dark-brown/70 mb-8">
          <button onClick={() => onNavigate?.('home')} className="hover:text-gallery-rose-gold">
            Home
          </button>
          <span>/</span>
          <button onClick={() => onNavigate?.('catalog')} className="hover:text-gallery-rose-gold">
            Jewelry
          </button>
          <span>/</span>
          <button onClick={() => onNavigate?.('catalog/necklaces')} className="hover:text-gallery-rose-gold">
            Necklaces
          </button>
          <span>/</span>
          <span className="text-gallery-dark-brown">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gallery-beige rounded-lg overflow-hidden group">
              {productImages.length > 0 && (
                <ImageWithFallback
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'group-hover:scale-110'
                  }`}
                />
              )}
              
              {/* Zoom Button */}
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-4 right-4 bg-gallery-white/90 hover:bg-gallery-white"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>

              {/* Image Navigation */}
              {productImages.length > 1 && (
                <>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gallery-white/90 hover:bg-gallery-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gallery-white/90 hover:bg-gallery-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-gallery-rose-gold text-gallery-white">New</Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive" className="bg-red-500 text-white">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-gallery-rose-gold'
                      : 'border-transparent hover:border-gallery-rose-gold/50'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gallery-dark-brown mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-gallery-gold text-gallery-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gallery-dark-brown font-medium">
                    {product.rating}
                  </span>
                  <button 
                    onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gallery-rose-gold hover:underline"
                  >
                    ({product.reviews} reviews)
                  </button>
                </div>
                <span className="text-gallery-dark-brown/70">SKU: NE-001-RG</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gallery-dark-brown">
                  ${getCurrentPrice()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gallery-dark-brown/50 line-through">
                    ${product.originalPrice + (product.plating.find(p => p.id === selectedPlating)?.price || 0)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-gallery-rose-gold font-medium">
                  You save ${(product.originalPrice - product.price)} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-gallery-dark-brown/80 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold text-gallery-dark-brown mb-3">
                  Chain Length
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      disabled={!size.available}
                      className={`p-3 text-sm border rounded-lg transition-all duration-200 ${
                        selectedSize === size.id
                          ? 'border-gallery-rose-gold bg-gallery-rose-gold text-gallery-white'
                          : size.available
                          ? 'border-gallery-beige hover:border-gallery-rose-gold'
                          : 'border-gallery-beige bg-gallery-beige/50 text-gallery-dark-brown/50 cursor-not-allowed'
                      }`}
                    >
                      {size.name}
                      {!size.available && <span className="block text-xs">Out of Stock</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-gallery-dark-brown mb-3">
                  Color: <span className="font-normal">{product.colors.find(c => c.id === selectedColor)?.name}</span>
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      disabled={!color.available}
                      className={`w-12 h-12 rounded-full border-4 transition-all duration-200 ${
                        selectedColor === color.id
                          ? 'border-gallery-rose-gold scale-110'
                          : color.available
                          ? 'border-gallery-beige hover:border-gallery-rose-gold/50'
                          : 'border-gallery-beige opacity-50 cursor-not-allowed'
                      }`}
                      style={{ backgroundColor: color.available ? color.color : '#e5e5e5' }}
                      title={color.name}
                    >
                      {!color.available && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-6 h-0.5 bg-gallery-dark-brown/70 rotate-45"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Plating Selection */}
              <div>
                <label className="block text-sm font-semibold text-gallery-dark-brown mb-3">
                  Plating Option
                </label>
                <Select value={selectedPlating} onValueChange={setSelectedPlating}>
                  <SelectTrigger className="border-gallery-beige">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {product.plating.map((plating) => (
                      <SelectItem key={plating.id} value={plating.id}>
                        {plating.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gallery-dark-brown mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gallery-beige rounded-lg">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-12 w-12 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setQuantity(Math.min(product.inventory, quantity + 1))}
                      className="h-12 w-12 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-gallery-dark-brown/70">
                    {product.inventory} in stock
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-gallery-rose-gold to-gallery-gold hover:from-gallery-gold hover:to-gallery-rose-gold text-gallery-white h-14 text-lg font-semibold"
                >
                  Add to Cart - ${getCurrentPrice()}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleAddToWishlist}
                  className={`h-14 w-14 border-2 ${
                    isWishlisted
                      ? 'border-gallery-rose-gold bg-gallery-rose-gold text-gallery-white'
                      : 'border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-14 border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white"
                >
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-gallery-dark-brown text-gallery-dark-brown hover:bg-gallery-dark-brown hover:text-gallery-white h-12"
              >
                Buy Now - Express Checkout
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gallery-beige">
              <div className="text-center">
                <Truck className="h-6 w-6 text-gallery-rose-gold mx-auto mb-2" />
                <p className="text-xs text-gallery-dark-brown/70">Free Shipping</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-6 w-6 text-gallery-rose-gold mx-auto mb-2" />
                <p className="text-xs text-gallery-dark-brown/70">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-gallery-rose-gold mx-auto mb-2" />
                <p className="text-xs text-gallery-dark-brown/70">Lifetime Warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gallery-beige">
              <TabsTrigger value="description" className="data-[state=active]:bg-gallery-white">Description</TabsTrigger>
              <TabsTrigger value="specifications" className="data-[state=active]:bg-gallery-white">Specifications</TabsTrigger>
              <TabsTrigger value="care" className="data-[state=active]:bg-gallery-white">Care Guide</TabsTrigger>
              <TabsTrigger value="shipping" className="data-[state=active]:bg-gallery-white">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gallery-dark-brown mb-4">Product Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gallery-rose-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gallery-dark-brown/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gallery-dark-brown mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gallery-beige">
                        <span className="font-medium text-gallery-dark-brown">{key}:</span>
                        <span className="text-gallery-dark-brown/80">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="care" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gallery-dark-brown mb-4">Care Instructions</h3>
                  <div className="space-y-4 text-gallery-dark-brown/80">
                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-2">Daily Care</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Store in the provided jewelry box or soft pouch</li>
                        <li>• Avoid contact with perfumes, lotions, and chemicals</li>
                        <li>• Remove before swimming, showering, or exercising</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-2">Cleaning</h4>
                      <ul className="space-y-2 ml-4">
                        <li>• Gently wipe with a soft, dry cloth after each wear</li>
                        <li>• For deeper cleaning, use mild soap and warm water</li>
                        <li>• Dry thoroughly before storing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-4">Shipping Options</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Standard Shipping (5-7 days)</span>
                          <span className="font-medium">Free on orders $100+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Express Shipping (2-3 days)</span>
                          <span className="font-medium">$15</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Overnight Shipping</span>
                          <span className="font-medium">$35</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-4">Return Policy</h4>
                      <p className="text-gallery-dark-brown/80">
                        We offer a 30-day return policy for all unworn items in original packaging. 
                        Free returns for exchanges and store credit.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gallery-dark-brown">Customer Reviews</h2>
            <Button variant="outline" className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white">
              Write a Review
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Rating Summary */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gallery-dark-brown mb-2">{product.rating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gallery-gold text-gallery-gold'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gallery-dark-brown/70">{product.reviews} reviews</p>
              </CardContent>
            </Card>

            {/* Rating Breakdown */}
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {ratingBreakdown.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-4">
                      <div className="flex items-center gap-1 w-16">
                        <span className="text-sm">{rating.stars}</span>
                        <Star className="h-4 w-4 fill-gallery-gold text-gallery-gold" />
                      </div>
                      <Progress value={rating.percentage} className="flex-1 h-2" />
                      <span className="text-sm text-gallery-dark-brown/70 w-12">{rating.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Review List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gallery-beige text-gallery-dark-brown">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gallery-dark-brown">{review.name}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs bg-gallery-beige text-gallery-dark-brown">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-gallery-dark-brown/70">{review.date}</span>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'fill-gallery-gold text-gallery-gold'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <h4 className="font-semibold text-gallery-dark-brown mb-2">{review.title}</h4>
                      <p className="text-gallery-dark-brown/80 mb-4">{review.comment}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="text-gallery-rose-gold hover:underline">
                          Helpful ({review.helpful})
                        </button>
                        <button className="text-gallery-dark-brown/70 hover:underline">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white">
              Load More Reviews
            </Button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gallery-dark-brown mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <Card
                key={relatedProduct.id}
                className="group cursor-pointer border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                onClick={() => onNavigate?.(`product/${relatedProduct.id}`)}
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={relatedImages[index] || ''}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(relatedProduct.rating)
                              ? 'fill-gallery-gold text-gallery-gold'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gallery-dark-brown/70">
                      ({relatedProduct.reviews})
                    </span>
                  </div>
                  <h3 className="font-semibold text-gallery-dark-brown mb-2 group-hover:text-gallery-rose-gold transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-lg font-bold text-gallery-dark-brown">
                    ${relatedProduct.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
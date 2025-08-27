import { useState, useEffect } from 'react';
import { Filter, Grid, List, Star, Heart, ShoppingBag, ChevronDown, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from './ui/sheet';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { unsplash_tool } from '../tools';

interface CatalogPageProps {
  category?: string;
  onNavigate?: (page: string) => void;
}

export function CatalogPage({ category = 'all', onNavigate }: CatalogPageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showOnSale, setShowOnSale] = useState(false);
  const [showInStock, setShowInStock] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [lifestyleImages, setLifestyleImages] = useState<string[]>([]);

  // Load product images
  useEffect(() => {
    const loadImages = async () => {
      const productPromises = [
        unsplash_tool({ query: "gold necklace jewelry white background" }),
        unsplash_tool({ query: "silver bracelet jewelry" }),
        unsplash_tool({ query: "rose gold earrings" }),
        unsplash_tool({ query: "stainless steel ring" }),
        unsplash_tool({ query: "elegant jewelry set" }),
        unsplash_tool({ query: "luxury pendant necklace" }),
        unsplash_tool({ query: "chain bracelet gold" }),
        unsplash_tool({ query: "diamond earrings" }),
        unsplash_tool({ query: "minimalist ring" }),
        unsplash_tool({ query: "statement necklace" }),
        unsplash_tool({ query: "delicate bracelet" }),
        unsplash_tool({ query: "hoop earrings gold" })
      ];

      const lifestylePromises = [
        unsplash_tool({ query: "woman wearing gold necklace" }),
        unsplash_tool({ query: "elegant woman jewelry bracelet" }),
        unsplash_tool({ query: "model wearing earrings" }),
        unsplash_tool({ query: "woman hand with ring" }),
        unsplash_tool({ query: "jewelry model lifestyle" }),
        unsplash_tool({ query: "woman wearing pendant" }),
        unsplash_tool({ query: "elegant jewelry styling" }),
        unsplash_tool({ query: "woman accessories earrings" }),
        unsplash_tool({ query: "jewelry model portrait" }),
        unsplash_tool({ query: "woman wearing statement necklace" }),
        unsplash_tool({ query: "jewelry lifestyle photo" }),
        unsplash_tool({ query: "woman elegant jewelry" })
      ];

      const [productResults, lifestyleResults] = await Promise.all([
        Promise.all(productPromises),
        Promise.all(lifestylePromises)
      ]);

      setProductImages(productResults);
      setLifestyleImages(lifestyleResults);
    };
    loadImages();
  }, []);

  const categories = [
    { id: 'necklaces', name: 'Necklaces', count: 48 },
    { id: 'bracelets', name: 'Bracelets', count: 32 },
    { id: 'earrings', name: 'Earrings', count: 56 },
    { id: 'rings', name: 'Rings', count: 24 },
    { id: 'sets', name: 'Sets', count: 16 }
  ];

  const materials = [
    { id: 'stainless-steel', name: 'Stainless Steel', count: 124 },
    { id: 'gold-plated', name: 'Gold Plated', count: 89 },
    { id: 'silver-plated', name: 'Silver Plated', count: 67 },
    { id: 'rose-gold', name: 'Rose Gold', count: 45 }
  ];

  const colors = [
    { id: 'gold', name: 'Gold', color: '#D4AF37' },
    { id: 'silver', name: 'Silver', color: '#C0C0C0' },
    { id: 'rose-gold', name: 'Rose Gold', color: '#B76E79' },
    { id: 'black', name: 'Black', color: '#111111' }
  ];

  const products = [
    {
      id: 1,
      name: "Eternal Elegance Necklace",
      price: 149,
      originalPrice: 199,
      rating: 4.8,
      reviews: 127,
      category: "necklaces",
      material: "rose-gold",
      color: "rose-gold",
      isNew: true,
      isBestseller: false,
      inStock: true,
      onSale: true
    },
    {
      id: 2,
      name: "Delicate Chain Bracelet",
      price: 89,
      rating: 4.9,
      reviews: 89,
      category: "bracelets",
      material: "gold-plated",
      color: "gold",
      isNew: false,
      isBestseller: true,
      inStock: true,
      onSale: false
    },
    {
      id: 3,
      name: "Diamond-Cut Hoops",
      price: 119,
      originalPrice: 149,
      rating: 4.7,
      reviews: 156,
      category: "earrings",
      material: "stainless-steel",
      color: "silver",
      isNew: false,
      isBestseller: false,
      inStock: true,
      onSale: true
    },
    {
      id: 4,
      name: "Minimalist Band Ring",
      price: 79,
      rating: 4.6,
      reviews: 92,
      category: "rings",
      material: "stainless-steel",
      color: "silver",
      isNew: true,
      isBestseller: false,
      inStock: false,
      onSale: false
    },
    {
      id: 5,
      name: "Layered Chain Set",
      price: 189,
      originalPrice: 249,
      rating: 4.9,
      reviews: 203,
      category: "sets",
      material: "gold-plated",
      color: "gold",
      isNew: false,
      isBestseller: true,
      inStock: true,
      onSale: true
    },
    {
      id: 6,
      name: "Statement Pearl Necklace",
      price: 199,
      rating: 4.8,
      reviews: 145,
      category: "necklaces",
      material: "rose-gold",
      color: "rose-gold",
      isNew: true,
      isBestseller: false,
      inStock: true,
      onSale: false
    },
    {
      id: 7,
      name: "Tennis Bracelet",
      price: 259,
      rating: 4.9,
      reviews: 78,
      category: "bracelets",
      material: "silver-plated",
      color: "silver",
      isNew: false,
      isBestseller: true,
      inStock: true,
      onSale: false
    },
    {
      id: 8,
      name: "Drop Earrings",
      price: 139,
      originalPrice: 169,
      rating: 4.7,
      reviews: 234,
      category: "earrings",
      material: "gold-plated",
      color: "gold",
      isNew: false,
      isBestseller: false,
      inStock: true,
      onSale: true
    },
    {
      id: 9,
      name: "Stackable Ring Set",
      price: 129,
      rating: 4.8,
      reviews: 187,
      category: "rings",
      material: "rose-gold",
      color: "rose-gold",
      isNew: true,
      isBestseller: false,
      inStock: true,
      onSale: false
    },
    {
      id: 10,
      name: "Vintage Charm Bracelet",
      price: 169,
      rating: 4.6,
      reviews: 156,
      category: "bracelets",
      material: "stainless-steel",
      color: "silver",
      isNew: false,
      isBestseller: false,
      inStock: true,
      onSale: false
    },
    {
      id: 11,
      name: "Geometric Stud Earrings",
      price: 99,
      rating: 4.5,
      reviews: 89,
      category: "earrings",
      material: "black",
      color: "black",
      isNew: true,
      isBestseller: false,
      inStock: true,
      onSale: false
    },
    {
      id: 12,
      name: "Infinity Ring",
      price: 109,
      originalPrice: 139,
      rating: 4.7,
      reviews: 234,
      category: "rings",
      material: "gold-plated",
      color: "gold",
      isNew: false,
      isBestseller: false,
      inStock: true,
      onSale: true
    }
  ];

  // Filter products based on current filters
  const filteredProducts = products.filter(product => {
    if (category !== 'all' && product.category !== category) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false;
    if (selectedColors.length > 0 && !selectedColors.includes(product.color)) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (showOnSale && !product.onSale) return false;
    if (showInStock && !product.inStock) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      case 'rating':
        return b.rating - a.rating;
      case 'bestseller':
        return a.isBestseller ? -1 : b.isBestseller ? 1 : 0;
      default:
        return 0;
    }
  });

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setSelectedCategories(prev =>
      checked
        ? [...prev, categoryId]
        : prev.filter(id => id !== categoryId)
    );
  };

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    setSelectedMaterials(prev =>
      checked
        ? [...prev, materialId]
        : prev.filter(id => id !== materialId)
    );
  };

  const handleColorChange = (colorId: string, checked: boolean) => {
    setSelectedColors(prev =>
      checked
        ? [...prev, colorId]
        : prev.filter(id => id !== colorId)
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedColors([]);
    setPriceRange([0, 500]);
    setShowOnSale(false);
    setShowInStock(false);
  };

  const activeFiltersCount = selectedCategories.length + selectedMaterials.length + selectedColors.length + (showOnSale ? 1 : 0) + (showInStock ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gallery-dark-brown mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            min={0}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-gallery-dark-brown/70">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <div>
        <h3 className="font-semibold text-gallery-dark-brown mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map(cat => (
            <div key={cat.id} className="flex items-center space-x-2">
              <Checkbox
                id={cat.id}
                checked={selectedCategories.includes(cat.id)}
                onCheckedChange={(checked) => handleCategoryChange(cat.id, checked as boolean)}
              />
              <label htmlFor={cat.id} className="text-sm text-gallery-dark-brown cursor-pointer flex-1">
                {cat.name}
              </label>
              <span className="text-xs text-gallery-dark-brown/50">({cat.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Materials */}
      <div>
        <h3 className="font-semibold text-gallery-dark-brown mb-4">Materials</h3>
        <div className="space-y-3">
          {materials.map(material => (
            <div key={material.id} className="flex items-center space-x-2">
              <Checkbox
                id={material.id}
                checked={selectedMaterials.includes(material.id)}
                onCheckedChange={(checked) => handleMaterialChange(material.id, checked as boolean)}
              />
              <label htmlFor={material.id} className="text-sm text-gallery-dark-brown cursor-pointer flex-1">
                {material.name}
              </label>
              <span className="text-xs text-gallery-dark-brown/50">({material.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Colors */}
      <div>
        <h3 className="font-semibold text-gallery-dark-brown mb-4">Colors</h3>
        <div className="space-y-3">
          {colors.map(color => (
            <div key={color.id} className="flex items-center space-x-2">
              <Checkbox
                id={color.id}
                checked={selectedColors.includes(color.id)}
                onCheckedChange={(checked) => handleColorChange(color.id, checked as boolean)}
              />
              <div className="flex items-center space-x-2 flex-1">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.color }}
                />
                <label htmlFor={color.id} className="text-sm text-gallery-dark-brown cursor-pointer">
                  {color.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Other Filters */}
      <div>
        <h3 className="font-semibold text-gallery-dark-brown mb-4">Availability</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="on-sale"
              checked={showOnSale}
              onCheckedChange={setShowOnSale}
            />
            <label htmlFor="on-sale" className="text-sm text-gallery-dark-brown cursor-pointer">
              On Sale
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={showInStock}
              onCheckedChange={setShowInStock}
            />
            <label htmlFor="in-stock" className="text-sm text-gallery-dark-brown cursor-pointer">
              In Stock Only
            </label>
          </div>
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <>
          <Separator />
          <Button
            variant="outline"
            onClick={clearFilters}
            className="w-full border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white"
          >
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  );

  const ProductCard = ({ product, index, isListView = false }: { product: any, index: number, isListView?: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <Card
        className={`group cursor-pointer border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
          isListView ? 'flex flex-row' : ''
        }`}
        onClick={() => onNavigate?.(`product/${product.id}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative overflow-hidden ${isListView ? 'w-48' : 'aspect-square'}`}>
          <ImageWithFallback
            src={isHovered && lifestyleImages[index] ? lifestyleImages[index] : productImages[index] || ''}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-gallery-rose-gold text-gallery-white">New</Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-gallery-gold text-gallery-white">Bestseller</Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="bg-gray-500 text-white">Out of Stock</Badge>
            )}
          </div>
          {product.originalPrice && (
            <div className="absolute top-4 right-4">
              <Badge variant="destructive" className="bg-red-500 text-white">
                Sale
              </Badge>
            </div>
          )}
          
          {/* Quick Action Buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" variant="secondary" className="h-10 w-10 p-0 rounded-full bg-gallery-white/90 hover:bg-gallery-white">
              <Heart className="h-4 w-4 text-gallery-rose-gold" />
            </Button>
            <Button 
              size="sm" 
              className="h-10 w-10 p-0 rounded-full bg-gallery-rose-gold hover:bg-gallery-gold"
              disabled={!product.inStock}
            >
              <ShoppingBag className="h-4 w-4 text-gallery-white" />
            </Button>
          </div>
        </div>
        
        <CardContent className={`p-6 ${isListView ? 'flex-1' : ''}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-gallery-gold text-gallery-gold'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gallery-dark-brown/70">
              ({product.reviews})
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gallery-dark-brown mb-2 group-hover:text-gallery-rose-gold transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gallery-dark-brown/70 mb-3 capitalize">
            {categories.find(c => c.id === product.category)?.name}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-gallery-dark-brown">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gallery-dark-brown/50 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          {isListView && (
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-gallery-rose-gold hover:bg-gallery-gold text-gallery-white"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button size="sm" variant="outline" className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gallery-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gallery-dark-brown mb-4">
            {category === 'all' ? 'All Jewelry' : categories.find(c => c.id === category)?.name || 'Catalog'}
          </h1>
          <p className="text-gallery-dark-brown/70">
            Showing {sortedProducts.length} of {products.length} products
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-gallery-beige rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gallery-dark-brown">Filters</h2>
                  {activeFiltersCount > 0 && (
                    <Badge className="bg-gallery-rose-gold text-gallery-white">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </div>
                <FilterContent />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6 bg-gallery-beige rounded-lg p-4">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden border-gallery-rose-gold text-gallery-rose-gold">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                      {activeFiltersCount > 0 && (
                        <Badge className="ml-2 bg-gallery-rose-gold text-gallery-white h-5 w-5 p-0 flex items-center justify-center">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 bg-gallery-white">
                    <SheetHeader>
                      <SheetTitle className="text-gallery-dark-brown">Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Toggle */}
                <div className="hidden sm:flex border border-gallery-rose-gold rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-gallery-rose-gold text-gallery-white' : 'text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white'}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-gallery-rose-gold text-gallery-white' : 'text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white'}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 border-gallery-rose-gold">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="bestseller">Best Selling</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {sortedProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    isListView={viewMode === 'list'}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gallery-dark-brown/70 text-lg mb-4">
                  No products found matching your criteria.
                </p>
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {sortedProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white px-8"
                >
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
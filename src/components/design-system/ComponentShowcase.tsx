import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Switch } from '../ui/switch';
import { Slider } from '../ui/slider';
import { Progress } from '../ui/progress';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Star, Heart, ShoppingBag, Search } from 'lucide-react';

export function ComponentShowcase() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <div className="space-y-8">
      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gallery-dark-brown">Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Primary Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gallery-rose-gold hover:bg-gallery-gold text-gallery-white">
                  Add to Cart
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-gallery-rose-gold to-gallery-gold hover:from-gallery-gold hover:to-gallery-rose-gold text-gallery-white">
                  Buy Now
                </Button>
                <Button size="sm" className="bg-gallery-dark-brown hover:bg-gallery-rose-gold text-gallery-white">
                  Small Button
                </Button>
              </div>
              <code className="block text-xs bg-gallery-beige px-3 py-2 rounded text-gallery-dark-brown">
                bg-gallery-rose-gold hover:bg-gallery-gold text-gallery-white
              </code>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Secondary Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white">
                  View Details
                </Button>
                <Button variant="outline" className="border-gallery-dark-brown text-gallery-dark-brown hover:bg-gallery-dark-brown hover:text-gallery-white">
                  Learn More
                </Button>
              </div>
              <code className="block text-xs bg-gallery-beige px-3 py-2 rounded text-gallery-dark-brown">
                border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white
              </code>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Icon Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button size="sm" className="bg-gallery-rose-gold hover:bg-gallery-gold text-gallery-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button size="sm" variant="outline" className="border-gallery-rose-gold text-gallery-rose-gold hover:bg-gallery-rose-gold hover:text-gallery-white">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button size="sm" variant="ghost" className="text-gallery-dark-brown hover:text-gallery-rose-gold">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gallery-dark-brown">Form Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Inputs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Search jewelry..." className="bg-gallery-beige border-none focus:ring-gallery-rose-gold" />
                <Input type="email" placeholder="Email address" className="bg-gallery-beige border-none focus:ring-gallery-rose-gold" />
              </div>
              <code className="block text-xs bg-gallery-beige px-3 py-2 rounded text-gallery-dark-brown">
                bg-gallery-beige border-none focus:ring-gallery-rose-gold
              </code>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Select</h4>
              <div className="w-48">
                <Select>
                  <SelectTrigger className="border-gallery-beige">
                    <SelectValue placeholder="Sort by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Price: Low to High</SelectItem>
                    <SelectItem value="high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Checkbox & Switch</h4>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={isChecked} onCheckedChange={setIsChecked} />
                  <label htmlFor="terms" className="text-sm text-gallery-dark-brown">
                    I agree to terms
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch checked={isSwitched} onCheckedChange={setIsSwitched} />
                  <label className="text-sm text-gallery-dark-brown">
                    Notifications
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Slider</h4>
              <div className="w-64">
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={200}
                  min={0}
                  step={10}
                />
                <div className="flex justify-between text-sm text-gallery-dark-brown/70 mt-1">
                  <span>$0</span>
                  <span>${sliderValue[0]}</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Progress</h4>
              <Progress value={65} className="w-64" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cards & Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gallery-dark-brown">Cards & Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Badges</h4>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gallery-rose-gold text-gallery-white">New</Badge>
                <Badge className="bg-gallery-gold text-gallery-white">Bestseller</Badge>
                <Badge variant="secondary" className="bg-gallery-beige text-gallery-dark-brown">In Stock</Badge>
                <Badge variant="destructive">Sale</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Product Card Example</h4>
              <Card className="w-64 border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-gallery-beige rounded-t-lg relative">
                  <Badge className="absolute top-3 left-3 bg-gallery-rose-gold text-gallery-white">New</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < 4 ? 'fill-gallery-gold text-gallery-gold' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-xs text-gallery-dark-brown/70 ml-1">(24)</span>
                  </div>
                  <h3 className="font-semibold text-gallery-dark-brown mb-1">Elegant Necklace</h3>
                  <p className="text-lg font-bold text-gallery-dark-brown">$149</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gallery-dark-brown">Avatar</h4>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback className="bg-gallery-beige text-gallery-dark-brown">SC</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-gallery-rose-gold text-gallery-white">JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
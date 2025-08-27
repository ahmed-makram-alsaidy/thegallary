import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { CheckCircle, Download, Mail, Share2, ArrowRight, Package, Truck } from 'lucide-react';

interface OrderSuccessPageProps {
  onNavigate: (page: string) => void;
}

export function OrderSuccessPage({ onNavigate }: OrderSuccessPageProps) {
  // Mock order data
  const orderData = {
    orderNumber: 'ORD-2024-001',
    total: 245.97,
    items: [
      {
        id: '1',
        name: 'Rose Gold Delicate Chain Necklace',
        price: 89.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ29sZCUyMG5lY2tsYWNlJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjgyOTB8MA&ixlib=rb-4.1.0&q=80&w=400'
      },
      {
        id: '2',
        name: 'Silver Minimalist Bracelet',
        price: 65.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1725368844213-c167fe556f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMGpld2Vscnl8ZW58MXx8fHwxNzU2MjQyNjk0fDA&ixlib=rb-4.1.0&q=80&w=400'
      }
    ],
    shipping: {
      method: 'Express Delivery',
      cost: 9.99,
      address: {
        name: 'Sarah Johnson',
        street: '123 Fashion Avenue',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'United States'
      }
    },
    estimatedDelivery: '3-5 business days'
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My THE GALLERY Order',
        text: `I just ordered some beautiful jewelry from THE GALLERY! Order #${orderData.orderNumber}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gallery-beige py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-gallery-dark-brown mb-2">Order Confirmed!</h1>
          <p className="text-gallery-dark-brown/70 text-lg mb-1">
            Thank you for your purchase, {orderData.shipping.address.name}
          </p>
          <p className="text-gallery-dark-brown/60">
            Order #{orderData.orderNumber}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-gallery-rose-gold" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gallery-white rounded-lg">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-gallery-dark-brown">{item.name}</h4>
                      <p className="text-gallery-dark-brown/60">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gallery-dark-brown">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gallery-dark-brown/70">Subtotal</span>
                    <span className="text-gallery-dark-brown">
                      ${orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gallery-dark-brown/70">Shipping ({orderData.shipping.method})</span>
                    <span className="text-gallery-dark-brown">${orderData.shipping.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                    <span className="text-gallery-dark-brown">Total</span>
                    <span className="text-gallery-dark-brown">${orderData.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-gallery-rose-gold" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gallery-white p-4 rounded-lg">
                  <h4 className="text-gallery-dark-brown mb-2">Delivery Address</h4>
                  <div className="text-gallery-dark-brown/70 space-y-1">
                    <p>{orderData.shipping.address.name}</p>
                    <p>{orderData.shipping.address.street}</p>
                    <p>
                      {orderData.shipping.address.city}, {orderData.shipping.address.state} {orderData.shipping.address.zip}
                    </p>
                    <p>{orderData.shipping.address.country}</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    📦 Estimated Delivery: {orderData.estimatedDelivery}
                  </p>
                  <p className="text-blue-600 text-sm mt-1">
                    You'll receive tracking information via email once your order ships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => onNavigate('account')}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Track Your Order
                </Button>
                
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Receipt
                </Button>
                
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Your Purchase
                </Button>
              </CardContent>
            </Card>

            {/* Email Confirmation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gallery-rose-gold" />
                  Confirmation Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gallery-dark-brown/70 text-sm">
                  We've sent a confirmation email to your registered email address with order details and tracking information.
                </p>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="space-y-4">
              <Button 
                className="w-full"
                onClick={() => onNavigate('home')}
              >
                Continue Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => onNavigate('catalog')}
              >
                Explore More Products
              </Button>
            </div>

            {/* Customer Support */}
            <Card>
              <CardContent className="p-4">
                <h4 className="text-gallery-dark-brown mb-2">Need Help?</h4>
                <p className="text-gallery-dark-brown/70 text-sm mb-3">
                  Our customer support team is here to assist you.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
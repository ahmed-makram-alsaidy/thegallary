import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Truck, 
  RotateCcw,
  Star,
  Award,
  Users,
  Sparkles
} from 'lucide-react';

interface StaticPageProps {
  page: string;
  onNavigate: (page: string) => void;
}

export function StaticPages({ page, onNavigate }: StaticPageProps) {
  const renderAboutPage = () => (
    <div className="min-h-screen bg-gallery-beige py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-gallery-dark-brown mb-6">About THE GALLERY</h1>
          <p className="text-xl text-gallery-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
            Crafting premium stainless steel accessories for the modern woman who values 
            quality, elegance, and timeless style.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-gallery-dark-brown mb-6">Our Story</h2>
            <div className="space-y-4 text-gallery-dark-brown/70">
              <p>
                Founded in 2020, THE GALLERY was born from a simple belief: every woman 
                deserves jewelry that reflects her strength, beauty, and individuality. 
                We set out to create a collection that would stand the test of time, 
                both in style and durability.
              </p>
              <p>
                Using premium stainless steel as our foundation, we craft each piece 
                with meticulous attention to detail. Our designs blend contemporary 
                aesthetics with timeless elegance, creating accessories that transition 
                seamlessly from day to night.
              </p>
              <p>
                Today, THE GALLERY continues to grow, serving women worldwide who 
                appreciate quality craftsmanship and sophisticated design.
              </p>
            </div>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1691669505981-f2caaca04454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwbGlmZXN0eWxlJTIwd29tYW58ZW58MXx8fHwxNzU2MzI5MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="THE GALLERY jewelry lifestyle"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-gallery-dark-brown text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gallery-rose-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-gallery-rose-gold" />
                </div>
                <CardTitle className="text-gallery-dark-brown">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gallery-dark-brown/70">
                  We use only the finest materials and craftsmanship to ensure 
                  every piece meets our exacting standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gallery-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-gallery-gold" />
                </div>
                <CardTitle className="text-gallery-dark-brown">Elegance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gallery-dark-brown/70">
                  Our designs celebrate the natural beauty and strength of women 
                  through sophisticated, timeless pieces.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gallery-silver/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-gallery-silver" />
                </div>
                <CardTitle className="text-gallery-dark-brown">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gallery-dark-brown/70">
                  We believe in building lasting relationships with our customers 
                  and supporting women in their journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-gallery-dark-brown mb-6">Meet Our Team</h2>
          <p className="text-gallery-dark-brown/70 max-w-2xl mx-auto mb-8">
            Behind every piece is a team of passionate designers, craftspeople, 
            and jewelry enthusiasts dedicated to bringing you the finest accessories.
          </p>
          <Button onClick={() => onNavigate('contact')}>
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="min-h-screen bg-gallery-beige py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-gallery-dark-brown mb-4">Contact Us</h1>
          <p className="text-xl text-gallery-dark-brown/70">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gallery-rose-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gallery-rose-gold" />
                  </div>
                  <div>
                    <h4 className="text-gallery-dark-brown mb-1">Address</h4>
                    <p className="text-gallery-dark-brown/70">
                      123 Fashion Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gallery-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gallery-gold" />
                  </div>
                  <div>
                    <h4 className="text-gallery-dark-brown mb-1">Phone</h4>
                    <p className="text-gallery-dark-brown/70">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gallery-silver/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gallery-silver" />
                  </div>
                  <div>
                    <h4 className="text-gallery-dark-brown mb-1">Email</h4>
                    <p className="text-gallery-dark-brown/70">hello@thegallery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gallery-dark-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gallery-dark-brown" />
                  </div>
                  <div>
                    <h4 className="text-gallery-dark-brown mb-1">Business Hours</h4>
                    <div className="text-gallery-dark-brown/70 text-sm">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gallery-rose-gold" />
                  <div>
                    <p className="text-gallery-dark-brown font-medium">Order Support</p>
                    <p className="text-gallery-dark-brown/70 text-sm">Track orders, returns & exchanges</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-gallery-gold" />
                  <div>
                    <p className="text-gallery-dark-brown font-medium">Shipping Info</p>
                    <p className="text-gallery-dark-brown/70 text-sm">Delivery times & shipping costs</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-gallery-silver" />
                  <div>
                    <p className="text-gallery-dark-brown font-medium">Product Care</p>
                    <p className="text-gallery-dark-brown/70 text-sm">Maintenance & care instructions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderShippingPage = () => (
    <div className="min-h-screen bg-gallery-beige py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-gallery-dark-brown mb-4">Shipping & Returns</h1>
          <p className="text-xl text-gallery-dark-brown/70">
            Everything you need to know about our shipping and return policies.
          </p>
        </div>

        <div className="space-y-12">
          {/* Shipping Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-gallery-rose-gold" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-gallery-dark-brown mb-3">Shipping Methods</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gallery-white rounded-lg">
                    <div>
                      <p className="font-medium text-gallery-dark-brown">Standard Shipping</p>
                      <p className="text-gallery-dark-brown/70 text-sm">5-7 business days</p>
                    </div>
                    <span className="text-gallery-dark-brown font-medium">$5.99</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gallery-white rounded-lg">
                    <div>
                      <p className="font-medium text-gallery-dark-brown">Express Shipping</p>
                      <p className="text-gallery-dark-brown/70 text-sm">2-3 business days</p>
                    </div>
                    <span className="text-gallery-dark-brown font-medium">$12.99</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gallery-white rounded-lg">
                    <div>
                      <p className="font-medium text-gallery-dark-brown">Next Day Delivery</p>
                      <p className="text-gallery-dark-brown/70 text-sm">1 business day</p>
                    </div>
                    <span className="text-gallery-dark-brown font-medium">$24.99</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-gallery-dark-brown mb-3">Free Shipping</h4>
                <p className="text-gallery-dark-brown/70">
                  Enjoy free standard shipping on all orders over $75. No code needed - 
                  discount applied automatically at checkout.
                </p>
              </div>

              <div>
                <h4 className="text-gallery-dark-brown mb-3">International Shipping</h4>
                <p className="text-gallery-dark-brown/70">
                  We currently ship to select countries. International shipping rates 
                  vary by destination and will be calculated at checkout. Please allow 
                  7-14 business days for international deliveries.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Returns Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-gallery-gold" />
                Returns & Exchanges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-gallery-dark-brown mb-3">Return Policy</h4>
                <p className="text-gallery-dark-brown/70 mb-4">
                  We want you to love your THE GALLERY jewelry. If you're not completely 
                  satisfied, you can return your purchase within 30 days of delivery for 
                  a full refund.
                </p>
                
                <div className="space-y-2 text-gallery-dark-brown/70">
                  <p>• Items must be in original condition with all packaging</p>
                  <p>• Personalized items cannot be returned</p>
                  <p>• Return shipping is free for defective items</p>
                  <p>• Customer pays return shipping for exchanges/refunds</p>
                </div>
              </div>

              <div>
                <h4 className="text-gallery-dark-brown mb-3">How to Return</h4>
                <div className="space-y-2 text-gallery-dark-brown/70">
                  <p>1. Contact our customer service team</p>
                  <p>2. Receive your return authorization and shipping label</p>
                  <p>3. Package your item securely</p>
                  <p>4. Ship using the provided label</p>
                  <p>5. Receive your refund within 5-7 business days</p>
                </div>
              </div>

              <div className="bg-gallery-white p-4 rounded-lg">
                <p className="text-gallery-dark-brown/70 text-sm">
                  Need help with a return? Contact us at returns@thegallery.com 
                  or call +1 (234) 567-8900
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderTermsPage = () => (
    <div className="min-h-screen bg-gallery-beige py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-gallery-dark-brown mb-4">Terms of Service</h1>
          <p className="text-gallery-dark-brown/70">
            Last updated: August 27, 2025
          </p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-gallery-dark-brown mb-4">1. Acceptance of Terms</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                By accessing and using THE GALLERY website and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">2. Products and Services</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                THE GALLERY provides high-quality stainless steel jewelry and accessories. We reserve the right to modify our product offerings without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">3. Orders and Payment</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                All orders are subject to availability and confirmation. We reserve the right to refuse any order. Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">4. Intellectual Property</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                All content on this website, including designs, text, graphics, and images, is the property of THE GALLERY and protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">5. Privacy</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">6. Contact Information</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@thegallery.com.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPrivacyPage = () => (
    <div className="min-h-screen bg-gallery-beige py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-gallery-dark-brown mb-4">Privacy Policy</h1>
          <p className="text-gallery-dark-brown/70">
            Last updated: August 27, 2025
          </p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-gallery-dark-brown mb-4">Information We Collect</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">How We Use Your Information</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">Information Sharing</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">Data Security</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-gallery-dark-brown mb-4">Your Rights</h2>
              <p className="text-gallery-dark-brown/70 leading-relaxed">
                You have the right to access, update, or delete your personal information. Contact us at privacy@thegallery.com to exercise these rights.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const render404Page = () => (
    <div className="min-h-screen bg-gallery-beige flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-gallery-dark-brown/20">404</div>
        </div>
        
        <h1 className="text-gallery-dark-brown mb-4">Page Not Found</h1>
        <p className="text-gallery-dark-brown/70 mb-8">
          Sorry, the page you're looking for doesn't exist. 
          Let's get you back to shopping beautiful jewelry.
        </p>
        
        <div className="space-y-4">
          <Button onClick={() => onNavigate('home')} className="w-full">
            Go Home
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onNavigate('catalog')}
            className="w-full"
          >
            Browse Collections
          </Button>
        </div>
      </div>
    </div>
  );

  // Route to appropriate page
  switch (page) {
    case 'about':
      return renderAboutPage();
    case 'contact':
      return renderContactPage();
    case 'shipping':
    case 'returns':
      return renderShippingPage();
    case 'terms':
      return renderTermsPage();
    case 'privacy':
      return renderPrivacyPage();
    case '404':
      return render404Page();
    default:
      return render404Page();
  }
}
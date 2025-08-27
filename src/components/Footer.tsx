import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from './RTLProvider';
import exampleLogo from 'figma:asset/6d6ce35b970d9d4a2fa8c61fceb6f27b1523b7da.png';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t, language } = useTranslation();
  const isRTL = language === 'ar';

  return (
    <footer className={`bg-gallery-beige border-t border-gallery-dark-brown/20 mt-auto ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Newsletter Section */}
      <div className="bg-gallery-dark-brown text-gallery-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="mb-4 text-gallery-white">
            {isRTL ? 'ابقي على تواصل' : 'Stay in Touch'}
          </h3>
          <p className="text-gallery-beige mb-6 max-w-md mx-auto">
            {isRTL 
              ? 'اشتركي لتحصلي على تحديثات حول المجموعات الجديدة والعروض الحصرية.' 
              : 'Subscribe to receive updates on new collections and exclusive offers.'
            }
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder={isRTL ? 'أدخلي بريدك الإلكتروني' : 'Enter your email'}
              className={`flex-1 px-4 py-3 bg-gallery-white text-gallery-black focus:outline-none focus:ring-2 focus:ring-gallery-rose-gold ${
                isRTL ? 'rounded-r-lg' : 'rounded-l-lg'
              }`}
            />
            <button className={`px-6 py-3 bg-gallery-rose-gold hover:bg-gallery-rose-gold/90 transition-colors ${
              isRTL ? 'rounded-l-lg' : 'rounded-r-lg'
            }`}>
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={exampleLogo}
                alt="THE GALLERY Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gallery-dark-brown/70 mb-6 text-sm leading-relaxed">
              {isRTL
                ? 'إكسسوارات الستانلس ستيل الفاخرة المصممة للمرأة العصرية. مصنوعة بدقة وشغف.'
                : 'Premium stainless steel accessories designed for the modern woman. Crafted with precision and passion.'
              }
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gallery-dark-brown hover:text-gallery-rose-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gallery-dark-brown hover:text-gallery-rose-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gallery-dark-brown hover:text-gallery-rose-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gallery-dark-brown mb-4">
              {isRTL ? 'التسوق' : 'Shop'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('catalog/new')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'الوصولات الجديدة' : 'New Arrivals'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalog/necklaces')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'القلائد' : 'Necklaces'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalog/bracelets')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'الأساور' : 'Bracelets'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalog/earrings')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'الأقراط' : 'Earrings'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('catalog/rings')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'الخواتم' : 'Rings'}
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-gallery-dark-brown mb-4">
              {isRTL ? 'خدمة العملاء' : 'Customer Care'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'اتصل بنا' : 'Contact Us'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('shipping')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'الشحن والإرجاع' : 'Shipping & Returns'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('size-guide')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'دليل المقاسات' : 'Size Guide'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('care-guide')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'تعليمات العناية' : 'Care Instructions'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('warranty')}
                  className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
                >
                  {isRTL ? 'الضمان' : 'Warranty'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gallery-dark-brown mb-4">
              {isRTL ? 'تواصل معنا' : 'Get in Touch'}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className={`w-4 h-4 text-gallery-rose-gold mt-0.5 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : ''}`} />
                <div className="text-gallery-dark-brown/70">
                  {isRTL ? (
                    <>
                      شارع الموضة 123<br />
                      الرياض 12345<br />
                      المملكة العربية السعودية
                    </>
                  ) : (
                    <>
                      123 Fashion Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className={`w-4 h-4 text-gallery-rose-gold flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : ''}`} />
                <a href="tel:+1234567890" className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors">
                  {isRTL ? '+966 50 123 4567' : '+1 (234) 567-8900'}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className={`w-4 h-4 text-gallery-rose-gold flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : ''}`} />
                <a href="mailto:hello@thegallery.com" className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors">
                  hello@thegallery.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className={`w-4 h-4 text-gallery-rose-gold mt-0.5 flex-shrink-0 ${isRTL ? 'ml-0 mr-3' : ''}`} />
                <div className="text-gallery-dark-brown/70 text-sm">
                  {isRTL ? (
                    <>
                      <p>الأحد - الخميس: 9:00 ص - 6:00 م</p>
                      <p>السبت: 10:00 ص - 4:00 م</p>
                      <p>الجمعة: مغلق</p>
                    </>
                  ) : (
                    <>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gallery-dark-brown/20 bg-gallery-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gallery-dark-brown/70">
              {isRTL 
                ? `© ${currentYear} THE GALLERY. جميع الحقوق محفوظة.`
                : `© ${currentYear} THE GALLERY. All rights reserved.`
              }
            </div>
            <div className="flex gap-6 text-sm">
              <button 
                onClick={() => onNavigate('privacy')}
                className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
              >
                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </button>
              <button 
                onClick={() => onNavigate('terms')}
                className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
              >
                {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
              </button>
              <button 
                onClick={() => onNavigate('accessibility')}
                className="text-gallery-dark-brown/70 hover:text-gallery-dark-brown transition-colors"
              >
                {isRTL ? 'إمكانية الوصول' : 'Accessibility'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Checkbox } from './ui/checkbox';
import { useTranslation } from './RTLProvider';
import exampleLogo from 'figma:asset/6d6ce35b970d9d4a2fa8c61fceb6f27b1523b7da.png';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface AuthPageProps {
  onNavigate: (page: string) => void;
  initialTab?: 'login' | 'register' | 'forgot';
}

export function AuthPage({ onNavigate, initialTab = 'login' }: AuthPageProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useTranslation();
  const isRTL = language === 'ar';

  const handleSubmit = async (e: React.FormEvent, type: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (type === 'login' || type === 'register') {
        onNavigate('account');
      }
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      onNavigate('account');
    }, 1000);
  };

  return (
    <div className={`min-h-screen bg-gallery-beige flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <ImageWithFallback
              src={exampleLogo}
              alt="THE GALLERY Logo"
              className="h-16 w-auto"
            />
          </div>
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-4 text-gallery-dark-brown/70 hover:text-gallery-dark-brown"
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {isRTL ? 'العودة للمتجر' : 'Back to Store'}
          </Button>
        </div>

        <Card className="shadow-lg border-gallery-dark-brown/20">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">{t('auth.signIn')}</TabsTrigger>
              <TabsTrigger value="register">{t('auth.createAccount')}</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <CardHeader>
                <CardTitle>{t('auth.welcomeBack')}</CardTitle>
                <CardDescription>
                  {isRTL 
                    ? 'سجلي الدخول إلى حسابك لمتابعة التسوق'
                    : 'Sign in to your account to continue shopping'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('auth.email')}</Label>
                    <div className="relative">
                      <Mail className={`absolute top-3 h-4 w-4 text-gallery-dark-brown/50 ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <Input
                        id="email"
                        type="email"
                        placeholder={isRTL ? 'أدخلي بريدك الإلكتروني' : 'Enter your email'}
                        className={isRTL ? 'pr-10' : 'pl-10'}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">{t('auth.password')}</Label>
                    <div className="relative">
                      <Lock className={`absolute top-3 h-4 w-4 text-gallery-dark-brown/50 ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder={isRTL ? 'أدخلي كلمة المرور' : 'Enter your password'}
                        className={isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={`absolute top-3 text-gallery-dark-brown/50 hover:text-gallery-dark-brown ${
                          isRTL ? 'left-3' : 'right-3'
                        }`}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">{t('auth.rememberMe')}</Label>
                    </div>
                    <Button
                      type="button"
                      variant="link"
                      className="px-0 text-gallery-rose-gold hover:text-gallery-rose-gold/80"
                      onClick={() => setActiveTab('forgot')}
                    >
                      {t('auth.forgotPassword')}
                    </Button>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (isRTL ? 'جاري تسجيل الدخول...' : 'Signing in...') : t('auth.signIn')}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      {isRTL ? 'أو تابعي مع' : 'Or continue with'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('google')}
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('facebook')}
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <CardHeader>
                <CardTitle>{t('auth.createAccount')}</CardTitle>
                <CardDescription>
                  {isRTL 
                    ? 'انضمي إلى THE GALLERY وابدئي رحلتك الفاخرة'
                    : 'Join THE GALLERY and start your luxury journey'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, 'register')} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t('auth.firstName')}</Label>
                      <div className="relative">
                        <User className={`absolute top-3 h-4 w-4 text-gallery-dark-brown/50 ${
                          isRTL ? 'right-3' : 'left-3'
                        }`} />
                        <Input
                          id="firstName"
                          placeholder={isRTL ? 'الاسم الأول' : 'First name'}
                          className={isRTL ? 'pr-10' : 'pl-10'}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t('auth.lastName')}</Label>
                      <Input
                        id="lastName"
                        placeholder={isRTL ? 'اسم العائلة' : 'Last name'}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">{t('auth.email')}</Label>
                    <div className="relative">
                      <Mail className={`absolute top-3 h-4 w-4 text-gallery-dark-brown/50 ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <Input
                        id="registerEmail"
                        type="email"
                        placeholder={isRTL ? 'أدخلي بريدك الإلكتروني' : 'Enter your email'}
                        className={isRTL ? 'pr-10' : 'pl-10'}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">{t('auth.password')}</Label>
                    <div className="relative">
                      <Lock className={`absolute top-3 h-4 w-4 text-gallery-dark-brown/50 ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <Input
                        id="registerPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder={isRTL ? 'أنشئي كلمة مرور' : 'Create a password'}
                        className={isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={`absolute top-3 text-gallery-dark-brown/50 hover:text-gallery-dark-brown ${
                          isRTL ? 'left-3' : 'right-3'
                        }`}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
                    <div className="relative">
                      <Lock className={`absolute top-3 h-4 w-4 text-gallery-dark-brown/50 ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder={isRTL ? 'أكدي كلمة المرور' : 'Confirm your password'}
                        className={isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className={`absolute top-3 text-gallery-dark-brown/50 hover:text-gallery-dark-brown ${
                          isRTL ? 'left-3' : 'right-3'
                        }`}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 rtl:space-x-reverse">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm leading-5">
                      {isRTL ? 'أوافق على ' : 'I agree to the '}
                      <Button
                        type="button"
                        variant="link"
                        className="px-0 h-auto text-gallery-rose-gold hover:text-gallery-rose-gold/80"
                        onClick={() => onNavigate('terms')}
                      >
                        {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
                      </Button>
                      {isRTL ? ' و' : ' and '}
                      <Button
                        type="button"
                        variant="link"
                        className="px-0 h-auto text-gallery-rose-gold hover:text-gallery-rose-gold/80"
                        onClick={() => onNavigate('privacy')}
                      >
                        {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
                      </Button>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2 rtl:space-x-reverse">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      {isRTL 
                        ? 'اشتركي لتحصلي على تحديثات حول المجموعات الجديدة والعروض الحصرية'
                        : 'Subscribe to receive updates on new collections and exclusive offers'
                      }
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (isRTL ? 'جاري إنشاء الحساب...' : 'Creating account...') : t('auth.createAccount')}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      {isRTL ? 'أو تابعي مع' : 'Or continue with'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('google')}
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialLogin('facebook')}
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </TabsContent>

            {/* Forgot Password Tab */}
            <TabsContent value="forgot">
              <CardHeader>
                <CardTitle>
                  {isRTL ? 'إعادة تعيين كلمة المرور' : 'Reset Password'}
                </CardTitle>
                <CardDescription>
                  {isRTL 
                    ? 'أدخلي بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين'
                    : 'Enter your email and we\'ll send you a reset link'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, 'forgot')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="resetEmail">{t('auth.email')}</Label>
                    <div className="relative">
                      <Mail className={`absolute top-3 h-4 w-4 text-gallery-dark-brown/50 ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <Input
                        id="resetEmail"
                        type="email"
                        placeholder={isRTL ? 'أدخلي بريدك الإلكتروني' : 'Enter your email'}
                        className={isRTL ? 'pr-10' : 'pl-10'}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (isRTL ? 'جاري الإرسال...' : 'Sending...') : (isRTL ? 'إرسال رابط إعادة التعيين' : 'Send Reset Link')}
                  </Button>
                </form>

                <div className="text-center">
                  <Button
                    variant="link"
                    onClick={() => setActiveTab('login')}
                    className="text-gallery-rose-gold hover:text-gallery-rose-gold/80"
                  >
                    {isRTL ? 'العودة لتسجيل الدخول' : 'Back to Sign In'}
                  </Button>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
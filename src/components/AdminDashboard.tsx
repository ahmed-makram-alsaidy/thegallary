import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { useTranslation } from './RTLProvider';
import exampleLogo from 'figma:asset/6d6ce35b970d9d4a2fa8c61fceb6f27b1523b7da.png';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  DollarSign, 
  Plus, 
  Edit, 
  Eye, 
  Search,
  Filter,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  TrendingUp,
  Star,
  Calendar,
  MapPin,
  Truck,
  AlertCircle,
  CheckCircle,
  Clock,
  X,
  Upload,
  Save,
  Trash2,
  Settings,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const { t, language } = useTranslation();
  const isRTL = language === 'ar';

  // Mock data for the dashboard
  const stats = [
    {
      title: 'إجمالي الإيرادات',
      titleEn: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-gallery-rose-gold',
      period: 'هذا الشهر'
    },
    {
      title: 'الطلبات',
      titleEn: 'Orders',
      value: '324',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-gallery-gold',
      period: 'هذا الأسبوع'
    },
    {
      title: 'المنتجات',
      titleEn: 'Products',
      value: '48',
      change: '+5',
      trend: 'up',
      icon: Package,
      color: 'text-gallery-silver',
      period: 'المنتجات النشطة'
    },
    {
      title: 'العملاء',
      titleEn: 'Customers',
      value: '2,847',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'text-gallery-dark-brown',
      period: 'عملاء مسجلين'
    }
  ];

  const recentOrders = [
    {
      id: '#ORD-2024-001',
      customer: 'سارة أحمد',
      customerEn: 'Sarah Ahmed',
      email: 'sarah@example.com',
      amount: '$156.50',
      status: 'processing',
      statusAr: 'قيد المعالجة',
      date: '2024-01-15',
      items: 3,
      location: 'الرياض، السعودية'
    },
    {
      id: '#ORD-2024-002',
      customer: 'فاطمة محمد',
      customerEn: 'Fatima Mohammed',
      email: 'fatima@example.com',
      amount: '$89.99',
      status: 'completed',
      statusAr: 'مكتمل',
      date: '2024-01-15',
      items: 2,
      location: 'دبي، الإمارات'
    },
    {
      id: '#ORD-2024-003',
      customer: 'نور الدين',
      customerEn: 'Nour Al-Din',
      email: 'nour@example.com',
      amount: '$245.00',
      status: 'shipped',
      statusAr: 'تم الشحن',
      date: '2024-01-14',
      items: 4,
      location: 'القاهرة، مصر'
    },
    {
      id: '#ORD-2024-004',
      customer: 'ليلى حسن',
      customerEn: 'Layla Hassan',
      email: 'layla@example.com',
      amount: '$320.75',
      status: 'pending',
      statusAr: 'معلق',
      date: '2024-01-14',
      items: 5,
      location: 'عمان، الأردن'
    }
  ];

  const products = [
    {
      id: 'PRD-001',
      name: 'عقد ذهبي رقيق',
      nameEn: 'Rose Gold Delicate Chain Necklace',
      category: 'قلائد',
      categoryEn: 'Necklaces', 
      price: '$89.99',
      stock: 24,
      status: 'active',
      statusAr: 'نشط',
      sold: 156,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ29sZCUyMG5lY2tsYWNlJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjgyOTB8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 'PRD-002',
      name: 'سوار فضي أنيق',
      nameEn: 'Silver Minimalist Bracelet',
      category: 'أساور',
      categoryEn: 'Bracelets',
      price: '$65.99',
      stock: 18,
      status: 'active',
      statusAr: 'نشط',
      sold: 89,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1725368844213-c167fe556f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMGpld2Vscnl8ZW58MXx8fHwxNzU2MjQyNjk0fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 'PRD-003',
      name: 'أقراط ذهبية مميزة',
      nameEn: 'Gold Statement Earrings',
      category: 'أقراط',
      categoryEn: 'Earrings',
      price: '$125.99',
      stock: 0,
      status: 'out_of_stock',
      statusAr: 'نفد المخزون',
      sold: 203,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1654700194896-6318cdc3b184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb3NlJTIwZ29sZCUyMGVhcnJpbmdzJTIwamV3ZWxyeXxlbnwxfHx8fDE3NTYzMjkyNzl8MA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  const customers = [
    {
      id: 'CUST-001',
      name: 'سارة أحمد',
      nameEn: 'Sarah Ahmed',
      email: 'sarah@example.com',
      phone: '+966501234567',
      totalOrders: 12,
      totalSpent: '$1,890.50',
      status: 'vip',
      statusAr: 'عميل مميز',
      joinDate: '2023-06-15',
      location: 'الرياض، السعودية'
    },
    {
      id: 'CUST-002',
      name: 'فاطمة محمد',
      nameEn: 'Fatima Mohammed',
      email: 'fatima@example.com',
      phone: '+971501234567',
      totalOrders: 8,
      totalSpent: '$950.75',
      status: 'regular',
      statusAr: 'عميل عادي',
      joinDate: '2023-08-22',
      location: 'دبي، الإمارات'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'bg-green-100 text-green-800',
      processing: 'bg-yellow-100 text-yellow-800',
      shipped: 'bg-blue-100 text-blue-800',
      pending: 'bg-orange-100 text-orange-800',
      cancelled: 'bg-red-100 text-red-800',
      active: 'bg-green-100 text-green-800',
      out_of_stock: 'bg-red-100 text-red-800',
      draft: 'bg-gray-100 text-gray-800',
      vip: 'bg-purple-100 text-purple-800',
      regular: 'bg-blue-100 text-blue-800'
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants] || variants.draft}>
        {isRTL ? getStatusTextAr(status) : status.replace('_', ' ')}
      </Badge>
    );
  };

  const getStatusTextAr = (status: string) => {
    const statusMap = {
      completed: 'مكتمل',
      processing: 'قيد المعالجة',
      shipped: 'تم الشحن',
      pending: 'معلق',
      cancelled: 'ملغي',
      active: 'نشط',
      out_of_stock: 'نفد المخزون',
      draft: 'مسودة',
      vip: 'عميل مميز',
      regular: 'عميل عادي'
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  return (
    <div className={`min-h-screen bg-gallery-beige ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="bg-gallery-white border-b border-gallery-dark-brown/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ImageWithFallback
              src={exampleLogo}
              alt="THE GALLERY Logo"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-gallery-dark-brown">
                {isRTL ? 'لوحة التحكم' : 'Admin Dashboard'}
              </h1>
              <p className="text-gallery-dark-brown/70 mt-1">
                {isRTL ? 'إدارة متجرك وتتبع الأداء' : 'Manage your store and track performance'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => onNavigate('home')} variant="outline">
              {isRTL ? 'عرض المتجر' : 'View Store'}
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="overview">{isRTL ? 'نظرة عامة' : 'Overview'}</TabsTrigger>
            <TabsTrigger value="products">{isRTL ? 'المنتجات' : 'Products'}</TabsTrigger>
            <TabsTrigger value="orders">{isRTL ? 'الطلبات' : 'Orders'}</TabsTrigger>
            <TabsTrigger value="customers">{isRTL ? 'العملاء' : 'Customers'}</TabsTrigger>
            <TabsTrigger value="analytics">{isRTL ? 'التحليلات' : 'Analytics'}</TabsTrigger>
            <TabsTrigger value="settings">{isRTL ? 'الإعدادات' : 'Settings'}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {isRTL ? stat.title : stat.titleEn}
                    </CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      {stat.trend === 'up' ? (
                        <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                      )}
                      {stat.change} {isRTL ? 'من الشهر الماضي' : 'from last month'}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-gallery-rose-gold" />
                    {isRTL ? 'الطلبات الأخيرة' : 'Recent Orders'}
                  </CardTitle>
                  <CardDescription>
                    {isRTL ? 'آخر طلبات العملاء' : 'Latest customer orders'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-gallery-white rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-gallery-dark-brown">
                            {isRTL ? order.customer : order.customerEn}
                          </p>
                          <p className="text-sm text-gallery-dark-brown/60">{order.id}</p>
                          <p className="text-xs text-gallery-dark-brown/50">{order.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gallery-dark-brown">{order.amount}</p>
                          {getStatusBadge(order.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => setSelectedTab('orders')}
                  >
                    {isRTL ? 'عرض جميع الطلبات' : 'View All Orders'}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-gallery-gold" />
                    {isRTL ? 'إجراءات سريعة' : 'Quick Actions'}
                  </CardTitle>
                  <CardDescription>
                    {isRTL ? 'المهام الإدارية الشائعة' : 'Common admin tasks'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setIsProductDialogOpen(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {isRTL ? 'إضافة منتج جديد' : 'Add New Product'}
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setSelectedTab('orders')}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    {isRTL ? 'إدارة المخزون' : 'Manage Inventory'}
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setSelectedTab('analytics')}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    {isRTL ? 'عرض التحليلات' : 'View Analytics'}
                  </Button>
                  <Button 
                    className="w-full justify-start" 
                    variant="outline"
                    onClick={() => setSelectedTab('customers')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    {isRTL ? 'إدارة العملاء' : 'Customer Management'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gallery-dark-brown">
                  {isRTL ? 'إدارة المنتجات' : 'Product Management'}
                </h2>
                <p className="text-gallery-dark-brown/70">
                  {isRTL ? 'إدارة كتالوج منتجاتك' : 'Manage your product catalog'}
                </p>
              </div>
              <Button onClick={() => setIsProductDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                {isRTL ? 'إضافة منتج' : 'Add Product'}
              </Button>
            </div>

            {/* Filters */}
            <div className="flex gap-4 flex-wrap">
              <div className="relative flex-1 min-w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground rtl:left-auto rtl:right-3" />
                <Input 
                  placeholder={isRTL ? 'البحث عن المنتجات...' : 'Search products...'} 
                  className="pl-9 rtl:pl-3 rtl:pr-9" 
                />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={isRTL ? 'الفئة' : 'Category'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{isRTL ? 'جميع الفئات' : 'All Categories'}</SelectItem>
                  <SelectItem value="necklaces">{isRTL ? 'قلائد' : 'Necklaces'}</SelectItem>
                  <SelectItem value="bracelets">{isRTL ? 'أساور' : 'Bracelets'}</SelectItem>
                  <SelectItem value="earrings">{isRTL ? 'أقراط' : 'Earrings'}</SelectItem>
                  <SelectItem value="rings">{isRTL ? 'خواتم' : 'Rings'}</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                {isRTL ? 'تصفية' : 'Filter'}
              </Button>
            </div>

            {/* Products Table */}
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{isRTL ? 'المنتج' : 'Product'}</TableHead>
                    <TableHead>{isRTL ? 'الفئة' : 'Category'}</TableHead>
                    <TableHead>{isRTL ? 'السعر' : 'Price'}</TableHead>
                    <TableHead>{isRTL ? 'المخزون' : 'Stock'}</TableHead>
                    <TableHead>{isRTL ? 'تم البيع' : 'Sold'}</TableHead>
                    <TableHead>{isRTL ? 'التقييم' : 'Rating'}</TableHead>
                    <TableHead>{isRTL ? 'الحالة' : 'Status'}</TableHead>
                    <TableHead>{isRTL ? 'إجراءات' : 'Actions'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          <div>
                            <p className="font-medium text-gallery-dark-brown">
                              {isRTL ? product.name : product.nameEn}
                            </p>
                            <p className="text-sm text-muted-foreground">{product.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{isRTL ? product.category : product.categoryEn}</TableCell>
                      <TableCell className="font-medium">{product.price}</TableCell>
                      <TableCell>
                        <span className={product.stock === 0 ? 'text-red-600' : 'text-gallery-dark-brown'}>
                          {product.stock}
                        </span>
                      </TableCell>
                      <TableCell>{product.sold}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-gallery-gold text-gallery-gold" />
                          <span>{product.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gallery-dark-brown">
                  {isRTL ? 'إدارة الطلبات' : 'Order Management'}
                </h2>
                <p className="text-gallery-dark-brown/70">
                  {isRTL ? 'إدارة طلبات العملاء' : 'Manage customer orders'}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  {isRTL ? 'تصدير' : 'Export'}
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  {isRTL ? 'تصفية' : 'Filter'}
                </Button>
              </div>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{isRTL ? 'رقم الطلب' : 'Order ID'}</TableHead>
                    <TableHead>{isRTL ? 'العميل' : 'Customer'}</TableHead>
                    <TableHead>{isRTL ? 'المبلغ' : 'Amount'}</TableHead>
                    <TableHead>{isRTL ? 'العناصر' : 'Items'}</TableHead>
                    <TableHead>{isRTL ? 'الحالة' : 'Status'}</TableHead>
                    <TableHead>{isRTL ? 'التاريخ' : 'Date'}</TableHead>
                    <TableHead>{isRTL ? 'الموقع' : 'Location'}</TableHead>
                    <TableHead>{isRTL ? 'إجراءات' : 'Actions'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gallery-dark-brown">
                            {isRTL ? order.customer : order.customerEn}
                          </p>
                          <p className="text-sm text-muted-foreground">{order.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{order.amount}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="text-sm">{order.location}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => setSelectedOrder(order)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Truck className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gallery-dark-brown">
                  {isRTL ? 'إدارة العملاء' : 'Customer Management'}
                </h2>
                <p className="text-gallery-dark-brown/70">
                  {isRTL ? 'إدارة حسابات العملاء' : 'Manage customer accounts'}
                </p>
              </div>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{isRTL ? 'العميل' : 'Customer'}</TableHead>
                    <TableHead>{isRTL ? 'رقم الهاتف' : 'Phone'}</TableHead>
                    <TableHead>{isRTL ? 'الطلبات' : 'Orders'}</TableHead>
                    <TableHead>{isRTL ? 'إجمالي المبلغ' : 'Total Spent'}</TableHead>
                    <TableHead>{isRTL ? 'الحالة' : 'Status'}</TableHead>
                    <TableHead>{isRTL ? 'تاريخ التسجيل' : 'Join Date'}</TableHead>
                    <TableHead>{isRTL ? 'الموقع' : 'Location'}</TableHead>
                    <TableHead>{isRTL ? 'إجراءات' : 'Actions'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gallery-dark-brown">
                            {isRTL ? customer.name : customer.nameEn}
                          </p>
                          <p className="text-sm text-muted-foreground">{customer.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{customer.phone}</TableCell>
                      <TableCell>{customer.totalOrders}</TableCell>
                      <TableCell className="font-medium">{customer.totalSpent}</TableCell>
                      <TableCell>{getStatusBadge(customer.status)}</TableCell>
                      <TableCell>{customer.joinDate}</TableCell>
                      <TableCell className="text-sm">{customer.location}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gallery-dark-brown">
                  {isRTL ? 'تحليلات الأداء' : 'Performance Analytics'}
                </h2>
                <p className="text-gallery-dark-brown/70">
                  {isRTL ? 'تتبع أداء المتجر' : 'Track store performance'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-gallery-rose-gold" />
                    {isRTL ? 'مبيعات الشهر' : 'Monthly Sales'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$28,450</div>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? '+15% من الشهر الماضي' : '+15% from last month'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-gallery-gold" />
                    {isRTL ? 'أفضل المنتجات' : 'Top Products'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{isRTL ? 'قلائد' : 'Necklaces'}</span>
                      <span>45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{isRTL ? 'أساور' : 'Bracelets'}</span>
                      <span>30%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{isRTL ? 'أقراط' : 'Earrings'}</span>
                      <span>25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-gallery-silver" />
                    {isRTL ? 'معدل التحويل' : 'Conversion Rate'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? '+0.5% من الأسبوع الماضي' : '+0.5% from last week'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-gallery-dark-brown">
                {isRTL ? 'إعدادات المتجر' : 'Store Settings'}
              </h2>
              <p className="text-gallery-dark-brown/70">
                {isRTL ? 'إدارة إعدادات المتجر العامة' : 'Manage general store settings'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'معلومات المتجر' : 'Store Information'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>{isRTL ? 'اسم المتجر' : 'Store Name'}</Label>
                    <Input defaultValue="THE GALLERY" />
                  </div>
                  <div>
                    <Label>{isRTL ? 'وصف المتجر' : 'Store Description'}</Label>
                    <Textarea defaultValue="Premium stainless steel accessories for the modern woman" />
                  </div>
                  <div>
                    <Label>{isRTL ? 'البريد الإلكتروني' : 'Contact Email'}</Label>
                    <Input defaultValue="hello@thegallery.com" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'إعدادات الشحن' : 'Shipping Settings'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>{isRTL ? 'شحن مجاني فوق $75' : 'Free shipping over $75'}</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>{isRTL ? 'الشحن الدولي' : 'International shipping'}</Label>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <Label>{isRTL ? 'وقت المعالجة (أيام)' : 'Processing time (days)'}</Label>
                    <Input type="number" defaultValue="1-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add Product Dialog */}
      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
        <DialogContent className={`max-w-2xl ${isRTL ? 'rtl' : 'ltr'}`}>
          <DialogHeader>
            <DialogTitle>
              {isRTL ? 'إضافة منتج جديد' : 'Add New Product'}
            </DialogTitle>
            <DialogDescription>
              {isRTL ? 'أضف منتجاً جديداً إلى كتالوج المتجر' : 'Add a new product to your store catalog'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{isRTL ? 'اسم المنتج' : 'Product Name'}</Label>
                <Input placeholder={isRTL ? 'أدخل اسم المنتج' : 'Enter product name'} />
              </div>
              <div>
                <Label>{isRTL ? 'الفئة' : 'Category'}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={isRTL ? 'اختر الفئة' : 'Select category'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="necklaces">{isRTL ? 'قلائد' : 'Necklaces'}</SelectItem>
                    <SelectItem value="bracelets">{isRTL ? 'أساور' : 'Bracelets'}</SelectItem>
                    <SelectItem value="earrings">{isRTL ? 'أقراط' : 'Earrings'}</SelectItem>
                    <SelectItem value="rings">{isRTL ? 'خواتم' : 'Rings'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>{isRTL ? 'وصف المنتج' : 'Product Description'}</Label>
              <Textarea placeholder={isRTL ? 'أدخل وصف المنتج' : 'Enter product description'} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{isRTL ? 'السعر' : 'Price'}</Label>
                <Input type="number" placeholder="0.00" />
              </div>
              <div>
                <Label>{isRTL ? 'الكمية' : 'Stock Quantity'}</Label>
                <Input type="number" placeholder="0" />
              </div>
            </div>
            <div>
              <Label>{isRTL ? 'صور المنتج' : 'Product Images'}</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  {isRTL ? 'اسحب الصور هنا أو انقر للرفع' : 'Drag images here or click to upload'}
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsProductDialogOpen(false)}>
                {isRTL ? 'إلغاء' : 'Cancel'}
              </Button>
              <Button>
                <Save className="w-4 h-4 mr-2" />
                {isRTL ? 'حفظ المنتج' : 'Save Product'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
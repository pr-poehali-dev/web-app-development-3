import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('home');

  const services = [
    {
      id: 1,
      title: 'Консультация эксперта',
      description: 'Персональная консультация от профессионала',
      price: '2 500 ₽',
      duration: '60 минут',
      icon: 'Users',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Премиум поддержка',
      description: 'Круглосуточная поддержка и помощь',
      price: '5 000 ₽',
      duration: 'Месяц',
      icon: 'Shield',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Индивидуальный проект',
      description: 'Разработка решения под ваши задачи',
      price: 'От 15 000 ₽',
      duration: 'По договору',
      icon: 'Rocket',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Обучающий курс',
      description: 'Полный курс с сертификатом',
      price: '8 000 ₽',
      duration: '2 недели',
      icon: 'GraduationCap',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const orderHistory = [
    {
      id: '#ORD-2024-001',
      service: 'Консультация эксперта',
      date: '15 января 2024',
      status: 'Выполнено',
      price: '2 500 ₽'
    },
    {
      id: '#ORD-2024-002',
      service: 'Премиум поддержка',
      date: '20 января 2024',
      status: 'В процессе',
      price: '5 000 ₽'
    },
    {
      id: '#ORD-2024-003',
      service: 'Обучающий курс',
      date: '25 января 2024',
      status: 'Запланировано',
      price: '8 000 ₽'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Выполнено': return 'bg-green-500/20 text-green-300 border-green-500/50';
      case 'В процессе': return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      case 'Запланировано': return 'bg-purple-500/20 text-purple-300 border-purple-500/50';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ServiceHub
            </span>
          </div>
          
          <div className="flex gap-6 items-center">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`transition-colors ${activeTab === 'services' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Услуги
            </button>
            <Button 
              onClick={() => setIsProfileOpen(true)}
              variant="outline" 
              className="rounded-full gap-2"
            >
              <Icon name="User" size={18} />
              Профиль
            </Button>
          </div>
        </div>
      </nav>

      {activeTab === 'home' && (
        <section className="container mx-auto px-4 py-20 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/20 text-primary border-primary/50">
                🚀 Новый формат сервиса
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              Услуги нового
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                поколения
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Инновационная платформа для получения профессиональных услуг с персональным подходом и прозрачностью на каждом этапе
            </p>
            
            <div className="flex gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-full px-8"
                onClick={() => setActiveTab('services')}
              >
                <Icon name="ArrowRight" className="mr-2" size={20} />
                Посмотреть услуги
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8"
                onClick={() => setIsProfileOpen(true)}
              >
                <Icon name="User" className="mr-2" size={20} />
                Личный кабинет
              </Button>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-2">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <CardTitle>Быстро</CardTitle>
                <CardDescription>
                  Моментальное оформление и начало работы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-2">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <CardTitle>Надёжно</CardTitle>
                <CardDescription>
                  Проверенные специалисты и гарантия качества
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-2">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <CardTitle>Удобно</CardTitle>
                <CardDescription>
                  Интуитивный интерфейс и поддержка 24/7
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      )}

      {activeTab === 'services' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground text-lg">
                Выберите подходящий вариант для ваших задач
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={service.id}
                  className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all cursor-pointer group animate-scale-in overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setSelectedService(service)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <Icon name={service.icon as any} className="text-white" size={28} />
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/50">
                        {service.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mt-4">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {service.price}
                      </span>
                      <Button className="rounded-full" variant="outline">
                        <Icon name="ArrowRight" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedService?.title}</DialogTitle>
            <DialogDescription>
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Стоимость</span>
              <span className="text-2xl font-bold text-primary">{selectedService?.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Длительность</span>
              <span className="font-medium">{selectedService?.duration}</span>
            </div>
            <Separator />
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Icon name="ShoppingCart" className="mr-2" size={18} />
              Заказать услугу
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Личный кабинет</DialogTitle>
            <DialogDescription>
              Управляйте своим профилем и заказами
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">
                <Icon name="User" className="mr-2" size={16} />
                Профиль
              </TabsTrigger>
              <TabsTrigger value="orders">
                <Icon name="ShoppingBag" className="mr-2" size={16} />
                Заказы
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Icon name="Settings" className="mr-2" size={16} />
                Настройки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <Avatar className="w-20 h-20 border-2 border-primary">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                    АИ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Александр Иванов</h3>
                  <p className="text-muted-foreground">alex.ivanov@email.com</p>
                  <Badge className="mt-2 bg-primary/20 text-primary border-primary/50">
                    Премиум клиент
                  </Badge>
                </div>
              </div>

              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle>Статистика</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">12</div>
                      <div className="text-sm text-muted-foreground">Заказов</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">45 000₽</div>
                      <div className="text-sm text-muted-foreground">Потрачено</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent">98%</div>
                      <div className="text-sm text-muted-foreground">Рейтинг</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              {orderHistory.map((order) => (
                <Card key={order.id} className="bg-card/50 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{order.service}</CardTitle>
                        <CardDescription>{order.date}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Номер заказа: {order.id}</span>
                      <span className="font-bold text-lg text-primary">{order.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle>Основные настройки</CardTitle>
                  <CardDescription>Измените информацию о профиле</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" defaultValue="Александр Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.ivanov@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" defaultValue="+7 (999) 123-45-67" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Save" className="mr-2" size={18} />
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/50">
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                  <CardDescription>Настройте способы получения уведомлений</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email уведомления</p>
                      <p className="text-sm text-muted-foreground">Получать письма о заказах</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS уведомления</p>
                      <p className="text-sm text-muted-foreground">Получать SMS о статусе</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

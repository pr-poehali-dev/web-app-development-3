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

  const services = [
    {
      id: 1,
      title: 'Массаж лица',
      description: 'Расслабляющий массаж для улучшения тонуса кожи',
      price: '2 500 ₽',
      duration: '60 мин',
      rating: 5.0,
      reviews: 15,
      image: '👐'
    },
    {
      id: 2,
      title: 'Чистка лица',
      description: 'Глубокая чистка пор и увлажнение',
      price: '3 000 ₽',
      duration: '90 мин',
      rating: 5.0,
      reviews: 23,
      image: '✨'
    },
    {
      id: 3,
      title: 'Пилинг',
      description: 'Химический пилинг для обновления кожи',
      price: '3 500 ₽',
      duration: '45 мин',
      rating: 4.9,
      reviews: 18,
      image: '🌟'
    },
    {
      id: 4,
      title: 'Оформление бровей',
      description: 'Коррекция и окрашивание бровей',
      price: '1 500 ₽',
      duration: '30 мин',
      rating: 5.0,
      reviews: 31,
      image: '💫'
    },
    {
      id: 5,
      title: 'Наращивание ресниц',
      description: 'Классическое или объемное наращивание',
      price: '2 800 ₽',
      duration: '120 мин',
      rating: 5.0,
      reviews: 27,
      image: '👁️'
    },
    {
      id: 6,
      title: 'Консультация косметолога',
      description: 'Подбор индивидуального ухода за кожей',
      price: '1 000 ₽',
      duration: '40 мин',
      rating: 5.0,
      reviews: 12,
      image: '💬'
    }
  ];

  const orderHistory = [
    {
      id: '#12345',
      service: 'Массаж лица',
      date: '15 января 2024',
      time: '14:00',
      status: 'Выполнено',
      price: '2 500 ₽',
      specialist: 'Светлана'
    },
    {
      id: '#12346',
      service: 'Чистка лица',
      date: '22 января 2024',
      time: '16:30',
      status: 'Подтверждено',
      price: '3 000 ₽',
      specialist: 'Светлана'
    },
    {
      id: '#12347',
      service: 'Пилинг',
      date: '5 февраля 2024',
      time: '11:00',
      status: 'Ожидает',
      price: '3 500 ₽',
      specialist: 'Светлана'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Выполнено': return 'bg-green-100 text-green-700 border-green-200';
      case 'Подтверждено': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Ожидает': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#4d85d5] to-[#85cdf5] shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Portret</h1>
                <p className="text-xs text-white/80">Владивосток, ул. Уборевича 19</p>
              </div>
            </div>
            
            <Button 
              onClick={() => setIsProfileOpen(true)}
              variant="secondary"
              className="rounded-full gap-2 bg-white hover:bg-white/90"
            >
              <Icon name="User" size={18} />
              <span className="hidden sm:inline">Профиль</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4d85d5] to-[#85cdf5] flex items-center justify-center text-3xl">
              ✨
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">Студия эстетики лица Portret</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Icon name="Star" className="text-orange-400 fill-orange-400" size={16} />
                  <span className="font-semibold">5.0</span>
                  <span className="text-muted-foreground text-sm">(41 отзыв)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>Пн-Вс: 10:00-20:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Профессиональная косметология и уход за лицом. Индивидуальный подход к каждому клиенту. 
            Используем только сертифицированную косметику премиум-класса.
          </p>

          <div className="flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-[#4d85d5] to-[#85cdf5] hover:opacity-90">
              <Icon name="Calendar" className="mr-2" size={18} />
              Записаться онлайн
            </Button>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Icon name="MessageCircle" size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Icon name="Phone" size={18} />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4 px-1">Наши услуги</h3>
          <div className="space-y-3">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="bg-white hover:shadow-md transition-all cursor-pointer border-0 shadow-sm"
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4d85d5] to-[#85cdf5] flex items-center justify-center text-3xl flex-shrink-0">
                      {service.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-lg font-bold text-[#4d85d5]">{service.price}</span>
                          <span className="text-muted-foreground">{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Icon name="Star" className="text-orange-400 fill-orange-400" size={14} />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-muted-foreground">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#4d85d5] to-[#85cdf5] rounded-2xl p-6 text-white text-center">
          <Icon name="Gift" className="mx-auto mb-3" size={32} />
          <h3 className="text-xl font-bold mb-2">Подарочные сертификаты</h3>
          <p className="mb-4 text-white/90">Порадуйте близких процедурами по уходу</p>
          <Button variant="secondary" className="bg-white text-[#4d85d5] hover:bg-white/90">
            Купить сертификат
          </Button>
        </div>
      </main>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4d85d5] to-[#85cdf5] flex items-center justify-center text-2xl">
                {selectedService?.image}
              </div>
              <div>
                <DialogTitle className="text-xl text-left">{selectedService?.title}</DialogTitle>
                <div className="flex items-center gap-1 text-sm">
                  <Icon name="Star" className="text-orange-400 fill-orange-400" size={14} />
                  <span className="font-medium">{selectedService?.rating}</span>
                  <span className="text-muted-foreground">({selectedService?.reviews} отзывов)</span>
                </div>
              </div>
            </div>
            <DialogDescription className="text-left">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div className="bg-muted/50 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Стоимость</span>
                <span className="text-2xl font-bold text-[#4d85d5]">{selectedService?.price}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Длительность</span>
                <span className="font-medium">{selectedService?.duration}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Специалист</span>
                <span className="font-medium">Светлана</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Выберите дату</Label>
              <Input id="date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Выберите время</Label>
              <Input id="time" type="time" />
            </div>

            <Button className="w-full bg-gradient-to-r from-[#4d85d5] to-[#85cdf5] hover:opacity-90 h-12 text-base">
              <Icon name="Calendar" className="mr-2" size={18} />
              Записаться на процедуру
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Личный кабинет</DialogTitle>
            <DialogDescription>
              Управляйте записями и настройками профиля
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="profile">
                <Icon name="User" className="mr-2" size={16} />
                Профиль
              </TabsTrigger>
              <TabsTrigger value="orders">
                <Icon name="Calendar" className="mr-2" size={16} />
                Записи
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Icon name="Settings" className="mr-2" size={16} />
                Настройки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[#4d85d5]/10 to-[#85cdf5]/10">
                <Avatar className="w-16 h-16 border-2 border-[#4d85d5]">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-br from-[#4d85d5] to-[#85cdf5] text-white text-xl">
                    АИ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Анна Иванова</h3>
                  <p className="text-sm text-muted-foreground">anna.ivanova@email.com</p>
                  <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Статистика посещений</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-[#4d85d5]">12</div>
                      <div className="text-xs text-muted-foreground">Визитов</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-[#85cdf5]">28 500₽</div>
                      <div className="text-xs text-muted-foreground">Потрачено</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="space-y-3">
              {orderHistory.map((order) => (
                <Card key={order.id} className="border-0 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{order.service}</h4>
                        <p className="text-sm text-muted-foreground">
                          {order.date} в {order.time}
                        </p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm text-muted-foreground">Специалист: {order.specialist}</span>
                      <span className="font-bold text-[#4d85d5]">{order.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Персональные данные</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm">Имя</Label>
                    <Input id="name" defaultValue="Анна Иванова" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <Input id="email" type="email" defaultValue="anna.ivanova@email.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm">Телефон</Label>
                    <Input id="phone" type="tel" defaultValue="+7 (999) 123-45-67" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Уведомления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">SMS напоминания</p>
                      <p className="text-xs text-muted-foreground">О предстоящих записях</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#4d85d5]" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Email уведомления</p>
                      <p className="text-xs text-muted-foreground">Новости и акции</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#4d85d5]" />
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-gradient-to-r from-[#4d85d5] to-[#85cdf5] hover:opacity-90">
                <Icon name="Save" className="mr-2" size={18} />
                Сохранить изменения
              </Button>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 sm:hidden">
        <Button className="w-full bg-gradient-to-r from-[#4d85d5] to-[#85cdf5] hover:opacity-90 h-12">
          <Icon name="Calendar" className="mr-2" size={18} />
          Записаться сейчас
        </Button>
      </div>
    </div>
  );
};

export default Index;
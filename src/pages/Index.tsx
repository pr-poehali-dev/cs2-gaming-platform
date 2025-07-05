import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Target" className="text-primary" size={32} />
                <h1
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "Rajdhani" }}
                >
                  CS2 PLATFORM
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти через Steam
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-5xl font-bold mb-6 text-primary"
            style={{ fontFamily: "Rajdhani" }}
          >
            КИБЕРСПОРТИВНАЯ ПЛАТФОРМА
          </h2>
          <p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter" }}
          >
            Находи тиммейтов, повышай рейтинг, изучай карты и становись лучше в
            Counter-Strike 2
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Найти команду
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="rankings" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card">
            <TabsTrigger
              value="rankings"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="Trophy" size={16} className="mr-2" />
              Рейтинги
            </TabsTrigger>
            <TabsTrigger
              value="teammates"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="Users" size={16} className="mr-2" />
              Поиск команды
            </TabsTrigger>
            <TabsTrigger
              value="maps"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="Map" size={16} className="mr-2" />
              Карты
            </TabsTrigger>
            <TabsTrigger
              value="guides"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Icon name="BookOpen" size={16} className="mr-2" />
              Гайды
            </TabsTrigger>
          </TabsList>

          {/* Rankings Tab */}
          <TabsContent value="rankings" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    <Icon name="Award" size={20} />
                    Топ игроки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">s1mple</p>
                        <p className="text-sm text-muted-foreground">
                          3,247 рейтинг
                        </p>
                      </div>
                      <Badge className="bg-primary text-white">PRO</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">ZywOo</p>
                        <p className="text-sm text-muted-foreground">
                          3,198 рейтинг
                        </p>
                      </div>
                      <Badge className="bg-primary text-white">PRO</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">sh1ro</p>
                        <p className="text-sm text-muted-foreground">
                          3,156 рейтинг
                        </p>
                      </div>
                      <Badge className="bg-primary text-white">PRO</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    <Icon name="Target" size={20} />
                    Твоя статистика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="/img/7e9f7e36-9814-4483-bad1-b22ed0371679.jpg"
                        alt="Player Avatar"
                        className="w-16 h-16 rounded-full border-2 border-primary"
                      />
                      <div>
                        <p className="font-semibold text-lg">YourNick</p>
                        <p className="text-sm text-muted-foreground">
                          Звание: Легендарный орёл
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Рейтинг</span>
                        <span className="text-primary font-semibold">
                          2,340
                        </span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>K/D</span>
                        <span className="text-primary font-semibold">1.24</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Процент побед</span>
                        <span className="text-primary font-semibold">67%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    <Icon name="TrendingUp" size={20} />
                    Активность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">247</p>
                      <p className="text-sm text-muted-foreground">
                        Матчей сыграно
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">42h</p>
                      <p className="text-sm text-muted-foreground">
                        Времени в игре
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">15</p>
                      <p className="text-sm text-muted-foreground">
                        Стрик побед
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Teammates Tab */}
          <TabsContent value="teammates" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    Найти тиммейтов
                  </CardTitle>
                  <CardDescription>Поиск игроков для команды</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Поиск по нику..."
                        className="flex-1"
                      />
                      <Button className="bg-primary hover:bg-primary/90">
                        <Icon name="Search" size={16} />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-primary text-primary cursor-pointer hover:bg-primary hover:text-white"
                      >
                        Rifler
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-primary text-primary cursor-pointer hover:bg-primary hover:text-white"
                      >
                        AWP
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-primary text-primary cursor-pointer hover:bg-primary hover:text-white"
                      >
                        IGL
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-primary text-primary cursor-pointer hover:bg-primary hover:text-white"
                      >
                        Support
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    Активные игроки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">ProPlayer123</p>
                        <p className="text-sm text-muted-foreground">
                          Rifler • 2,100 рейтинг
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Онлайн
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">AwpMaster</p>
                        <p className="text-sm text-muted-foreground">
                          AWP • 2,340 рейтинг
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Онлайн
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">TacticalIGL</p>
                        <p className="text-sm text-muted-foreground">
                          IGL • 1,980 рейтинг
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          В игре
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Maps Tab */}
          <TabsContent value="maps" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <img
                    src="/img/9ee97cac-e320-473d-9517-74e0c9082c92.jpg"
                    alt="Dust2 Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle
                    className="text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    de_dust2
                  </CardTitle>
                  <CardDescription>
                    Классическая карта в пустыне
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Популярность</span>
                      <span className="text-primary">★★★★★</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Сложность</span>
                      <span className="text-primary">★★★☆☆</span>
                    </div>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Изучить карту
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="Map" size={64} className="text-primary" />
                </div>
                <CardHeader>
                  <CardTitle
                    className="text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    de_mirage
                  </CardTitle>
                  <CardDescription>Популярная карта в Марокко</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Популярность</span>
                      <span className="text-primary">★★★★★</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Сложность</span>
                      <span className="text-primary">★★★★☆</span>
                    </div>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Изучить карту
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="Map" size={64} className="text-primary" />
                </div>
                <CardHeader>
                  <CardTitle
                    className="text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    de_inferno
                  </CardTitle>
                  <CardDescription>
                    Тесная карта в итальянском стиле
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Популярность</span>
                      <span className="text-primary">★★★★☆</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Сложность</span>
                      <span className="text-primary">★★★★★</span>
                    </div>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Изучить карту
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    <Icon name="Target" size={20} />
                    Основы стрельбы
                  </CardTitle>
                  <CardDescription>
                    Изучите основы прицеливания и контроля отдачи
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon
                        name="Crosshair"
                        size={24}
                        className="text-primary"
                      />
                      <div>
                        <p className="font-semibold">Настройка прицела</p>
                        <p className="text-sm text-muted-foreground">
                          Оптимальные настройки для точности
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon name="Zap" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Контроль отдачи</p>
                        <p className="text-sm text-muted-foreground">
                          Как управлять паттернами отдачи
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать обучение
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    <Icon name="Users" size={20} />
                    Командная игра
                  </CardTitle>
                  <CardDescription>
                    Стратегии и тактики для команды
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon
                        name="MessageCircle"
                        size={24}
                        className="text-primary"
                      />
                      <div>
                        <p className="font-semibold">Коммуникация</p>
                        <p className="text-sm text-muted-foreground">
                          Эффективное общение в команде
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon name="Shield" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Тактики</p>
                        <p className="text-sm text-muted-foreground">
                          Основные стратегии на разных картах
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать обучение
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    <Icon name="Bomb" size={20} />
                    Управление экономикой
                  </CardTitle>
                  <CardDescription>
                    Правильное управление деньгами в раундах
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon
                        name="DollarSign"
                        size={24}
                        className="text-primary"
                      />
                      <div>
                        <p className="font-semibold">Экономические раунды</p>
                        <p className="text-sm text-muted-foreground">
                          Когда покупать и когда экономить
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon
                        name="ShoppingCart"
                        size={24}
                        className="text-primary"
                      />
                      <div>
                        <p className="font-semibold">Покупки в команде</p>
                        <p className="text-sm text-muted-foreground">
                          Координация покупок с тиммейтами
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать обучение
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-primary"
                    style={{ fontFamily: "Rajdhani" }}
                  >
                    <Icon name="Brain" size={20} />
                    Ментальная игра
                  </CardTitle>
                  <CardDescription>
                    Психологические аспекты киберспорта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon name="Heart" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Контроль эмоций</p>
                        <p className="text-sm text-muted-foreground">
                          Как оставаться спокойным в клатчах
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <Icon name="Target" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold">Концентрация</p>
                        <p className="text-sm text-muted-foreground">
                          Техники для поддержания фокуса
                        </p>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать обучение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Target" className="text-primary" size={24} />
              <span
                className="text-xl font-bold text-primary"
                style={{ fontFamily: "Rajdhani" }}
              >
                CS2 PLATFORM
              </span>
            </div>
            <p className="text-muted-foreground">
              Твой путь к киберспортивным вершинам
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

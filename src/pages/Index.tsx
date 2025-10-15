import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const viruses = [
    {
      name: 'Троянский конь',
      icon: 'Bug',
      description: 'Маскируется под легитимное ПО, открывает бэкдоры в систему',
      danger: 'Высокая',
      examples: 'Zeus, Emotet, TrickBot'
    },
    {
      name: 'Червь',
      icon: 'Worm',
      description: 'Самореплицирующийся вирус, распространяется по сетям без участия пользователя',
      danger: 'Критическая',
      examples: 'WannaCry, Stuxnet, MyDoom'
    },
    {
      name: 'Шпионское ПО',
      icon: 'Eye',
      description: 'Собирает конфиденциальные данные: пароли, банковские данные, историю браузера',
      danger: 'Высокая',
      examples: 'Pegasus, FinFisher, DarkHotel'
    },
    {
      name: 'Рекламное ПО',
      icon: 'MonitorStop',
      description: 'Показывает нежелательную рекламу, отслеживает поведение пользователя',
      danger: 'Средняя',
      examples: 'Fireball, Appearch, DollarRevenue'
    },
    {
      name: 'Ransomware',
      icon: 'Lock',
      description: 'Шифрует данные и требует выкуп за их расшифровку',
      danger: 'Критическая',
      examples: 'Locky, Petya, REvil'
    },
    {
      name: 'Руткит',
      icon: 'ShieldAlert',
      description: 'Скрывает присутствие вредоносного ПО в системе на уровне ядра',
      danger: 'Критическая',
      examples: 'Sony BMG, Necurs, ZeroAccess'
    }
  ];

  const antiviruses = [
    {
      name: 'Kaspersky',
      rating: 9.5,
      pros: ['Лучшая защита от новых угроз', 'Минимальное влияние на производительность', 'VPN и менеджер паролей'],
      cons: ['Высокая цена премиум-версии', 'Проблемы совместимости с некоторыми программами'],
      price: '1990₽/год'
    },
    {
      name: 'Norton 360',
      rating: 9.3,
      pros: ['Комплексная защита (антивирус + VPN + облако)', 'Отличная защита от фишинга', 'Родительский контроль'],
      cons: ['Может замедлять старые ПК', 'Агрессивная реклама премиум-функций'],
      price: '2499₽/год'
    },
    {
      name: 'Bitdefender',
      rating: 9.4,
      pros: ['100% защита от вредоносов (AV-Test)', 'Мультиплатформенность', 'Защита от программ-вымогателей'],
      cons: ['Сложный интерфейс для новичков', 'VPN с лимитом трафика в базовой версии'],
      price: '1799₽/год'
    },
    {
      name: 'Windows Defender',
      rating: 8.5,
      pros: ['Встроен в Windows 10/11', 'Бесплатный', 'Низкое потребление ресурсов'],
      cons: ['Базовые функции без extras', 'Слабее в обнаружении zero-day угроз'],
      price: 'Бесплатно'
    },
    {
      name: 'ESET NOD32',
      rating: 9.0,
      pros: ['Быстрая работа', 'Эффективная эвристика', 'Низкая нагрузка на систему'],
      cons: ['Дорогие дополнительные функции', 'Устаревший интерфейс'],
      price: '1690₽/год'
    }
  ];

  const protectionMethods = [
    {
      icon: 'Shield',
      title: 'Используйте антивирус',
      description: 'Установите надежный антивирус и регулярно обновляйте его базы данных'
    },
    {
      icon: 'RefreshCw',
      title: 'Обновляйте ПО',
      description: 'Своевременно устанавливайте обновления операционной системы и всех программ'
    },
    {
      icon: 'Lock',
      title: 'Сложные пароли',
      description: 'Используйте уникальные пароли длиной минимум 12 символов с разными типами знаков'
    },
    {
      icon: 'Mail',
      title: 'Осторожность с письмами',
      description: 'Не открывайте подозрительные вложения и ссылки в электронных письмах'
    },
    {
      icon: 'Download',
      title: 'Проверенные источники',
      description: 'Скачивайте программы только с официальных сайтов разработчиков'
    },
    {
      icon: 'HardDrive',
      title: 'Резервное копирование',
      description: 'Регулярно создавайте бэкапы важных данных на внешние носители или облако'
    },
    {
      icon: 'Wifi',
      title: 'Безопасный Wi-Fi',
      description: 'Избегайте использования публичных Wi-Fi сетей для конфиденциальных операций'
    },
    {
      icon: 'User',
      title: 'Ограничение прав',
      description: 'Работайте под учетной записью без прав администратора для повседневных задач'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      <nav className="relative z-10 border-b border-primary/30 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <h1 className="text-2xl font-orbitron font-bold cyber-glow">CYBER DEFENSE</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#viruses" className="text-foreground/80 hover:text-primary transition-colors font-orbitron">Вирусы</a>
              <a href="#antiviruses" className="text-foreground/80 hover:text-primary transition-colors font-orbitron">Антивирусы</a>
              <a href="#comparison" className="text-foreground/80 hover:text-primary transition-colors font-orbitron">Сравнение</a>
              <a href="#protection" className="text-foreground/80 hover:text-primary transition-colors font-orbitron">Защита</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary cyber-border">
              <Icon name="Terminal" size={16} className="mr-2" />
              Информационная безопасность
            </Badge>
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-6 cyber-glow">
              ЗАЩИТИ СВОЙ<br />ЦИФРОВОЙ МИР
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Будь на шаг впереди киберугроз. Изучи виды вирусов, сравни антивирусы и узнай методы защиты
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron text-lg cyber-border">
                <Icon name="ShieldCheck" size={20} className="mr-2" />
                Начать защиту
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-orbitron text-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="viruses" className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 cyber-glow-pink">
              <Icon name="Bug" size={40} className="inline-block mr-2 mb-2" />
              Виды компьютерных вирусов
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Современные киберугрозы принимают различные формы. Изучи врага в лицо
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {viruses.map((virus, index) => (
              <Card 
                key={index} 
                className="cyber-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon name={virus.icon} size={40} className="text-primary animate-pulse-glow" />
                    <Badge variant={virus.danger === 'Критическая' ? 'destructive' : virus.danger === 'Высокая' ? 'default' : 'secondary'}>
                      {virus.danger}
                    </Badge>
                  </div>
                  <CardTitle className="font-orbitron text-xl">{virus.name}</CardTitle>
                  <CardDescription className="text-foreground/70">{virus.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">Примеры:</span> {virus.examples}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="antiviruses" className="relative py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 cyber-glow">
              <Icon name="ShieldCheck" size={40} className="inline-block mr-2 mb-2" />
              Обзор антивирусных программ
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Сравнение ведущих антивирусных решений 2024 года
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {antiviruses.map((av, index) => (
              <Card 
                key={index}
                className="cyber-border bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-orbitron text-2xl">{av.name}</CardTitle>
                    <Badge className="bg-primary/20 text-primary text-lg px-3 py-1">
                      ⭐ {av.rating}
                    </Badge>
                  </div>
                  <CardDescription className="text-accent font-bold text-lg">{av.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-primary font-semibold mb-2 flex items-center">
                        <Icon name="Plus" size={18} className="mr-1" />
                        Плюсы:
                      </h4>
                      <ul className="space-y-1">
                        {av.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-start">
                            <span className="text-primary mr-2">▸</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-destructive font-semibold mb-2 flex items-center">
                        <Icon name="Minus" size={18} className="mr-1" />
                        Минусы:
                      </h4>
                      <ul className="space-y-1">
                        {av.cons.map((con, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-start">
                            <span className="text-destructive mr-2">▸</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 cyber-glow-pink">
              <Icon name="BarChart3" size={40} className="inline-block mr-2 mb-2" />
              Сравнение и рейтинги
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Детальное сравнение характеристик антивирусных программ
            </p>
          </div>

          <div className="max-w-6xl mx-auto animate-fade-in">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-primary/30 hover:bg-transparent">
                        <TableHead className="font-orbitron text-primary">Антивирус</TableHead>
                        <TableHead className="font-orbitron text-primary">Рейтинг</TableHead>
                        <TableHead className="font-orbitron text-primary">Цена</TableHead>
                        <TableHead className="font-orbitron text-primary">Защита</TableHead>
                        <TableHead className="font-orbitron text-primary">Производительность</TableHead>
                        <TableHead className="font-orbitron text-primary">Дополнительно</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-primary/20">
                        <TableCell className="font-semibold">Kaspersky</TableCell>
                        <TableCell><Badge className="bg-primary/20 text-primary">9.5</Badge></TableCell>
                        <TableCell>1990₽/год</TableCell>
                        <TableCell className="text-primary">⚡ Отличная</TableCell>
                        <TableCell className="text-primary">⚡ Высокая</TableCell>
                        <TableCell>VPN, Менеджер паролей</TableCell>
                      </TableRow>
                      <TableRow className="border-primary/20">
                        <TableCell className="font-semibold">Bitdefender</TableCell>
                        <TableCell><Badge className="bg-primary/20 text-primary">9.4</Badge></TableCell>
                        <TableCell>1799₽/год</TableCell>
                        <TableCell className="text-primary">⚡ Отличная</TableCell>
                        <TableCell className="text-primary">⚡ Высокая</TableCell>
                        <TableCell>Защита от ransomware</TableCell>
                      </TableRow>
                      <TableRow className="border-primary/20">
                        <TableCell className="font-semibold">Norton 360</TableCell>
                        <TableCell><Badge className="bg-primary/20 text-primary">9.3</Badge></TableCell>
                        <TableCell>2499₽/год</TableCell>
                        <TableCell className="text-primary">⚡ Отличная</TableCell>
                        <TableCell className="text-foreground/60">○ Средняя</TableCell>
                        <TableCell>VPN, Облако, Родит. контроль</TableCell>
                      </TableRow>
                      <TableRow className="border-primary/20">
                        <TableCell className="font-semibold">ESET NOD32</TableCell>
                        <TableCell><Badge className="bg-primary/20 text-primary">9.0</Badge></TableCell>
                        <TableCell>1690₽/год</TableCell>
                        <TableCell className="text-primary">⚡ Хорошая</TableCell>
                        <TableCell className="text-primary">⚡ Высокая</TableCell>
                        <TableCell>Эвристика</TableCell>
                      </TableRow>
                      <TableRow className="border-primary/20">
                        <TableCell className="font-semibold">Windows Defender</TableCell>
                        <TableCell><Badge className="bg-secondary/20 text-secondary">8.5</Badge></TableCell>
                        <TableCell className="text-primary">Бесплатно</TableCell>
                        <TableCell className="text-foreground/60">○ Хорошая</TableCell>
                        <TableCell className="text-primary">⚡ Высокая</TableCell>
                        <TableCell>Встроен в Windows</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="protection" className="relative py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 cyber-glow">
              <Icon name="Lock" size={40} className="inline-block mr-2 mb-2" />
              Методы защиты от вирусов
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              8 ключевых правил кибербезопасности для защиты твоих данных
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {protectionMethods.map((method, index) => (
              <Card 
                key={index}
                className="cyber-border bg-card/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={method.icon} size={32} className="text-primary animate-float" />
                  </div>
                  <CardTitle className="font-orbitron text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto animate-fade-in">
            <Card className="cyber-border bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-orbitron mb-2">
                  <Icon name="AlertTriangle" size={36} className="inline-block mr-2 mb-1 text-accent" />
                  Будь бдителен!
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80">
                  Помни: лучшая защита — это комбинация надежного антивируса, регулярных обновлений и осторожного поведения в сети. 
                  Киберпреступники постоянно совершенствуют свои методы, поэтому твоя бдительность — ключ к безопасности!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-primary/30 py-8 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Shield" className="text-primary" size={24} />
            <span className="font-orbitron font-bold text-xl cyber-glow">CYBER DEFENSE</span>
          </div>
          <p className="text-foreground/60 text-sm">
            © 2024 Cyber Defense. Защити свой цифровой мир.
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            Информация представлена в ознакомительных целях
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

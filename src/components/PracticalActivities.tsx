import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Palette, Music, Heart, Users, Trophy, Camera, Lightbulb, Megaphone, Mic } from 'lucide-react';

const PracticalActivities = () => {
  const activities = [
    {
      id: 1,
      category: "AI+心理健康作品创作",
      title: "AI+心理健康实践暨信息素养提升创作比赛",
      description: "使用AI应用创作相关专业作品，包括AI创作美术图片、AI创作歌曲音乐、AI创作教学视频等，探索AI在师范教育中的应用场景。",
      icon: Palette,
      link: "https://mp.weixin.qq.com/s/J7Bhn3TjiawqZqEC0w0zpw",
      tags: ["AI创作", "信息素养", "创新比赛"]
    },
    {
      id: 2,
      category: "心理教育实践",
      title: "花山敬老院「春日暖阳，为爱护航」",
      description: "定期前往当地社区养老院进行志愿服务音乐会，通过美育实践活动，提升大学生社会责任感和心理健康水平。",
      icon: Heart,
      link: "https://mp.weixin.qq.com/s/P1yYiytXr_CFZXQMVgoJpA",
      tags: ["志愿服务", "音乐疗愈", "美育实践"]
    },
    {
      id: 3,
      category: "AI+心理健康作品创作",
      title: "与二师音乐版ChatGPT畅聊——图片类创作分享",
      description: "使用人工智能软件发散思维，进行创意创作，探索AI技术在艺术创作和心理表达中的应用价值。",
      icon: Camera,
      link: "https://mp.weixin.qq.com/s/FWpkzHU0z8bEQYu9zkmfxA",
      tags: ["AI对话", "创意创作", "思维发散"]
    },
    {
      id: 4,
      category: "AI+心理教育实践",
      title: "廉洁教育作品征集",
      description: "开展「廉心文语」校园征文、「润心话语」视频征集、「清心妙语」创意征集，融合AI技术与德育实践。",
      icon: Lightbulb,
      link: "https://mp.weixin.qq.com/s/wCF1hr5zm3KgF-aG0XtgRA",
      tags: ["廉洁教育", "作品征集", "德育实践"]
    },
    {
      id: 5,
      category: "心理教育实践",
      title: "大学生艺术素养提升美育工作坊",
      description: "定期邀请音乐系有艺术特长的「小老师」，为同学们提供享受音乐、插花艺术的机会，搭建展示个人风采的美育实践舞台。",
      icon: Music,
      link: "https://mp.weixin.qq.com/s/e1dbBKDOqqt6WT-199uOZg",
      tags: ["艺术素养", "美育工作坊", "同伴教育"]
    },
    {
      id: 6,
      category: "创新创业沙龙",
      title: "「互联网+」「挑战杯」培训讲座——音创未来讲堂",
      description: "结合音乐、创新创业和未来师范教育三种元素，鼓励音乐专业师范学生发现更多教育类创新创业机会。",
      icon: Trophy,
      link: "https://mp.weixin.qq.com/s/g3CTIxSxttcPGFDtg_-7wA",
      tags: ["创新创业", "师范教育", "音乐专业"]
    },
    {
      id: 7,
      category: "阳光体育心理健康沙龙",
      title: "「共享位置捉迷藏」「阳光体育」系列活动",
      description: "鼓励引导学生走向操场、走进大自然、走到阳光下，积极参加体育锻炼，掀起学生阳光体育运动的热潮。",
      icon: Users,
      link: "https://mp.weixin.qq.com/s/0B7eotY6yLjnw8gwjYxAjw",
      tags: ["阳光体育", "户外活动", "身心健康"]
    },
    {
      id: 8,
      category: "讲座沙龙",
      title: "新媒体素养提升讲座、音创未来「互联网+」讲座",
      description: "定期举办讲座，讲解新媒体知识、微信公众号运营、B站短视频创作和编辑等内容，提升学生数字素养。",
      icon: Megaphone,
      link: "https://mp.weixin.qq.com/s/rncjXFXpBccex2LXdcUvJQ",
      tags: ["新媒体", "数字素养", "技能培训"]
    },
    {
      id: 9,
      category: "心理教育舞台实践",
      title: "合唱比赛、草坪音乐会、专场音乐会",
      description: "通过合唱比赛、音乐会、草坪音乐会等舞台实践活动，为学生提供展示才华、释放压力、促进心理健康的平台。",
      icon: Mic,
      link: "https://mp.weixin.qq.com/s/Dr7mVrnPyriDEpICC6dg0Q",
      tags: ["音乐表演", "舞台实践", "情绪表达"]
    }
  ];

  const categoryColors = {
    "AI+心理健康作品创作": "bg-blue-100 text-blue-700",
    "心理教育实践": "bg-green-100 text-green-700", 
    "AI+心理教育实践": "bg-purple-100 text-purple-700",
    "创新创业沙龙": "bg-orange-100 text-orange-700",
    "阳光体育心理健康沙龙": "bg-yellow-100 text-yellow-700",
    "讲座沙龙": "bg-pink-100 text-pink-700",
    "心理教育舞台实践": "bg-indigo-100 text-indigo-700"
  };

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            实践活动
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            通过丰富多样的实践活动，探索人工智能辅助大学生心理健康教育的有效途径，
            涵盖AI创作、美育实践、体育健康、创新创业等多个领域
          </p>
        </div>

        {/* Activity Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">9</div>
            <p className="text-muted-foreground">实践活动</p>
          </Card>
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <p className="text-muted-foreground">活动类别</p>
          </Card>
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">参与学生</p>
          </Card>
          <Card className="p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">2年</div>
            <p className="text-muted-foreground">活动周期</p>
          </Card>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card key={activity.id} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <Badge className={`mb-2 ${categoryColors[activity.category as keyof typeof categoryColors]}`}>
                    {activity.category}
                  </Badge>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                {activity.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {activity.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {activity.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                asChild
              >
                <a href={activity.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  查看详情
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Activity Impact */}
        <Card className="p-8 shadow-medium bg-gradient-card mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">活动成效与影响</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">学生参与度</h4>
              <p className="text-sm text-muted-foreground">
                活动覆盖全校多个院系，学生参与积极性高，形成了良好的校园文化氛围
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">创新实践</h4>
              <p className="text-sm text-muted-foreground">
                将AI技术与传统心理健康教育相结合，探索出多种创新实践模式
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">心理健康</h4>
              <p className="text-sm text-muted-foreground">
                通过多样化活动形式，有效提升了学生心理素质和应对能力
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PracticalActivities;
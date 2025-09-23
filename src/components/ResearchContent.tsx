import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Users, Bot, BarChart3, Calendar, CheckCircle } from 'lucide-react';

const ResearchContent = () => {
  const researchPhases = [
    {
      phase: "第一阶段",
      period: "2023年12月 - 2024年3月",
      title: "文献综述",
      description: "系统梳理人工智能技术在大学生心理健康教育中的应用现状",
      status: "completed"
    },
    {
      phase: "第二阶段", 
      period: "2024年4月 - 2024年6月",
      title: "案例分析",
      description: "分析具有代表性的案例，提取应用模式和经验教训",
      status: "completed"
    },
    {
      phase: "第三阶段",
      period: "2024年7月 - 2024年9月", 
      title: "实证研究",
      description: "收集数据，验证AI技术实际效果",
      status: "in-progress"
    },
    {
      phase: "第四阶段",
      period: "2024年10月 - 2024年12月",
      title: "策略总结",
      description: "提出改进策略和建议，展望未来发展趋势",
      status: "pending"
    }
  ];

  const researchMethods = [
    {
      icon: Search,
      title: "文献综述法",
      description: "查阅国内外相关文献，系统梳理AI在心理健康教育中的应用现状"
    },
    {
      icon: Users,
      title: "案例分析法", 
      description: "分析美国伊利诺伊大学芝加哥分校的Lumen语音助手项目等典型案例"
    },
    {
      icon: BarChart3,
      title: "实证研究法",
      description: "通过问卷调查和访谈收集数据，运用统计分析方法验证研究假设"
    }
  ];

  const keyInnovations = [
    {
      icon: Bot,
      title: "基于数字足迹的AI分析",
      description: "通过分析社交媒体、智能手机等数字足迹，实时监测和预测大学生心理状态"
    },
    {
      icon: Users,
      title: "聊天机器人情感对话",
      description: "运用自然语言处理技术，提供情感陪伴、认知重塑、行为引导服务"
    },
    {
      icon: Bot,
      title: "数字疗法心理干预", 
      description: "通过游戏化、虚拟现实等技术，提供有趣且有效的心理干预方案"
    },
    {
      icon: BarChart3,
      title: "自适应学习系统评估",
      description: "运用贝叶斯网络、神经网络等技术，提供个性化心理评估方案"
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            研究内容
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            本项目采用多元化研究方法，系统性地探索人工智能技术在大学生心理健康教育中的应用模式与实现路径
          </p>
        </div>

        <Tabs defaultValue="framework" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="framework">总体框架</TabsTrigger>
            <TabsTrigger value="methods">研究方法</TabsTrigger>
            <TabsTrigger value="innovation">创新要点</TabsTrigger>
            <TabsTrigger value="timeline">研究计划</TabsTrigger>
          </TabsList>

          <TabsContent value="framework" className="space-y-8">
            <Card className="p-8 shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-6">研究框架与目标</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">研究目标</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">梳理国内外AI技术在大学生心理健康教育中的应用现状</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">分析典型案例的应用模式、实施过程和效果评估</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">验证AI技术在心理健康教育中的实际效果</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">提出技术、教育、管理层面的改进策略和建议</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">重点难点</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-academic-blue-light rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">案例选择：</strong>
                        如何选择具有代表性且可靠有效的案例进行深入分析
                      </p>
                    </div>
                    <div className="p-4 bg-academic-blue-light rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">研究设计：</strong>
                        如何设计科学有效的问卷调查和访谈方案
                      </p>
                    </div>
                    <div className="p-4 bg-academic-blue-light rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">数据分析：</strong>
                        运用先进统计分析方法处理和分析复杂数据
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="methods" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {researchMethods.map((method, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{method.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.description}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="p-8 shadow-medium">
              <h3 className="text-xl font-bold text-foreground mb-6">典型案例：Lumen语音助手项目</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">项目概况</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>来源：</strong>美国伊利诺伊大学芝加哥分校</li>
                    <li><strong>技术：</strong>人工智能语音助手技术</li>
                    <li><strong>目标：</strong>心理疏导和心理治疗</li>
                    <li><strong>服务：</strong>个性化心理辅导</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">应用效果</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">心理问题解决技巧提升</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">抑郁评分显著改善</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">焦虑症状有效缓解</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">心理压力明显减轻</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="innovation" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {keyInnovations.map((innovation, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <innovation.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {innovation.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {innovation.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-8">
            <div className="space-y-6">
              {researchPhases.map((phase, index) => (
                <Card key={index} className="p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                        phase.status === 'completed' ? 'bg-green-100 text-green-700' :
                        phase.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{phase.phase}</h3>
                        <Badge variant={
                          phase.status === 'completed' ? 'default' :
                          phase.status === 'in-progress' ? 'secondary' : 
                          'outline'
                        }>
                          {phase.status === 'completed' ? '已完成' :
                           phase.status === 'in-progress' ? '进行中' : '待开始'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{phase.period}</span>
                      </div>
                      <h4 className="font-medium text-foreground mb-2">{phase.title}</h4>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResearchContent;

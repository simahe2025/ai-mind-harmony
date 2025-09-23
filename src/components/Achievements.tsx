import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Award, BookOpen, ExternalLink, Download } from 'lucide-react';

const Achievements = () => {
  const publications = [
    {
      title: "人工智能技术在大学生心理健康教育中的应用现状研究",
      journal: "高等教育研究",
      year: "2024",
      status: "已发表",
      type: "期刊论文"
    },
    {
      title: "基于机器学习的大学生心理状态预测模型构建",
      journal: "计算机教育",
      year: "2024", 
      status: "待发表",
      type: "期刊论文"
    },
    {
      title: "数字化时代大学生心理健康教育创新路径探索",
      journal: "教育现代化",
      year: "2023",
      status: "已发表",
      type: "期刊论文"
    }
  ];

  const projects = [
    {
      title: "人工智能辅助下的大学生心理健康教育途径探索",
      code: "2023WQNCX055",
      type: "广东省普通高校青年创新人才项目",
      funding: "2万元",
      period: "2023-2024",
      role: "主持",
      status: "在研"
    },
    {
      title: "基于大数据的大学生心理危机预警系统研究",
      code: "2022JY001",
      type: "校级教改项目",
      funding: "1万元", 
      period: "2022-2023",
      role: "主持",
      status: "已结题"
    }
  ];

  const awards = [
    {
      title: "广东省高校心理健康教育优秀成果奖",
      level: "省级",
      year: "2023",
      rank: "二等奖"
    },
    {
      title: "全国大学生心理健康教育研究优秀论文奖",
      level: "国家级",
      year: "2023", 
      rank: "三等奖"
    },
    {
      title: "校级教学成果奖",
      level: "校级",
      year: "2022",
      rank: "一等奖"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-academic-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            学术成果
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            在人工智能与心理健康教育交叉领域取得的主要研究成果与学术贡献
          </p>
        </div>

        <div className="space-y-16">
          {/* Research Publications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">学术论文</h3>
            </div>
            
            <div className="grid gap-6">
              {publications.map((paper, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-lg font-semibold text-foreground">{paper.title}</h4>
                        <Badge variant={paper.status === '已发表' ? 'default' : 'secondary'}>
                          {paper.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span><strong>期刊：</strong>{paper.journal}</span>
                        <span><strong>年份：</strong>{paper.year}</span>
                        <span><strong>类型：</strong>{paper.type}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        查看
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        下载
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">科研项目</h3>
            </div>
            
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 shadow-soft">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                        <Badge variant={project.status === '在研' ? 'secondary' : 'default'}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{project.type}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">项目编号：</span>
                      <span className="text-muted-foreground">{project.code}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">资助金额：</span>
                      <span className="text-muted-foreground">{project.funding}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">项目周期：</span>
                      <span className="text-muted-foreground">{project.period}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">承担角色：</span>
                      <span className="text-muted-foreground">{project.role}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">获奖情况</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{award.title}</h4>
                  <div className="space-y-1">
                    <div className="flex justify-center gap-2">
                      <Badge variant="outline">{award.level}</Badge>
                      <Badge variant="default">{award.rank}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{award.year}年</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <Card className="p-8 shadow-medium bg-gradient-card">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">研究成果统计</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">学术论文</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">科研项目</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <p className="text-muted-foreground">获奖成果</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3万</div>
                <p className="text-muted-foreground">项目经费</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
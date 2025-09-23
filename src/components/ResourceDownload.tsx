import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Video, Image, Database, Book, BarChart, Presentation } from 'lucide-react';

const ResourceDownload = () => {
  const resources = [
    {
      category: "研究报告",
      items: [
        {
          title: "人工智能辅助大学生心理健康教育研究报告",
          description: "项目主要研究成果汇总报告，包含文献综述、案例分析、实证研究等内容",
          type: "PDF",
          size: "2.5MB",
          icon: FileText,
          downloadUrl: "#"
        },
        {
          title: "大学生心理健康状况调研报告",
          description: "基于1000名大学生样本的心理健康状况调研分析报告",
          type: "PDF", 
          size: "1.8MB",
          icon: BarChart,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "学术论文",
      items: [
        {
          title: "AI技术在心理健康教育中的应用现状研究",
          description: "系统梳理AI技术在心理健康教育中的应用现状和发展趋势",
          type: "PDF",
          size: "1.2MB", 
          icon: Book,
          downloadUrl: "#"
        },
        {
          title: "基于机器学习的心理状态预测模型",
          description: "构建大学生心理状态预测模型的理论框架与实现方法",
          type: "PDF",
          size: "980KB",
          icon: FileText,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "数据资料",
      items: [
        {
          title: "大学生心理健康调查数据集",
          description: "匿名化处理后的大学生心理健康调查原始数据",
          type: "CSV",
          size: "5.2MB",
          icon: Database,
          downloadUrl: "#"
        },
        {
          title: "AI心理健康应用案例数据库",
          description: "收集整理的国内外AI心理健康应用典型案例数据",
          type: "XLSX",
          size: "3.1MB",
          icon: Database,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "演示材料",
      items: [
        {
          title: "项目成果汇报PPT",
          description: "项目主要成果和创新点的演示汇报材料",
          type: "PPT",
          size: "15.6MB",
          icon: Presentation,
          downloadUrl: "#"
        },
        {
          title: "实践活动影像资料",
          description: "9项实践活动的影像记录和成果展示材料",
          type: "ZIP",
          size: "128MB",
          icon: Video,
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "工具软件",
      items: [
        {
          title: "心理健康评估工具",
          description: "基于AI技术开发的心理健康快速评估工具原型",
          type: "EXE",
          size: "25.3MB",
          icon: Database,
          downloadUrl: "#"
        },
        {
          title: "数据分析脚本包",
          description: "用于心理健康数据统计分析的Python/R脚本工具包",
          type: "ZIP",
          size: "2.8MB",
          icon: FileText,
          downloadUrl: "#"
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-red-100 text-red-700';
      case 'CSV': return 'bg-green-100 text-green-700';
      case 'XLSX': return 'bg-blue-100 text-blue-700';
      case 'PPT': return 'bg-orange-100 text-orange-700';
      case 'ZIP': return 'bg-purple-100 text-purple-700';
      case 'EXE': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="resources" className="py-20 bg-academic-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            资源下载
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            提供项目研究过程中产生的各类学术资源和研究材料，供学术同行和相关研究人员参考使用
          </p>
        </div>

        {/* Download Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center shadow-soft bg-white">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">资源文件</p>
          </Card>
          <Card className="p-6 text-center shadow-soft bg-white">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <p className="text-muted-foreground">资源类别</p>
          </Card>
          <Card className="p-6 text-center shadow-soft bg-white">
            <div className="text-3xl font-bold text-primary mb-2">200MB+</div>
            <p className="text-muted-foreground">资源总量</p>
          </Card>
          <Card className="p-6 text-center shadow-soft bg-white">
            <div className="text-3xl font-bold text-primary mb-2">1500+</div>
            <p className="text-muted-foreground">下载次数</p>
          </Card>
        </div>

        {/* Resources by Category */}
        <div className="space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 bg-white group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-academic-blue-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                          <Badge className={getTypeColor(item.type)}>
                            {item.type}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">文件大小: {item.size}</span>
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary-hover"
                            asChild
                          >
                            <a href={item.downloadUrl} download>
                              <Download className="w-4 h-4 mr-2" />
                              下载
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Guidelines */}
        <Card className="p-8 shadow-medium bg-white mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">使用说明</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">学术使用</h4>
              <p className="text-sm text-muted-foreground">
                所有资源仅供学术研究使用，引用时请注明出处和项目信息
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">下载方式</h4>
              <p className="text-sm text-muted-foreground">
                点击下载按钮即可获取资源，部分大文件建议使用下载工具
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">版权声明</h4>
              <p className="text-sm text-muted-foreground">
                资源受知识产权保护，未经授权不得用于商业目的或二次发布
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResourceDownload;
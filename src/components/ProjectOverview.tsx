import { Card } from '@/components/ui/card';
import { Target, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';

const ProjectOverview = () => {
  return (
    <section id="project" className="py-20 bg-academic-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            项目概述
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            本项目旨在探索人工智能技术在大学生心理健康教育中的创新应用，
            通过理论研究与实践探索相结合的方式，构建智能化心理健康教育体系。
          </p>
        </div>

        {/* Research Significance */}
        <div className="mb-16">
          <Card className="p-8 shadow-medium border-0 bg-gradient-card">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">研究意义</h3>
                <p className="text-muted-foreground">立足新时代教育强国建设目标</p>
              </div>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-foreground leading-relaxed mb-4">
                党的二十大报告提到高校要落实立德树人根本任务，以教育强国建设为目标。
                本项目以习近平新时代中国特色社会主义思想为指导，在中国式教育现代化和全球人工智能浪潮的背景下，
                探索人工智能技术辅助大学生心理健康教育的创新路径。
              </p>
              <p className="text-foreground leading-relaxed">
                针对当前大学生心理健康教育存在的"内容不新、实效不佳、工具不强"三重困境，
                通过人工智能赋能心理健康教育，切实提高高校心理健康教育工作智能化水平和质量，
                全面提升立德树人、铸魂育人的实效。
              </p>
            </div>
          </Card>
        </div>

        {/* Research Background & Value */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 shadow-soft border border-academic-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">研究背景</h3>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">现实需求：</strong>
                自2020年疫情以来，大学生面临更多心理压力，心理健康问题发生率高达30%以上
              </p>
              <p>
                <strong className="text-foreground">政策支持：</strong>
                国家大力推进人工智能发展，《数字中国建设整体布局规划》为AI应用提供指导
              </p>
              <p>
                <strong className="text-foreground">技术基础：</strong>
                人工智能技术日趋成熟，为心理健康教育提供新的技术手段和解决方案
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-soft border border-academic-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">应用价值</h3>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">理论价值：</strong>
                为心理健康领域提供新的研究对象和研究手段，促进理论创新和方法创新
              </p>
              <p>
                <strong className="text-foreground">实践价值：</strong>
                提高心理健康教育覆盖面和可及性，满足不同个体需求和偏好
              </p>
              <p>
                <strong className="text-foreground">管理价值：</strong>
                为高校提供新的管理资源，实现心理健康教育的全面监测和评估
              </p>
            </div>
          </Card>
        </div>

        {/* Research Trends */}
        <Card className="p-8 shadow-medium border-0 bg-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">发展趋势</h3>
              <p className="text-muted-foreground">人工智能在心理健康教育中的未来发展方向</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">多模态融合</h4>
              <p className="text-sm text-muted-foreground">
                整合文本、语音、图像等多种数据源，提升识别和理解能力
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">深度学习</h4>
              <p className="text-sm text-muted-foreground">
                运用神经网络技术，提升复杂数据处理和知识推理能力
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">强化学习</h4>
              <p className="text-sm text-muted-foreground">
                提升对动态环境的适应能力和自主决策执行能力
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-academic-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">可解释性</h4>
              <p className="text-sm text-muted-foreground">
                提高AI决策过程透明度，增强可信度和协作能力
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectOverview;
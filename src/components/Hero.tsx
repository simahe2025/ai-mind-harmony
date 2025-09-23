import { Button } from '@/components/ui/button';
import { ChevronDown, Brain, Users, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Project Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-sm font-medium">广东省普通高校青年创新人才项目</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            人工智能辅助下的
            <br />
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              大学生心理健康教育
            </span>
            <br />
            途径探索
          </h1>

          {/* Project Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>项目编号：2023WQNCX055</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>资助金额：2万元</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>项目周期：2023-2025</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            探索人工智能技术在大学生心理健康教育中的创新应用，
            通过智能化手段提升心理健康教育的效果与覆盖面，
            为构建新时代大学生心理健康教育体系提供理论支撑与实践路径。
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Brain className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">AI技术融合</h3>
              <p className="text-white/80 text-sm text-center">
                运用机器学习、自然语言处理等前沿AI技术
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Users className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">教育创新</h3>
              <p className="text-white/80 text-sm text-center">
                构建个性化、智能化的心理健康教育模式
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Lightbulb className="w-12 h-12 mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">实践探索</h3>
              <p className="text-white/80 text-sm text-center">
                开展系列实践活动，验证理论研究成果
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-medium"
              asChild
            >
              <a href="#project">了解项目详情</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <a href="#achievements">查看研究成果</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

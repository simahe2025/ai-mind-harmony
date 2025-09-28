import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">项目信息</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong className="text-white">项目名称：</strong>
                人工智能辅助下的大学生心理健康教育途径探索
              </p>
              <p>
                <strong className="text-white">项目编号：</strong>
                2023WQNCX055
              </p>
              <p>
                <strong className="text-white">项目类型：</strong>
                广东省普通高校青年创新人才项目
              </p>
              <p>
                <strong className="text-white">资助金额：</strong>
                2万元
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Calendar className="w-4 h-4" />
                <span>项目周期：2023-2025年</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>jiangtian@gdei.edu.cn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+86 3696-7776</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jiang Tian</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <a href="#project" className="block hover:text-white transition-colors">项目概述</a>
              <a href="#research" className="block hover:text-white transition-colors">研究内容</a>
              <a href="#achievements" className="block hover:text-white transition-colors">学术成果</a>
              <a href="#activities" className="block hover:text-white transition-colors">实践活动</a>
              <a href="#resources" className="block hover:text-white transition-colors">资源下载</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © 2023-2025 人工智能辅助大学生心理健康教育研究项目. 版权所有.
            </p>
            <p>
              广东省普通高校青年创新人才项目
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

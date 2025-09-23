import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectOverview from '@/components/ProjectOverview';
import ResearchContent from '@/components/ResearchContent';
import Achievements from '@/components/Achievements';
import PracticalActivities from '@/components/PracticalActivities';
import ResourceDownload from '@/components/ResourceDownload';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProjectOverview />
        <ResearchContent />
        <Achievements />
        <PracticalActivities />
        <ResourceDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import PageLayout from '../components/layout/PageLayout';
import PainSection from '../components/sections/PainSection';
import ProofSection from '../components/sections/ProofSection';
import DemoSection from '../components/sections/DemoSection';
import ExploreSection from '../components/sections/ExploreSection';
import WhoIAmSection from '../components/sections/WhoIAmSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <PageLayout>
      <PainSection />
      <ProofSection />
      <DemoSection />
      <ExploreSection />
      <WhoIAmSection />
      <CTASection />
    </PageLayout>
  );
}

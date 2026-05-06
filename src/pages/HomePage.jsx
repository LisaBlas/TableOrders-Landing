import PageLayout from '../components/layout/PageLayout';
import PainSection from '../components/sections/PainSection';
import ProofSection from '../components/sections/ProofSection';
import FitSection from '../components/sections/FitSection';
import WhoIAmSection from '../components/sections/WhoIAmSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <PageLayout>
      <PainSection />
      <ProofSection />
      <FitSection />
      <WhoIAmSection />
      <CTASection />
    </PageLayout>
  );
}

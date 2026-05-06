import PageLayout from '../components/layout/PageLayout';
import PainSection from '../components/homepage/PainSection';
import ProofSection from '../components/homepage/ProofSection';
import FitSection from '../components/homepage/FitSection';
import WhoIAmSection from '../components/homepage/WhoIAmSection';
import CTASection from '../components/homepage/CTASection';

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

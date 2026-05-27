import PageLayout from '../components/layout/PageLayout';
import PainSection from '../components/homepage/PainSection';
import ProofSection from '../components/homepage/ProofSection';
import PricingSection from '../components/homepage/PricingSection';
import WhoIAmSection from '../components/homepage/WhoIAmSection';
import CTASection from '../components/homepage/CTASection';

export default function HomePage() {
  return (
    <PageLayout>
      <PainSection />
      <ProofSection />
      <PricingSection />
      <WhoIAmSection />
      <CTASection />
    </PageLayout>
  );
}

import PageLayout from '../components/layout/PageLayout';
import PainSection from '../components/homepage/PainSection';
import DemoPreviewSection from '../components/homepage/DemoPreviewSection';
import ProofSection from '../components/homepage/ProofSection';
import PricingSection from '../components/homepage/PricingSection';
import WhoIAmSection from '../components/homepage/WhoIAmSection';
import CTASection from '../components/homepage/CTASection';

export default function HomePage() {
  return (
    <PageLayout>
      <PainSection />
      <DemoPreviewSection />
      <ProofSection />
      <PricingSection />
      <WhoIAmSection />
      <CTASection />
    </PageLayout>
  );
}

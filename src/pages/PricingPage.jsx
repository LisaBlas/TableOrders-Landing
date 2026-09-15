import PageLayout from '../components/layout/PageLayout';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import BookACallButton from '../components/ui/BookACallButton';

const INCLUDED = [
  'Shared live table map',
  'Order taking and sent-batch tracking',
  'Split by guest, item, or round',
  'Internal bill review and closing',
  'Daily sales and POS entry preparation',
  'Use across your team’s phones and tablets',
];

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="pricing-page">
        <div className="container">
          <RevealOnScroll>
            <div className="pricing-page__header">
              <p className="pain-eyebrow">Simple venue pricing</p>
              <h1 className="pricing-page__title">
                <span>One room.</span>
                <em>One clear price.</em>
              </h1>
              <p className="pricing-page__intro">No tier maze. TableOrders is a focused operational layer for small hospitality teams that keep their official POS.</p>
            </div>

            <div className="pricing-page__grid">
              <div className="pricing-page__plan">
                <div className="pricing-page__plan-top">
                  <span>TableOrders / venue</span>
                  <span>01</span>
                </div>
                <div className="pricing-page__price"><strong>€80</strong><span>per month</span></div>
                <p>All core service tools. All team devices.</p>
                <BookACallButton className="pricing-page__cta" />
              </div>

              <div className="pricing-page__included">
                <p className="pricing-page__label">Included</p>
                <ul>
                  {INCLUDED.map((item, index) => (
                    <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pricing-page__boundary">
              <span>Important boundary</span>
              <p>TableOrders coordinates live service and prepares daily totals. Payments, tax, legal receipts, and fiscal compliance stay in your official POS.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}

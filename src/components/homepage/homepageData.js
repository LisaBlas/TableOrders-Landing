import blasPhoto from '../../assets/blas.avif';
import camidiLogo from '../../assets/camidi_logo.jpg';
import camidiPhotoOne from '../../assets/camidi-1.jpg';
import camidiPhotoTwo from '../../assets/camidi-2.jpg';
import camidiPhotoThree from '../../assets/camidi-3.jpg';

export const SERVICE_CHANGES = [
  {
    tab: 'Revenue',
    icon: 'Receipt',
    title: 'Item never made it to the bill',
    before: 'A dessert ordered mid-service, an extra round added verbally — small items taken by memory and never entered. The kitchen prepared it. The guest was served. Nothing was charged.',
    fixTitle: 'Every item tracked to the bill',
    after: 'Every item stays attached to the table until the bill is reviewed and closed. Nothing falls through between taking the order and charging for it.',
  },
  {
    tab: 'Splits',
    icon: 'Calculator',
    title: 'Split recalculated by hand',
    before: 'A table of six each paying separately means recounting every item on a calculator — slow, error-prone work that holds up closing while the rest of the floor keeps moving.',
    fixTitle: 'Split without a calculator',
    after: 'Split by guest, by item, or by round directly in the app. No calculator, no memory work — the total is ready when the guest asks.',
  },
  {
    tab: 'Handoff',
    icon: 'TriangleAlert',
    title: 'Order handoff',
    before: 'Passing an order to a colleague depends on memory. During a busy service, that handoff gets skipped — and it\'s the guest who notices first.',
    fixTitle: 'Batches stay visible until handled',
    after: 'Unsent and sent batches stay visible on every device until they are confirmed and marked handled. Nothing relies on memory.',
  },
  {
    tab: 'Tables',
    icon: 'LayoutGrid',
    title: 'Table status',
    before: 'Only the assigned waiter knows the real state of each table. Who\'s about to order, who\'s waiting for the bill, which spot is freeing up — that knowledge stays in one person\'s head.',
    fixTitle: 'One live view for the whole floor',
    after: 'The floor team shares one live table map from any phone or tablet. Open, seated, ordered, confirmed — everyone sees the same thing.',
  },
];

export const CAMIDI_PROOF = {
  logo: camidiLogo,
  logoAlt: 'K\u00e4serei Camidi logo',
  name: 'K\u00e4serei Camidi',
  type: 'Wine bar \u00b7 Cheese shop \u00b7 Table service',
  location: 'Berlin',
  photos: [
    { src: camidiPhotoOne, alt: 'K\u00e4serei Camidi restaurant interior' },
    { src: camidiPhotoTwo, alt: 'K\u00e4serei Camidi table service area' },
    { src: camidiPhotoThree, alt: 'K\u00e4serei Camidi bar and counter area' },
  ],
  quote: 'TableOrders made service feel calmer almost immediately. Orders are clearer, splitting bills is faster, and the team spends less time reconstructing what happened after the shift.',
  quoteSource: 'K\u00e4serei Camidi team',
  caseStudyPath: '/camidi',
};

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Open a table',
    text: 'Tap any table on the shared floor map. Every phone on the floor sees the same state — open, seated, ordered, or confirmed.',
  },
  {
    step: '02',
    title: 'Take the order',
    text: 'Add items by category: food, drinks, wine, shop. Notes, quantities, and custom items included. Confirm a batch when it\'s ready to send.',
  },
  {
    step: '03',
    title: 'Split and close',
    text: 'Split by guest, by item, or by round. Review the total. Close the table into an internal bill — no calculator, no memory work.',
  },
  {
    step: '04',
    title: 'Cross to POS at end of day',
    text: 'Closed bills are grouped by POS category. Staff mark items as entered. End-of-day takes minutes, not an hour.',
  },
];

export const FOUNDER_PROFILE = {
  photo: blasPhoto,
  photoAlt: 'Blas Alviz',
  portfolioUrl: 'https://blasalviz.com',
};

export const FOUNDER_CREDENTIALS = [
  {
    label: 'UX Designer',
    years: '10+ years',
    body: 'I start with the workflow, not the feature list. Every screen in TableOrders was designed against real service friction \u2014 not a pitch deck.',
    icon: 'workflow',
  },
  {
    label: 'Developer',
    years: 'Full-stack',
    body: 'I design and build \u2014 no handoff, no translation layer. If something breaks during service, it gets fixed without a sprint or a ticket.',
    icon: 'code',
  },
  {
    label: 'Hospitality background',
    years: 'Restaurants \u00b7 Bars \u00b7 Cafes',
    body: 'I know what breaks during a Saturday dinner rush. TableOrders was built from real hospitality workflows: tables, sections, bar orders, counter sales, and no patience for complicated software.',
    icon: 'hospitality',
  },
];

import blasPhoto from '../../assets/blas.avif';
import camidiLogo from '../../assets/camidi_logo.jpg';
import camidiPhotoOne from '../../assets/camidi-1.jpg';
import camidiPhotoTwo from '../../assets/camidi-2.jpg';
import camidiPhotoThree from '../../assets/camidi-3.jpg';

export const SERVICE_CHANGES = [
  {
    tab: 'Tickets',
    icon: 'Receipt',
    title: 'Paper tickets',
    before: 'Paper tickets look unprofessional to guests. Totals are added on a calculator, errors go unnoticed, and a large table can take ten minutes to close because everyone pays separately.',
    after: 'Guests see clear items, readable names, and totals the team can trust.',
  },
  {
    tab: 'Closing',
    icon: 'Calculator',
    title: 'Daily sales',
    before: 'Closing means going through every ticket one by one — slow, demanding work that falls on staff at the end of an already exhausting shift.',
    after: 'Closed bills are grouped by POS ID, ready for fast manual POS entry.',
  },
  {
    tab: 'Handoff',
    icon: 'TriangleAlert',
    title: 'Order handoff',
    before: 'Passing an order to a colleague depends on memory. During a busy service, that handoff gets skipped — and it\'s the guest who notices first.',
    after: 'Unsent and sent batches stay visible until they are confirmed and handled.',
  },
  {
    tab: 'Tables',
    icon: 'LayoutGrid',
    title: 'Table status',
    before: 'Only the assigned waiter knows the real state of each table. Who\'s about to order, who\'s waiting for the bill, which spot is freeing up — that knowledge stays in one person\'s head.',
    after: 'The floor team shares one live table overview from any phone or tablet.',
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

export const FIT_STEPS = [
  {
    tag: 'Lost revenue',
    title: 'Item never made it to the bill',
    text: 'A dessert ordered mid-service, an extra round added verbally — small items that got missed and were never charged.',
    icon: 'paper',
  },
  {
    tag: 'Manual work',
    title: 'Split recalculated by hand',
    text: 'A table of six each paying separately means recounting every item on a calculator — slow, error-prone work that holds up closing.',
    icon: 'split',
  },
  {
    tag: 'Time sink',
    title: 'Daily totals rebuilt from scratch',
    text: 'Closing means going through every ticket one by one to get POS-entry figures — exhausting work that falls on staff at the end of a long shift.',
    icon: 'shift',
  },
  {
    tag: 'Missed order',
    title: 'Round confirmed but never sent',
    text: 'An order acknowledged verbally but never entered — staff find out when the guest asks again, minutes later.',
    icon: 'interrupt',
  },
  {
    tag: 'Lean setup',
    title: 'Phones + existing POS + no manual maths',
    text: 'TableOrders tracks every order, split, and bill so nothing gets missed and closing takes minutes, not an hour.',
    icon: 'lean',
    summary: true,
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

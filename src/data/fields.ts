export interface Field {
  title: string;
  body: string;
  /** The closing "Yours?" card is the inverted pitch, not a real field. */
  isPitch?: boolean;
}

export const fields: Field[] = [
  {
    title: 'Health & wearables',
    body: 'Exercise physiology MSc, GPS and athlete-monitoring products, and tools built with medical teams.',
  },
  {
    title: 'Data & analytics platforms',
    body: "Platforms that pull data from many departments into one view, and dashboards that answer one clear question.",
  },
  {
    title: 'Media & broadcast tech',
    body: 'Telestration software and a media asset platform with VAR integration at Tracab.',
  },
  {
    title: 'Fintech & modelling',
    body: 'Product work inside a statistical research and modelling business at Smartodds.',
  },
  {
    title: 'B2B SaaS for specialists',
    body: 'First PM at a SaaS start-up, close to sales and support, plus my own subscription product.',
  },
  {
    title: 'Yours?',
    body: "If your users are experts and your product runs on data, let's talk.",
    isPitch: true,
  },
];

export interface TrackRecordEntry {
  period: string;
  eyebrow: string;
  title: string;
  body: string;
  tags: string[];
  /** The current role gets the accent-coloured period label. */
  current?: boolean;
}

export const trackRecord: TrackRecordEntry[] = [
  {
    period: 'Since 2025',
    eyebrow: 'Consulting · via Smartodds',
    title: 'Product consultant to Brentford FC',
    body: "Leading strategy and delivery for the club's web and mobile performance platform, used across coaching, sports science, medical and performance teams. New features are prototyped in the codebase with AI and tested with staff before engineering picks them up.",
    tags: ['Web + mobile platform', 'Multi-team users', 'AI prototyping'],
    current: true,
  },
  {
    period: 'Since 2023',
    eyebrow: 'Smartodds · Statistical research',
    title: 'Product management, data products',
    body: 'Owning the product lifecycle from requirements to vision. Set up product metrics that blend direct and indirect user feedback, and formalised processes between development, sales and support that had never been tracked before.',
    tags: ['Data products', 'Product metrics', 'Process design'],
  },
  {
    period: '2021 to 2023',
    eyebrow: 'Tracab · ChyronHego Group',
    title: 'Coach Paint & Tracab Vault',
    body: 'Coach Paint is telestration software used by elite clubs and federations. Vault brought siloed products into one media asset platform, with offside-calling technology built to integrate with existing VAR systems. I set the roadmap with the VP of Product, CTO and GM, and coordinated delivery with teams in Sweden and the Czech Republic.',
    tags: ['Media tech', 'Platform consolidation', 'Distributed teams'],
  },
  {
    period: '2019 to 2021',
    eyebrow: 'Iterpro · Sport tech SaaS',
    title: 'Club intelligence platform + Player & Director apps',
    body: "The company's first Product Manager, shaping the roadmap with the CEO and CTO for a web platform that unifies data across a football club's departments. I also launched two Flutter apps on iOS and Android. The Player App connects players with performance staff, and the Director App gives directors a digest of scouting and contract data.",
    tags: ['B2B SaaS', 'First PM hire', 'iOS + Android launch'],
  },
];

export interface Skill {
  letter: string;
  title: string;
  body: string;
  /** The card with the accent letter gets the inverted (ink background) treatment. */
  inverted?: boolean;
}

export const skills: Skill[] = [
  {
    letter: 'A',
    title: "Learning the user's world, fast",
    body: "I trained as a scientist, so I start with how people actually work. I've built for coaches, medics, analysts, broadcasters and statisticians, and I've learned to tell what users ask for from what they will actually use.",
  },
  {
    letter: 'B',
    title: 'Product leadership',
    body: 'Seven years owning roadmaps for web, mobile and on-premise products. Aligning C-level stakeholders, running agile delivery and coordinating teams across the UK, Sweden and Czech Republic.',
  },
  {
    letter: 'C',
    title: 'AI-native prototyping',
    body: 'I use Claude Code, Claude Design and GitHub Copilot every day to build working features in the real codebase. Users try them first, and engineering only picks up what has been validated.',
    inverted: true,
  },
];

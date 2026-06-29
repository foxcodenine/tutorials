import { Column } from './types';

export const initialColumns: Column[] = [
  {
    id: 'col-1',
    name: 'Backlog',
    cards: [
      {
        id: 'card-1',
        title: 'User authentication',
        details: 'Implement OAuth2 login with Google and GitHub providers.',
      },
      {
        id: 'card-2',
        title: 'Dark mode support',
        details: 'Add a theme toggle that respects system preferences.',
      },
      {
        id: 'card-3',
        title: 'Email notifications',
        details: 'Send digests when cards are moved or new ones are added.',
      },
    ],
  },
  {
    id: 'col-2',
    name: 'To Do',
    cards: [
      {
        id: 'card-4',
        title: 'Responsive layout',
        details: 'Ensure the board works seamlessly on tablets and mobile.',
      },
      {
        id: 'card-5',
        title: 'API rate limiting',
        details: 'Protect endpoints with per-user throttling.',
      },
    ],
  },
  {
    id: 'col-3',
    name: 'In Progress',
    cards: [
      {
        id: 'card-6',
        title: 'Drag and drop',
        details: 'Integrate dnd-kit for smooth card reordering across columns.',
      },
      {
        id: 'card-7',
        title: 'Design system',
        details: 'Establish typography scale, color tokens, and spacing rules.',
      },
    ],
  },
  {
    id: 'col-4',
    name: 'Review',
    cards: [
      {
        id: 'card-8',
        title: 'Unit test suite',
        details: 'Cover core business logic with Jest and Testing Library.',
      },
    ],
  },
  {
    id: 'col-5',
    name: 'Done',
    cards: [
      {
        id: 'card-9',
        title: 'Project scaffolding',
        details: 'Next.js app created with TypeScript, Tailwind, and linting.',
      },
      {
        id: 'card-10',
        title: 'Color palette',
        details: 'Brand colors defined and applied across all components.',
      },
    ],
  },
];

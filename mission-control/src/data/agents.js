export const agents = [
  {
    id: 'friday',
    name: 'Friday',
    role: 'Chief Orchestrator',
    letter: 'F',
    color: 'var(--cyan)',
    bgColor: 'var(--cyan-dim)',
    status: 'online',
    input: 'All agent outputs, system alerts, user commands',
    output: 'Task delegation, deployment triggers, status reports',
    desk: 'Central Command Hub',
    currentTask: 'Orchestrating daily operations'
  },
  {
    id: 'vakeel',
    name: 'Vakeel Saab',
    role: 'Legal Ops',
    letter: 'V',
    color: 'var(--purple)',
    bgColor: 'var(--purple-dim)',
    status: 'online',
    input: 'Case filings, court dates, legal docs',
    output: 'Briefs, compliance docs, case summaries',
    desk: 'Legal Wing – Desk 1',
    currentTask: 'Drafting brief for Case #NLC-2024-0092'
  },
  {
    id: 'analyzer',
    name: 'Image Analyzer',
    role: 'Vision Lab',
    letter: 'I',
    color: 'var(--orange)',
    bgColor: 'var(--orange-dim)',
    status: 'busy',
    input: 'Screenshots, documents, scanned files',
    output: 'OCR text, visual reports, data extraction',
    desk: 'Vision Lab – Desk 2',
    currentTask: 'Processing court filing OCR batch #48'
  },
  {
    id: 'research',
    name: 'Research Cell',
    role: 'Intelligence',
    letter: 'R',
    color: 'var(--blue)',
    bgColor: 'var(--blue-dim)',
    status: 'online',
    input: 'Topics, queries, competitor intel',
    output: 'Reports, summaries, trend analysis',
    desk: 'Intel Room – Desk 3',
    currentTask: 'Compiling competitor legal-tech analysis'
  },
  {
    id: 'comms',
    name: 'Comms Studio',
    role: 'Outreach',
    letter: 'C',
    color: 'var(--green)',
    bgColor: 'var(--green-dim)',
    status: 'idle',
    input: 'Campaign briefs, brand guidelines',
    output: 'Emails, social posts, newsletters',
    desk: 'Media Bay – Desk 4',
    currentTask: 'Awaiting next campaign brief'
  },
  {
    id: 'webstudio',
    name: 'Web Studio',
    role: 'Development',
    letter: 'W',
    color: 'var(--yellow)',
    bgColor: 'var(--yellow-dim)',
    status: 'online',
    input: 'Design specs, tickets, feature requests',
    output: 'Code, deployments, UI components',
    desk: 'Dev Lab – Desk 5',
    currentTask: 'Verifying NyayaVedika & RudraHash site builds'
  }
];

export function getAgent(id) {
  return agents.find(a => a.id === id);
}

export function getAgentColor(id) {
  const agent = getAgent(id);
  return agent ? agent.color : 'var(--text-secondary)';
}

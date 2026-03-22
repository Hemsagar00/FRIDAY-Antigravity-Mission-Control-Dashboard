// days: 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat, 6=Sun
export const schedules = [
  {
    id: 's1',
    title: 'Morning Brief',
    time: '08:00',
    days: [0, 1, 2, 3, 4],
    color: 'cyan',
    agent: 'friday',
    recurrence: 'Weekdays'
  },
  {
    id: 's2',
    title: 'Competitor YouTube Scan',
    time: '10:00',
    days: [0, 2, 4],
    color: 'orange',
    agent: 'research',
    recurrence: 'Mon/Wed/Fri'
  },
  {
    id: 's3',
    title: 'NyayaVedika DB Backup',
    time: '02:00',
    days: [0, 1, 2, 3, 4, 5, 6],
    color: 'green',
    agent: 'friday',
    recurrence: 'Daily'
  },
  {
    id: 's4',
    title: 'Court Date Reminder Sync',
    time: '09:00',
    days: [1, 3],
    color: 'purple',
    agent: 'vakeel',
    recurrence: 'Tue/Thu'
  },
  {
    id: 's5',
    title: 'RudraHash Node Health Check',
    time: '06:00',
    days: [0, 1, 2, 3, 4, 5, 6],
    color: 'red',
    agent: 'friday',
    recurrence: 'Every 6hrs'
  },
  {
    id: 's6',
    title: 'Weekly Report Generation',
    time: '18:00',
    days: [4],
    color: 'blue',
    agent: 'friday',
    recurrence: 'Fridays'
  },
  {
    id: 's7',
    title: 'Social Media Post Queue',
    time: '11:00',
    days: [0, 2, 4],
    color: 'green',
    agent: 'comms',
    recurrence: 'Mon/Wed/Fri'
  },
  {
    id: 's8',
    title: 'RudraHash Node Health Check',
    time: '12:00',
    days: [0, 1, 2, 3, 4, 5, 6],
    color: 'red',
    agent: 'friday',
    recurrence: 'Every 6hrs'
  },
  {
    id: 's9',
    title: 'RudraHash Node Health Check',
    time: '18:00',
    days: [0, 1, 2, 3, 4, 5, 6],
    color: 'red',
    agent: 'friday',
    recurrence: 'Every 6hrs'
  },
  {
    id: 's10',
    title: 'Vision Lab Batch Process',
    time: '14:00',
    days: [1, 3],
    color: 'orange',
    agent: 'analyzer',
    recurrence: 'Tue/Thu'
  }
];

export const timeSlots = ['02:00', '06:00', '08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '18:00'];
export const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

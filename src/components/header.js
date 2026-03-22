const pageTitles = {
  dashboard: 'Dashboard',
  team: 'Team Hierarchy',
  kanban: 'Task Board',
  calendar: 'Cron Calendar',
  journal: 'Memory Journal',
  office: 'Virtual Office'
};

const pageBreadcrumbs = {
  dashboard: 'FRIDAY / Overview',
  team: 'FRIDAY / Agents / Hierarchy',
  kanban: 'FRIDAY / Tasks / Board',
  calendar: 'FRIDAY / Automation / Calendar',
  journal: 'FRIDAY / Logs / Journal',
  office: 'FRIDAY / Workspace / Office Map'
};

export function renderHeader(currentRoute) {
  const title = pageTitles[currentRoute] || 'Dashboard';
  const breadcrumb = pageBreadcrumbs[currentRoute] || 'FRIDAY';

  return `
    <header class="header">
      <div class="header-left">
        <div>
          <div class="header-page-title">${title}</div>
          <div class="header-breadcrumb">${breadcrumb}</div>
        </div>
      </div>
      <div class="header-right">
        <div class="header-search">
          <span class="icon">⌕</span>
          <input type="text" placeholder="Search commands, agents, tasks..." />
        </div>
        <button class="header-notification" title="Notifications">
          🔔
          <span class="count">3</span>
        </button>
        <div class="header-avatar" title="John Wick">JW</div>
      </div>
    </header>
  `;
}

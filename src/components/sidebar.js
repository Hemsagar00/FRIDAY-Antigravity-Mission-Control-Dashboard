import { agents } from '../data/agents.js';

const navItems = [
  { id: 'dashboard', icon: '◈', label: 'Dashboard' },
  { id: 'team',      icon: '⊡', label: 'Team' },
  { id: 'kanban',    icon: '☰', label: 'Tasks' },
  { id: 'calendar',  icon: '▦', label: 'Calendar' },
  { id: 'journal',   icon: '❖', label: 'Journal' },
  { id: 'office',    icon: '⌂', label: 'Office' }
];

export function renderSidebar(currentRoute) {
  const onlineCount = agents.filter(a => a.status === 'online').length;

  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="sidebar-brand-logo">F</div>
        <div class="sidebar-brand-text">
          <h1>FRIDAY</h1>
          <span>Command Center</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="sidebar-section-label">Navigation</div>
        ${navItems.map(item => `
          <a class="sidebar-nav-item ${currentRoute === item.id ? 'active' : ''}"
             href="#${item.id}"
             data-route="${item.id}">
            <span class="icon">${item.icon}</span>
            <span>${item.label}</span>
          </a>
        `).join('')}

        <div class="sidebar-section-label" style="margin-top: 24px;">Projects</div>
        <div class="sidebar-nav-item" style="cursor: default;">
          <span class="icon" style="color: var(--cyan);">●</span>
          <span>NyayaVedika</span>
        </div>
        <div class="sidebar-nav-item" style="cursor: default;">
          <span class="icon" style="color: var(--orange);">●</span>
          <span>RudraHash</span>
        </div>
        <div class="sidebar-nav-item" style="cursor: default;">
          <span class="icon" style="color: var(--purple);">●</span>
          <span>NagaLawChambers</span>
        </div>
        <div class="sidebar-nav-item" style="cursor: default;">
          <span class="icon" style="color: var(--green);">●</span>
          <span>RudraCoreInfra</span>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-mode-badge">
          <span class="dot"></span>
          <span>Local Mode · ${onlineCount} agents online</span>
        </div>
      </div>
    </aside>
  `;
}

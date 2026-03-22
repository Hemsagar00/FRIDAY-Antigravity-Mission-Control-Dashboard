import './index.css';
import { renderSidebar } from './components/sidebar.js';
import { renderHeader } from './components/header.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderTeam } from './pages/team.js';
import { renderKanban, initKanbanDragDrop } from './pages/kanban.js';
import { renderCalendar } from './pages/calendar.js';
import { renderJournal, initJournalFilters } from './pages/journal.js';
import { renderOffice, initOffice, destroyOffice } from './pages/office.js';

const routes = {
  dashboard: { render: renderDashboard, init: null,              destroy: null },
  team:      { render: renderTeam,      init: null,              destroy: null },
  kanban:    { render: renderKanban,     init: initKanbanDragDrop, destroy: null },
  calendar:  { render: renderCalendar,   init: null,              destroy: null },
  journal:   { render: renderJournal,    init: initJournalFilters, destroy: null },
  office:    { render: renderOffice,     init: initOffice,        destroy: destroyOffice }
};

let currentDestroy = null;

function getRoute() {
  const hash = window.location.hash.replace('#', '') || 'dashboard';
  return routes[hash] ? hash : 'dashboard';
}

function render() {
  // Cleanup previous page
  if (currentDestroy) {
    currentDestroy();
    currentDestroy = null;
  }

  const currentRoute = getRoute();
  const route = routes[currentRoute];
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderSidebar(currentRoute)}
    <div class="main-content">
      ${renderHeader(currentRoute)}
      <div class="page-content">
        ${route.render()}
      </div>
    </div>
  `;

  // Initialize page-specific interactivity
  if (route.init) {
    requestAnimationFrame(() => route.init());
  }
  currentDestroy = route.destroy;
}

// Listen for route changes
window.addEventListener('hashchange', render);

// Initial render
render();

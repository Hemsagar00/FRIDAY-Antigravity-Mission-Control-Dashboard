import { journalEntries } from '../data/journal.js';
import { agents } from '../data/agents.js';

const filterTypes = ['ALL', 'DEPLOY', 'ERROR', 'DECISION', 'WORKFLOW', 'NOTE'];

export function renderJournal() {
  return `
    <div class="animate-in">
      <h2 class="page-title">Memory Journal</h2>

      <div class="journal-filters">
        ${filterTypes.map(type => `
          <button class="journal-filter-btn ${type === 'ALL' ? 'active' : ''}" data-filter="${type}">
            ${type === 'ALL' ? '● All' : type}
          </button>
        `).join('')}
      </div>

      <div class="journal-timeline" id="journal-timeline">
        ${renderEntries(journalEntries)}
      </div>
    </div>
  `;
}

function renderEntries(entries) {
  return entries.map((entry, i) => {
    const agent = agents.find(a => a.id === entry.agent);
    return `
      <div class="journal-entry type-${entry.type}" style="animation-delay: ${i * 0.05}s;">
        <div class="journal-entry-card">
          <div class="journal-entry-header">
            <span class="journal-entry-type">${entry.type}</span>
            <span class="journal-entry-timestamp">${entry.timestamp}</span>
          </div>
          <div class="journal-entry-title">${entry.title}</div>
          <div class="journal-entry-description">${entry.description}</div>
          <div class="journal-entry-agent">
            <span class="avatar" style="background: ${agent?.bgColor}; color: ${agent?.color}; width: 20px; height: 20px; font-size: 0.55rem; border-radius: 4px;">
              ${agent?.letter || '?'}
            </span>
            ${agent?.name || 'Unknown'} · ${agent?.role || ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

export function initJournalFilters() {
  const buttons = document.querySelectorAll('.journal-filter-btn');
  const timeline = document.getElementById('journal-timeline');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const filtered = filter === 'ALL'
        ? journalEntries
        : journalEntries.filter(e => e.type === filter);

      timeline.innerHTML = renderEntries(filtered);
    });
  });
}

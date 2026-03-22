import { tasks, projectColors } from '../data/tasks.js';
import { agents } from '../data/agents.js';

const columns = [
  { key: 'backlog',    label: 'Backlog',     icon: '📥' },
  { key: 'inprogress', label: 'In Progress', icon: '🔄' },
  { key: 'review',     label: 'Review',      icon: '👁' },
  { key: 'done',       label: 'Done',        icon: '✅' }
];

function renderCard(task) {
  const agent = agents.find(a => a.id === task.agent);
  const projectClass = projectColors[task.project] || '';

  return `
    <div class="kanban-card ${projectClass}"
         draggable="true"
         data-task-id="${task.id}">
      <div class="kanban-card-title">${task.title}</div>
      <div style="margin-bottom: 6px;">
        <span class="badge badge-${task.project === 'nyaya' ? 'cyan' : task.project === 'rudra' ? 'orange' : task.project === 'naga' ? 'purple' : 'green'}" style="font-size: 0.65rem;">
          ${task.projectLabel}
        </span>
      </div>
      <div class="kanban-card-meta">
        <div class="kanban-card-agent">
          <span class="mini-avatar" style="background: ${agent?.bgColor || 'var(--bg-surface)'}; color: ${agent?.color || 'var(--text-secondary)'};">
            ${agent?.letter || '?'}
          </span>
          ${agent?.name || 'Unassigned'}
        </div>
        <span class="kanban-card-priority priority-${task.priority}">
          ${task.priority === 'high' ? 'High' : task.priority === 'med' ? 'Med' : 'Low'}
        </span>
      </div>
      <div class="kanban-card-date">📅 ${task.date}</div>
    </div>
  `;
}

export function renderKanban() {
  return `
    <div class="animate-in">
      <h2 class="page-title">Task Board</h2>
      <div class="kanban-board">
        ${columns.map(col => `
          <div class="kanban-column">
            <div class="kanban-column-header">
              <h3>${col.icon} ${col.label}</h3>
              <span class="kanban-column-count">${tasks[col.key].length}</span>
            </div>
            <div class="kanban-column-body" data-column="${col.key}">
              ${tasks[col.key].map(task => renderCard(task)).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function initKanbanDragDrop() {
  const cards = document.querySelectorAll('.kanban-card');
  const columnBodies = document.querySelectorAll('.kanban-column-body');

  cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
      card.classList.add('dragging');
      e.dataTransfer.setData('text/plain', card.dataset.taskId);
      e.dataTransfer.effectAllowed = 'move';
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      columnBodies.forEach(col => col.classList.remove('drag-over'));
    });
  });

  columnBodies.forEach(col => {
    col.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      col.classList.add('drag-over');

      const afterElement = getDragAfterElement(col, e.clientY);
      const dragging = document.querySelector('.dragging');
      if (dragging) {
        if (afterElement) {
          col.insertBefore(dragging, afterElement);
        } else {
          col.appendChild(dragging);
        }
      }
    });

    col.addEventListener('dragleave', () => {
      col.classList.remove('drag-over');
    });

    col.addEventListener('drop', (e) => {
      e.preventDefault();
      col.classList.remove('drag-over');
      // Update column count
      updateColumnCounts();
    });
  });
}

function getDragAfterElement(container, y) {
  const elements = [...container.querySelectorAll('.kanban-card:not(.dragging)')];
  return elements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateColumnCounts() {
  document.querySelectorAll('.kanban-column').forEach(col => {
    const count = col.querySelector('.kanban-column-body').children.length;
    col.querySelector('.kanban-column-count').textContent = count;
  });
}

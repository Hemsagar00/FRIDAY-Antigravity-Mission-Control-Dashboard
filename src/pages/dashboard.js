import { agents } from '../data/agents.js';

const activityLog = [
  { agent: 'vakeel', text: '<strong>Vakeel Saab</strong> filed Case #NLC-2024-0092 counter-statement', time: '22:14', tag: 'Legal Ops' },
  { agent: 'friday', text: '<strong>Friday</strong> deployed NyayaVedika v2.3.1 to production', time: '22:10', tag: 'Deploy' },
  { agent: 'research', text: '<strong>Research Cell</strong> completed competitor analysis report', time: '21:45', tag: 'Intel' },
  { agent: 'friday', text: '<strong>Friday</strong> ran RudraHash node health check — all clear', time: '21:30', tag: 'System' },
  { agent: 'webstudio', text: '<strong>Web Studio</strong> pushed RudraCoreInfra hero section update', time: '20:55', tag: 'Deploy' },
  { agent: 'analyzer', text: '<strong>Image Analyzer</strong> processed OCR batch #47 — 98.4% accuracy', time: '20:30', tag: 'Vision' },
  { agent: 'comms', text: '<strong>Comms Studio</strong> drafted NyayaVedika onboarding emails', time: '19:15', tag: 'Content' },
  { agent: 'friday', text: '<strong>Friday</strong> adjusted NyayaVedika API rate limit to 500 req/min', time: '18:40', tag: 'System' },
  { agent: 'vakeel', text: '<strong>Vakeel Saab</strong> standardized brief template', time: '16:08', tag: 'Legal Ops' },
  { agent: 'friday', text: '<strong>Friday</strong> executed morning brief routine in 12s', time: '08:00', tag: 'Workflow' }
];

export function renderDashboard() {
  const onlineCount = agents.filter(a => a.status === 'online').length;

  return `
    <div class="animate-in">
      <h2 class="page-title">Command Overview</h2>

      <div class="metrics-grid animate-stagger">
        <div class="metric-card cyan">
          <div class="metric-icon">🤖</div>
          <div class="metric-value">${onlineCount}/${agents.length}</div>
          <div class="metric-label">Active Agents</div>
          <svg class="metric-spark" viewBox="0 0 60 30">
            <polyline points="0,25 10,20 20,15 30,18 40,10 50,12 60,5" fill="none" stroke="var(--cyan)" stroke-width="2" opacity="0.6"/>
          </svg>
        </div>
        <div class="metric-card orange">
          <div class="metric-icon">📋</div>
          <div class="metric-value">8</div>
          <div class="metric-label">Tasks In Progress</div>
          <svg class="metric-spark" viewBox="0 0 60 30">
            <polyline points="0,20 10,22 20,18 30,15 40,20 50,10 60,8" fill="none" stroke="var(--orange)" stroke-width="2" opacity="0.6"/>
          </svg>
        </div>
        <div class="metric-card green">
          <div class="metric-icon">⏰</div>
          <div class="metric-value">12</div>
          <div class="metric-label">Scheduled Jobs</div>
          <svg class="metric-spark" viewBox="0 0 60 30">
            <polyline points="0,15 10,18 20,12 30,15 40,8 50,10 60,5" fill="none" stroke="var(--green)" stroke-width="2" opacity="0.6"/>
          </svg>
        </div>
        <div class="metric-card purple">
          <div class="metric-icon">🧠</div>
          <div class="metric-value">47</div>
          <div class="metric-label">Memory Entries</div>
          <svg class="metric-spark" viewBox="0 0 60 30">
            <polyline points="0,25 10,20 20,22 30,15 40,12 50,8 60,5" fill="none" stroke="var(--purple)" stroke-width="2" opacity="0.6"/>
          </svg>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="activity-log">
          <div class="activity-log-header">
            <h3>Live Activity Feed</h3>
            <span class="badge badge-cyan">● Live</span>
          </div>
          ${activityLog.map(item => {
            const agent = agents.find(a => a.id === item.agent);
            return `
              <div class="activity-item">
                <div class="activity-avatar" style="background: ${agent?.bgColor || 'var(--bg-surface)'}; color: ${agent?.color || 'var(--text-secondary)'};">
                  ${agent?.letter || '?'}
                </div>
                <div class="activity-body">
                  <div class="activity-text">${item.text}</div>
                  <div class="activity-meta">${item.time} · ${item.tag}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div>
          <div class="quick-actions" style="margin-bottom: 16px;">
            <div class="section-title">Quick Actions</div>
            <button class="quick-action-btn"><span class="icon">＋</span> New Task</button>
            <button class="quick-action-btn"><span class="icon">⏱</span> Schedule Job</button>
            <button class="quick-action-btn"><span class="icon">📊</span> View Reports</button>
            <button class="quick-action-btn"><span class="icon">🔄</span> Sync All Agents</button>
          </div>

          <div class="agent-status-panel">
            <h3>Agent Status</h3>
            ${agents.map(agent => `
              <div class="agent-status-item">
                <div class="avatar" style="background: ${agent.bgColor}; color: ${agent.color}; width: 28px; height: 28px; font-size: 0.7rem;">
                  ${agent.letter}
                </div>
                <span class="name">${agent.name}</span>
                <span class="role">${agent.role}</span>
                <span class="status-dot ${agent.status}"></span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

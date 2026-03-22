import { agents } from '../data/agents.js';

export function renderTeam() {
  const friday = agents.find(a => a.id === 'friday');
  const subAgents = agents.filter(a => a.id !== 'friday');

  return `
    <div class="animate-in">
      <h2 class="page-title">Team Hierarchy</h2>

      <div class="team-page">
        <div class="team-chief">
          <div class="agent-card chief">
            <div class="agent-card-header">
              <div class="agent-card-avatar" style="background: ${friday.bgColor}; color: ${friday.color};">
                ${friday.letter}
              </div>
              <div class="agent-card-info">
                <h3>${friday.name}</h3>
                <div class="role">${friday.role}</div>
              </div>
              <span class="status-dot ${friday.status}" style="margin-left: auto;"></span>
            </div>
            <div class="agent-card-io">
              <div class="agent-card-io-row">
                <span class="label">Input</span>
                <span class="value">${friday.input}</span>
              </div>
              <div class="agent-card-io-row">
                <span class="label">Output</span>
                <span class="value">${friday.output}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="team-connector"></div>

        <div class="team-agents animate-stagger">
          ${subAgents.map(agent => `
            <div class="agent-card">
              <div class="agent-card-header">
                <div class="agent-card-avatar" style="background: ${agent.bgColor}; color: ${agent.color};">
                  ${agent.letter}
                </div>
                <div class="agent-card-info">
                  <h3>${agent.name}</h3>
                  <div class="role">${agent.role}</div>
                </div>
                <span class="status-dot ${agent.status}" style="margin-left: auto;"></span>
              </div>
              <div class="agent-card-io">
                <div class="agent-card-io-row">
                  <span class="label">Input</span>
                  <span class="value">${agent.input}</span>
                </div>
                <div class="agent-card-io-row">
                  <span class="label">Output</span>
                  <span class="value">${agent.output}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

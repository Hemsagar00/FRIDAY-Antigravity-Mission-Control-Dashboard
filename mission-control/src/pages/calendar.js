import { schedules, timeSlots, dayNames } from '../data/schedules.js';
import { agents } from '../data/agents.js';

export function renderCalendar() {
  // Determine today's day index (0=Mon)
  const now = new Date();
  const jsDay = now.getDay(); // 0=Sun
  const todayIndex = jsDay === 0 ? 6 : jsDay - 1; // convert to 0=Mon

  return `
    <div class="animate-in">
      <h2 class="page-title">Cron Job Calendar</h2>

      <div class="calendar-grid">
        <!-- Header row -->
        <div class="calendar-header-cell" style="background: var(--bg-card);"></div>
        ${dayNames.map((day, i) => `
          <div class="calendar-header-cell ${i === todayIndex ? 'today' : ''}">
            ${day}
            ${i === todayIndex ? '<div style="font-size: 0.65rem; opacity: 0.7;">Today</div>' : ''}
          </div>
        `).join('')}

        <!-- Time slot rows -->
        ${timeSlots.map(time => `
          <div class="calendar-time-cell">${time}</div>
          ${dayNames.map((_, dayIdx) => {
            const events = schedules.filter(s => s.time === time && s.days.includes(dayIdx));
            return `
              <div class="calendar-cell ${dayIdx === todayIndex ? 'today-col' : ''}">
                ${events.map(evt => {
                  const agent = agents.find(a => a.id === evt.agent);
                  return `
                    <div class="calendar-event ${evt.color}" title="${evt.title} — ${agent?.name || ''} (${evt.recurrence})">
                      <div style="font-weight: 600;">${evt.title}</div>
                      <div style="opacity: 0.8; font-size: 0.6rem;">${agent?.letter || ''} · ${evt.recurrence}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            `;
          }).join('')}
        `).join('')}
      </div>

      <div class="calendar-legend" style="margin-top: 16px;">
        <div class="calendar-legend-item">
          <div class="calendar-legend-color" style="background: var(--cyan);"></div>
          System / Friday
        </div>
        <div class="calendar-legend-item">
          <div class="calendar-legend-color" style="background: var(--orange);"></div>
          Scanning / Vision
        </div>
        <div class="calendar-legend-item">
          <div class="calendar-legend-color" style="background: var(--green);"></div>
          Backup / Comms
        </div>
        <div class="calendar-legend-item">
          <div class="calendar-legend-color" style="background: var(--purple);"></div>
          Legal
        </div>
        <div class="calendar-legend-item">
          <div class="calendar-legend-color" style="background: var(--red);"></div>
          Health Checks
        </div>
        <div class="calendar-legend-item">
          <div class="calendar-legend-color" style="background: var(--blue);"></div>
          Reports
        </div>
      </div>

      <button class="calendar-add-btn" title="Add Schedule">＋</button>
    </div>
  `;
}

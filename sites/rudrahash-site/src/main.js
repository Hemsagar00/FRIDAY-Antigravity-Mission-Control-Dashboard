import './style.css';

/* ═══════════════════════════════════════
   RudraHash — Page Renderers
   ═══════════════════════════════════════ */

function renderHome() {
  return `
  <section class="hero" id="hero">
    <div class="hero-grid-bg" aria-hidden="true"></div>
    <div class="hero-inner">
      <span class="hero-badge">Infrastructure · Operations · Consulting</span>
      <h1 class="hero-title">Industrial-Scale<br><span class="gradient-text">Bitcoin Mining Infrastructure</span></h1>
      <p class="hero-sub">Designing and operating efficient mining systems with a focus on transparency and risk awareness. No hype — just infrastructure.</p>
      <div class="hero-cta">
        <a href="#services" class="btn btn-primary" id="cta-services">Talk to Us About Mining Infra</a>
        <a href="#how-it-works" class="btn btn-outline" id="cta-how">How It Works</a>
      </div>
    </div>
  </section>

  <section class="metrics-row" id="metrics">
    <div class="container">
      <div class="metrics-grid">
        <div class="metric" id="metric-hashrate">
          <span class="metric-value">~2.5 PH/s</span>
          <span class="metric-label">Target Hashrate</span>
        </div>
        <div class="metric" id="metric-efficiency">
          <span class="metric-value">28 J/TH</span>
          <span class="metric-label">Energy Efficiency</span>
        </div>
        <div class="metric" id="metric-uptime">
          <span class="metric-value">99.2%</span>
          <span class="metric-label">Uptime Target</span>
        </div>
        <div class="metric" id="metric-cooling">
          <span class="metric-value">Liquid</span>
          <span class="metric-label">Cooling Method</span>
        </div>
      </div>
      <p class="metrics-note">Sample operational targets. Actual performance varies based on hardware, conditions, and market.</p>
    </div>
  </section>

  <section class="what-we-do" id="what-we-do">
    <div class="container">
      <div class="two-col">
        <div class="col-card do-card" id="we-do">
          <h2>What RudraHash <span class="hl-green">Does</span></h2>
          <ul>
            <li><span class="icon">🏗️</span> Design industrial mining facilities from site selection to rack layout</li>
            <li><span class="icon">⚡</span> Operate and monitor mining hardware with 24/7 dashboards</li>
            <li><span class="icon">❄️</span> Engineer liquid cooling systems for tropical climates</li>
            <li><span class="icon">📊</span> Provide transparent reporting on hashrate, costs, and yields</li>
            <li><span class="icon">📚</span> Educate partners on Bitcoin mining economics and risks</li>
          </ul>
        </div>
        <div class="col-card dont-card" id="we-dont">
          <h2>What RudraHash <span class="hl-red">Does Not</span> Do</h2>
          <ul>
            <li><span class="icon">❌</span> Promise guaranteed returns or fixed income from mining</li>
            <li><span class="icon">❌</span> Provide investment advice or manage investor funds</li>
            <li><span class="icon">❌</span> Operate retail mining pools or cloud mining schemes</li>
            <li><span class="icon">❌</span> Make predictions about Bitcoin price or market direction</li>
            <li><span class="icon">❌</span> Guarantee profitability — mining is inherently risky</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="home-cta" id="home-cta">
    <div class="container">
      <h2>Serious about mining infrastructure?</h2>
      <p>We work with partners who understand the risks and want to build real operations — not chase unrealistic promises.</p>
      <a href="#services" class="btn btn-primary btn-lg">Explore Our Services</a>
    </div>
  </section>`;
}

function renderHowItWorks() {
  const steps = [
    { icon: '📍', title: 'Site Selection & Power', desc: 'We evaluate locations based on power availability, cost per kWh, ambient temperature, regulatory environment, and physical security. Power quality and redundancy are critical — we design for uninterrupted operation.' },
    { icon: '🖥️', title: 'Hardware Selection & Procurement', desc: 'We select mining hardware (ASICs) based on hash efficiency (J/TH), availability, and total cost of ownership. No off-brand or unverifiable machines — only established manufacturers with warranty support.' },
    { icon: '❄️', title: 'Cooling & Environment Control', desc: 'Tropical climates demand serious cooling. We design liquid cooling (immersion or direct-to-chip) systems that maintain optimal ASIC operating temperatures while minimizing energy overhead.' },
    { icon: '📡', title: 'Monitoring & Maintenance', desc: 'Every machine is monitored 24/7 via dashboards tracking hashrate, temperature, power draw, and error rates. Maintenance schedules are automated. Anomalies trigger alerts for immediate response.' }
  ];

  return `
  <section class="page-hero" id="hiw-hero">
    <div class="container">
      <h1 class="page-hero-title">How It Works</h1>
      <p class="page-hero-sub">From site selection to operational monitoring — here's what goes into an industrial mining setup.</p>
    </div>
  </section>

  <section class="hiw-steps" id="hiw-steps">
    <div class="container">
      ${steps.map((s, i) => `
        <div class="hiw-block${i % 2 === 1 ? ' alt' : ''}" id="hiw-step-${i+1}">
          <div class="hiw-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="hiw-body">
            <span class="hiw-icon">${s.icon}</span>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="hiw-diagram" id="hiw-diagram">
    <div class="container">
      <h2 class="section-title">System Architecture Overview</h2>
      <div class="diagram-box">
        <div class="diagram-node">⚡ Power<br><span>Grid / Solar</span></div>
        <div class="diagram-arrow">→</div>
        <div class="diagram-node">🖥️ ASICs<br><span>Mining Hardware</span></div>
        <div class="diagram-arrow">→</div>
        <div class="diagram-node">❄️ Cooling<br><span>Liquid System</span></div>
        <div class="diagram-arrow">→</div>
        <div class="diagram-node">📡 Monitor<br><span>24/7 Dashboard</span></div>
        <div class="diagram-arrow">→</div>
        <div class="diagram-node">₿ Output<br><span>Hash to Pool</span></div>
      </div>
    </div>
  </section>`;
}

function renderEducation() {
  const articles = [
    { id: 'edu-basics', title: 'Basics of Industrial Bitcoin Mining', desc: 'What makes industrial mining different from hobby mining? Scale, efficiency, and economics. An introduction for technically curious partners.', tag: 'Fundamentals' },
    { id: 'edu-risks', title: 'Risks and Volatility of Bitcoin Mining', desc: 'Bitcoin mining profitability depends on BTC price, network difficulty, energy costs, and hardware depreciation. All of these are volatile. Understanding this is non-negotiable.', tag: 'Risk' },
    { id: 'edu-india', title: 'Regulatory Considerations in India', desc: 'India\'s stance on cryptocurrency is evolving. What you need to know about TDS on VDA, GST implications, and operational compliance for mining entities.', tag: 'Compliance' },
    { id: 'edu-economics', title: 'Mining Economics: Break-Even Analysis', desc: 'How to think about cost-per-hash, electricity as opex, hardware as depreciating capex, and when (if ever) a mining operation reaches profitability.', tag: 'Economics' }
  ];

  return `
  <section class="page-hero" id="edu-hero">
    <div class="container">
      <h1 class="page-hero-title">Education</h1>
      <p class="page-hero-sub">Resources for understanding industrial mining — risks, economics, and the technology.</p>
    </div>
  </section>

  <section class="edu-section" id="edu-articles">
    <div class="container">
      <div class="edu-grid">
        ${articles.map(a => `
          <div class="edu-card" id="${a.id}">
            <span class="edu-tag">${a.tag}</span>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
            <span class="edu-link">Read article →</span>
          </div>
        `).join('')}
      </div>
      <p class="edu-note">Full articles coming soon. These topics reflect our commitment to honest, transparent education for anyone considering involvement in Bitcoin mining.</p>
    </div>
  </section>`;
}

function renderServices() {
  const services = [
    { id: 'svc-planning', title: 'Mining Infrastructure Planning', desc: 'End-to-end design for new mining operations — from feasibility study and site assessment to rack layout and power budgeting.', items: ['Site evaluation & selection', 'Power and cooling design', 'Hardware specification', 'Capex/opex modeling', 'Timeline and phasing'] },
    { id: 'svc-monitoring', title: 'Monitoring Setup & Operations', desc: 'We deploy and configure monitoring systems for existing mining setups or new builds.', items: ['Real-time hashrate dashboards', 'Temperature and power monitoring', 'Automated alert systems', 'Maintenance scheduling', 'Performance reporting'] },
    { id: 'svc-compliance', title: 'Risk & Compliance Briefing', desc: 'Structured overview of regulatory, financial, and operational risks for mining stakeholders.', items: ['Indian crypto regulatory landscape', 'Tax (TDS on VDA) considerations', 'Operational risk assessment', 'Insurance and liability overview', 'Documentation and compliance audit'] }
  ];

  return `
  <section class="page-hero" id="svc-hero">
    <div class="container">
      <h1 class="page-hero-title">Services</h1>
      <p class="page-hero-sub">Consulting and implementation for serious mining operations.</p>
    </div>
  </section>

  <section class="svc-section" id="svc-list">
    <div class="container">
      ${services.map(s => `
        <div class="svc-card" id="${s.id}">
          <div class="svc-header">
            <h2>${s.title}</h2>
            <p>${s.desc}</p>
          </div>
          <ul class="svc-items">
            ${s.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="svc-cta" id="svc-cta">
    <div class="container">
      <h2>Ready to discuss your mining project?</h2>
      <p>We work with partners who approach mining as serious infrastructure — not speculation.</p>
      <a href="mailto:contact@rudrahash.com" class="btn btn-primary btn-lg">Contact RudraHash</a>
    </div>
  </section>`;
}

function renderRisks() {
  return `
  <section class="page-hero" id="risks-hero">
    <div class="container">
      <h1 class="page-hero-title">Risks & Compliance</h1>
      <p class="page-hero-sub">Honest disclosures about what can go wrong and what you should know.</p>
    </div>
  </section>

  <section class="risks-section" id="risks-content">
    <div class="container">
      <div class="risk-banner" id="risk-banner">
        <h2>⚠️ Bitcoin Mining Is Risky</h2>
        <p>Mining is not a guaranteed income source. Profitability depends on volatile factors including Bitcoin price, network difficulty, energy costs, and hardware lifespan. Past performance — of mining or of Bitcoin — does not predict future results.</p>
      </div>

      <div class="risk-grid">
        <div class="risk-card" id="risk-volatility">
          <h3>📉 Market Volatility</h3>
          <p>Bitcoin's price can drop 30–80% in bear markets. Mining revenue is directly tied to BTC price — a sustained downturn can make operations unprofitable. There is no floor.</p>
        </div>
        <div class="risk-card" id="risk-difficulty">
          <h3>📈 Difficulty Adjustment</h3>
          <p>As more miners join the network, mining difficulty increases, reducing individual yield. Your share of block rewards shrinks as global hashrate grows.</p>
        </div>
        <div class="risk-card" id="risk-hardware">
          <h3>🖥️ Hardware Depreciation</h3>
          <p>ASIC miners lose value rapidly. Next-generation machines can make current hardware obsolete within 18–24 months. Hardware is capex, not an appreciating asset.</p>
        </div>
        <div class="risk-card" id="risk-energy">
          <h3>⚡ Energy Costs</h3>
          <p>Electricity is the largest operational expense. Power tariff increases, supply disruptions, or regulatory changes can eliminate margins without warning.</p>
        </div>
        <div class="risk-card" id="risk-regulatory">
          <h3>📋 Regulatory Uncertainty</h3>
          <p>India's cryptocurrency regulations are evolving. Changes in tax policy (currently 30% on VDA gains + 1% TDS), GST treatment, or outright restrictions could materially impact operations.</p>
        </div>
        <div class="risk-card" id="risk-operational">
          <h3>🔧 Operational Risk</h3>
          <p>Equipment failure, cooling system breakdown, internet outages, theft, fire, flooding — industrial operations carry physical and logistical risks that require insurance and contingency planning.</p>
        </div>
      </div>

      <div class="compliance-box" id="compliance">
        <h2>Compliance Considerations</h2>
        <ul>
          <li><strong>Not Investment Advice:</strong> Nothing on this website, in our consultations, or in our reports constitutes investment advice. RudraHash is an infrastructure and consulting company — not a financial advisor, investment scheme, or fund manager.</li>
          <li><strong>No Guaranteed Returns:</strong> We do not promise, project, or guarantee any returns from mining. Any financial projections used in feasibility studies are estimates based on assumptions that may not hold.</li>
          <li><strong>Tax Responsibility:</strong> Mining income is subject to applicable taxes including TDS on VDA transfer, income tax, and potentially GST. Partners and clients are responsible for their own tax compliance.</li>
          <li><strong>Regulatory Changes:</strong> Future regulatory actions by SEBI, RBI, or other bodies may restrict, regulate, or prohibit aspects of cryptocurrency mining in India.</li>
          <li><strong>Do Your Own Research:</strong> Before entering any mining arrangement, consult with qualified financial, tax, and legal advisors. Understand what you are getting into.</li>
        </ul>
      </div>
    </div>
  </section>`;
}

/* ─── Navigation ─── */
function renderNav(page) {
  const links = [
    { hash: '', label: 'Home' },
    { hash: 'how-it-works', label: 'How It Works' },
    { hash: 'education', label: 'Education' },
    { hash: 'services', label: 'Services' },
    { hash: 'risks', label: 'Risks & Compliance' }
  ];

  return `
  <nav class="nav" id="main-nav">
    <div class="nav-inner">
      <a href="#" class="nav-logo" id="nav-logo">
        <span class="nav-logo-mark">⬡</span>
        <span class="nav-logo-text">RudraHash</span>
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="nav-links">
        ${links.map(l => `
          <a href="#${l.hash}" class="nav-link${page === l.hash ? ' active' : ''}" id="nav-${l.hash || 'home'}">${l.label}</a>
        `).join('')}
      </div>
      <a href="mailto:contact@rudrahash.com" class="btn btn-primary btn-sm nav-cta" id="nav-cta">Contact Us</a>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="nav-logo-mark" style="font-size:1.2rem">⬡</span>
          <span class="footer-name">RudraHash</span>
          <p class="footer-tagline">Industrial Bitcoin mining infrastructure. No hype.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <a href="#">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#education">Education</a>
          <a href="#services">Services</a>
        </div>
        <div class="footer-col">
          <h4>Important</h4>
          <a href="#risks">Risks & Compliance</a>
          <a href="mailto:contact@rudrahash.com">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 RudraHash. All rights reserved.</p>
        <p class="footer-disclaimer">RudraHash does not provide investment advice. Mining involves significant risk. See our <a href="#risks">Risks & Compliance</a> page.</p>
      </div>
    </div>
  </footer>`;
}

/* ─── Routing ─── */
const routes = {
  '':             renderHome,
  'how-it-works': renderHowItWorks,
  'education':    renderEducation,
  'services':     renderServices,
  'risks':        renderRisks
};

function getPage() {
  const hash = window.location.hash.replace('#', '');
  return routes[hash] ? hash : '';
}

function render() {
  const page = getPage();
  const app = document.getElementById('app');
  app.innerHTML = renderNav(page) + routes[page]() + renderFooter();

  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links?.classList.remove('open');
      toggle?.classList.remove('open');
    });
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', render);
render();

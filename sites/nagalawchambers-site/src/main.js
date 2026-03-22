import './style.css';

/* ═══════════════════════════════════════
   NagaLawChambers — Page Renderers
   ═══════════════════════════════════════ */

function renderHome() {
  return `
  <section class="hero" id="hero">
    <div class="hero-inner">
      <h1 class="hero-title">Advocate S. Nagendra Naik</h1>
      <p class="hero-subtitle">Land, Revenue & Property Law in Andhra Pradesh</p>
      <p class="hero-desc">Resolving land records, revenue disputes, and property documentation with careful preparation and courtroom experience.</p>
      <div class="hero-cta">
        <a href="https://wa.me/919XXXXXXXXX" class="btn btn-primary" id="cta-consult" target="_blank" rel="noopener">📞 Book a Consultation</a>
        <a href="tel:+919XXXXXXXXX" class="btn btn-outline" id="cta-call">Call Now</a>
      </div>
    </div>
  </section>

  <section class="about-brief" id="about-brief">
    <div class="container">
      <div class="about-grid">
        <div class="about-stat">
          <span class="stat-value">15+</span>
          <span class="stat-label">Years of Practice</span>
        </div>
        <div class="about-stat">
          <span class="stat-value">Anantapur</span>
          <span class="stat-label">District Court</span>
        </div>
        <div class="about-stat">
          <span class="stat-value">AP Bar</span>
          <span class="stat-label">Registered Advocate</span>
        </div>
      </div>
    </div>
  </section>

  <section class="practice-areas" id="practice-areas">
    <div class="container">
      <h2 class="section-title">Practice Areas</h2>
      <p class="section-sub">We help clients navigate complex land and property issues with clarity and diligence.</p>
      <div class="pa-grid">
        <div class="pa-card" id="pa-revenue">
          <div class="pa-icon">📜</div>
          <h3>Land Revenue</h3>
          <p>We help you with:</p>
          <ul>
            <li>ROR (Record of Rights) corrections & appeals</li>
            <li>Mutation proceedings</li>
            <li>Revenue court disputes</li>
            <li>Land classification and reclassification issues</li>
          </ul>
          <div class="pa-who">
            <strong>Who this is for:</strong> Farmers, landowners, families with ancestral land disputes
          </div>
        </div>
        <div class="pa-card" id="pa-civil">
          <div class="pa-icon">⚖️</div>
          <h3>Civil Litigation</h3>
          <p>We help you with:</p>
          <ul>
            <li>Partition suits among family members</li>
            <li>Injunction and restraining orders</li>
            <li>Specific performance of contracts</li>
            <li>Title disputes and ownership claims</li>
          </ul>
          <div class="pa-who">
            <strong>Who this is for:</strong> Homebuyers, joint families, NRIs with property in Andhra Pradesh
          </div>
        </div>
        <div class="pa-card" id="pa-docs">
          <div class="pa-icon">📋</div>
          <h3>Property Documentation</h3>
          <p>We help you with:</p>
          <ul>
            <li>Sale deed drafting and registration guidance</li>
            <li>Gift deeds and settlement deeds</li>
            <li>Will drafting and probate</li>
            <li>Legal opinions for property transactions</li>
          </ul>
          <div class="pa-who">
            <strong>Who this is for:</strong> Buyers, sellers, NRIs, families planning succession
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="case-highlights" id="case-highlights">
    <div class="container">
      <h2 class="section-title">Case Highlights</h2>
      <p class="section-sub">Representative matters handled. Every case depends on its own facts.</p>
      <div class="case-grid">
        <div class="case-card" id="case-1">
          <div class="case-label problem">Problem</div>
          <p>Family denied access to ancestral agricultural land for over 10 years due to fraudulent revenue records.</p>
          <div class="case-label action">Approach</div>
          <p>Filed ROR appeal, reconstructed historical revenue records from tahasildar office archives, and argued before the Revenue Divisional Officer.</p>
          <div class="case-label result">Outcome</div>
          <p>Full ownership restored with corrected revenue records in the family's name.</p>
        </div>
        <div class="case-card" id="case-2">
          <div class="case-label problem">Problem</div>
          <p>NRI client discovered unauthorized construction on their registered plot during a visit to India.</p>
          <div class="case-label action">Approach</div>
          <p>Obtained emergency injunction to halt construction, filed civil suit for removal and damages, and coordinated with local revenue authorities.</p>
          <div class="case-label result">Outcome</div>
          <p>Injunction granted within 72 hours. Case settled with restoration of vacant possession.</p>
        </div>
        <div class="case-card" id="case-3">
          <div class="case-label problem">Problem</div>
          <p>Joint family dispute over partition of agricultural and residential properties spanning three generations.</p>
          <div class="case-label action">Approach</div>
          <p>Prepared comprehensive genealogy and property inventory, filed partition suit with detailed schedules, and facilitated mediation between family branches.</p>
          <div class="case-label result">Outcome</div>
          <p>Amicable partition achieved through court-annexed mediation, avoiding prolonged litigation.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="home-cta" id="home-cta">
    <div class="container">
      <h2>Need help with a land or property matter?</h2>
      <p>Contact us to discuss your case. Initial consultations help us understand your situation and advise on the best way forward.</p>
      <a href="#about-contact" class="btn btn-primary btn-lg">Get in Touch</a>
    </div>
  </section>`;
}

function renderPracticeAreas() {
  return `
  <section class="page-hero" id="pa-hero">
    <div class="container">
      <h1 class="page-hero-title">Practice Areas</h1>
      <p class="page-hero-sub">Focused expertise in land, revenue, and property law across Andhra Pradesh.</p>
    </div>
  </section>

  <section class="pa-detail" id="pa-detail-revenue">
    <div class="container">
      <h2>Land Revenue Disputes</h2>
      <div class="pa-detail-content">
        <p>Land revenue disputes are among the most common issues faced by landowners in Andhra Pradesh. Whether it's incorrect entries in the Record of Rights (ROR), disputed mutations, or classification issues, these matters require deep knowledge of revenue law and tenacious follow-through with administrative authorities.</p>
        <h3>What we handle:</h3>
        <ul>
          <li>Appeals against incorrect ROR entries before Revenue Divisional Officers and the Board of Revenue</li>
          <li>Mutation proceedings — ensuring rightful succession is reflected in land records</li>
          <li>Disputes involving government land assignments (D-form patta)</li>
          <li>Reclassification of land (agricultural to non-agricultural and vice versa)</li>
          <li>Encroachment disputes with government or private parties</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="pa-detail alt" id="pa-detail-property">
    <div class="container">
      <h2>Property Disputes & Civil Litigation</h2>
      <div class="pa-detail-content">
        <p>Property disputes often involve deeply personal and financially significant matters. We approach each case with thorough preparation, aiming for effective resolution — whether through negotiation, mediation, or court proceedings.</p>
        <h3>What we handle:</h3>
        <ul>
          <li>Partition suits among co-owners and joint family members</li>
          <li>Title disputes and suits for declaration of ownership</li>
          <li>Injunction and restraining orders to protect possession</li>
          <li>Specific performance — enforcing sale agreements</li>
          <li>Disputes arising from unregistered or informal agreements</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="pa-detail" id="pa-detail-docs">
    <div class="container">
      <h2>Property Documentation & Due Diligence</h2>
      <div class="pa-detail-content">
        <p>Proper documentation is the foundation of secure property ownership. We help clients ensure that transactions are legally sound and properly recorded.</p>
        <h3>What we handle:</h3>
        <ul>
          <li>Drafting and reviewing sale deeds, gift deeds, and settlement deeds</li>
          <li>Will drafting and succession planning</li>
          <li>Legal opinions on title and encumbrance for property transactions</li>
          <li>Due diligence reports for property purchases</li>
          <li>Guidance on registration procedures and stamp duty</li>
        </ul>
      </div>
    </div>
  </section>`;
}

function renderCaseStudies() {
  const cases = [
    {
      id: 'cs-1',
      problem: 'Family denied access to ancestral agricultural land for 10+ years due to fraudulent revenue records created by a distant relative.',
      approach: 'Filed a comprehensive ROR appeal with the Revenue Divisional Officer. Reconstructed historical revenue records from tahasildar archives going back three generations. Presented genealogical evidence and cross-referenced survey records.',
      outcome: 'Full ownership restored. Revenue records corrected to reflect the rightful owners.'
    },
    {
      id: 'cs-2',
      problem: 'NRI client discovered unauthorized occupation and construction on their registered residential plot in Anantapur district.',
      approach: 'Obtained emergency injunction within days to halt further construction. Filed civil suit for removal of encroachment and damages. Coordinated with local police and revenue authorities for enforcement.',
      outcome: 'Injunction granted within 72 hours. Unauthorized construction removed and vacant possession restored to the rightful owner.'
    },
    {
      id: 'cs-3',
      problem: 'Three-generation joint family dispute over partition of 18 acres of agricultural land and two residential properties.',
      approach: 'Prepared detailed genealogy, property inventory, and schedule of assets. Filed partition suit with clear delineation of shares. Facilitated mediation sessions between three family branches through the court-annexed mediation center.',
      outcome: 'Amicable partition achieved through mediation, saving years of potential litigation and preserving family relationships.'
    },
    {
      id: 'cs-4',
      problem: 'Client purchased property based on a sale deed that turned out to have a defective chain of title — previous sale was challenged by a third party.',
      approach: 'Conducted thorough title investigation tracing ownership back 50 years. Filed suit for declaration of title, presenting documentary evidence including certified copies of all prior registration documents.',
      outcome: 'Court declared client\'s title valid. The defect in the previous transaction was found to be curable and did not affect the subsequent bona fide purchase.'
    }
  ];

  return `
  <section class="page-hero" id="cs-hero">
    <div class="container">
      <h1 class="page-hero-title">Case Studies</h1>
      <p class="page-hero-sub">Representative matters we have handled. Every case is unique and outcomes depend on individual facts.</p>
    </div>
  </section>

  <section class="case-studies" id="case-studies-list">
    <div class="container">
      ${cases.map((c, i) => `
        <div class="cs-card" id="${c.id}">
          <div class="cs-number">${String(i + 1).padStart(2, '0')}</div>
          <div class="cs-body">
            <div class="cs-section">
              <span class="cs-tag problem">Problem</span>
              <p>${c.problem}</p>
            </div>
            <div class="cs-section">
              <span class="cs-tag approach">Approach</span>
              <p>${c.approach}</p>
            </div>
            <div class="cs-section">
              <span class="cs-tag outcome">Outcome</span>
              <p>${c.outcome}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="cs-note" id="cs-note">
    <div class="container">
      <p><strong>Note:</strong> The above are representative examples. Identifying details have been changed to protect client confidentiality. Past results do not guarantee similar outcomes. Each case depends on its own facts and law.</p>
    </div>
  </section>`;
}

function renderAboutContact() {
  return `
  <section class="page-hero" id="about-hero">
    <div class="container">
      <h1 class="page-hero-title">About & Contact</h1>
      <p class="page-hero-sub">Learn about our practice and get in touch.</p>
    </div>
  </section>

  <section class="about-section" id="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>About the Advocate</h2>
          <p>Advocate S. Nagendra Naik has been practicing law in Andhra Pradesh for over 15 years, with a focused practice in land revenue, property disputes, and civil litigation. Based at the District Court in Anantapur, he has represented farmers, NRIs, homebuyers, and families in matters ranging from ROR corrections to complex partition suits.</p>
          <p>His approach emphasizes thorough preparation, honest assessment of case merits, and persistent follow-through with both courts and administrative authorities. He believes in keeping clients informed at every stage and providing clear, practical advice.</p>
          <h3>Professional Details</h3>
          <ul>
            <li>Enrolled with the Bar Council of Andhra Pradesh</li>
            <li>Primary practice at District Court, Anantapur</li>
            <li>Appears before Revenue Divisional Officers. Board of Revenue, and High Court of AP</li>
            <li>Member, Anantapur District Bar Association</li>
          </ul>
        </div>
        <div class="contact-box" id="contact-box">
          <h3>Contact Information</h3>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div>
              <strong>Chambers Address</strong>
              <p>Near District Court Complex,<br>Anantapur, Andhra Pradesh 515001</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p><a href="tel:+919XXXXXXXXX">+91 9XXX XXX XXX</a></p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💬</span>
            <div>
              <strong>WhatsApp</strong>
              <p><a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener">Send a message</a></p>
            </div>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:contact@nagalawchambers.com">contact@nagalawchambers.com</a></p>
            </div>
          </div>
          <div class="contact-map" id="contact-map">
            <div class="map-placeholder">
              <p>📍 Map placeholder — Anantapur District Court area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderDisclaimer() {
  return `
  <section class="page-hero" id="disclaimer-hero">
    <div class="container">
      <h1 class="page-hero-title">Legal Disclaimer</h1>
      <p class="page-hero-sub">Important information about this website and our services.</p>
    </div>
  </section>

  <section class="disclaimer-section" id="disclaimer-content">
    <div class="container">
      <div class="disclaimer-box">
        <h2>General Disclaimer</h2>
        <p>The information provided on this website is for general informational purposes only. Nothing on this site constitutes legal advice, and no attorney-client relationship is created by your use of this website or by contacting us through the information provided here.</p>

        <h2>No Guarantee of Outcomes</h2>
        <p>Past results described on this website do not guarantee similar outcomes in your case. Every legal matter depends on its own unique facts, circumstances, and applicable law. The outcome of any particular case cannot be predicted based on previous results.</p>

        <h2>Professional Responsibility</h2>
        <p>Advocate S. Nagendra Naik is enrolled with the Bar Council of Andhra Pradesh and practices in accordance with the Advocates Act, 1961, and the Bar Council of India Rules. This website is meant to provide information about the advocate's practice areas and is not an advertisement soliciting work.</p>

        <h2>Confidentiality</h2>
        <p>Sending information through this website, email, or WhatsApp does not establish an attorney-client relationship. Please do not send confidential or sensitive case information until a formal engagement is confirmed.</p>

        <h2>External Links</h2>
        <p>This website may contain links to external websites. We are not responsible for the content, privacy policies, or practices of any third-party websites.</p>

        <h2>Updates</h2>
        <p>This disclaimer may be updated from time to time. The date of last update will be noted below.</p>
        <p class="disclaimer-date"><em>Last updated: March 2026</em></p>
      </div>
    </div>
  </section>`;
}

/* ─── Navigation ─── */
function renderNav(page) {
  const links = [
    { hash: '', label: 'Home' },
    { hash: 'practice-areas', label: 'Practice Areas' },
    { hash: 'case-studies', label: 'Case Studies' },
    { hash: 'about-contact', label: 'About & Contact' },
    { hash: 'disclaimer', label: 'Disclaimer' }
  ];

  return `
  <nav class="nav" id="main-nav">
    <div class="nav-inner">
      <a href="#" class="nav-logo" id="nav-logo">
        <span class="nav-logo-icon">⚖️</span>
        <span class="nav-logo-text">NagaLawChambers</span>
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="nav-links">
        ${links.map(l => `
          <a href="#${l.hash}" class="nav-link${page === l.hash ? ' active' : ''}" id="nav-${l.hash || 'home'}">${l.label}</a>
        `).join('')}
      </div>
      <a href="https://wa.me/919XXXXXXXXX" class="btn btn-primary btn-sm nav-cta" id="nav-cta" target="_blank" rel="noopener">Consult Now</a>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="footer-logo">⚖️ NagaLawChambers</span>
          <p class="footer-tagline">Land, Revenue & Property Law — Andhra Pradesh</p>
          <p class="footer-reg">Enrolled, Bar Council of Andhra Pradesh</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#practice-areas">Practice Areas</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#about-contact">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Chambers</h4>
          <p>Near District Court Complex,<br>Anantapur, AP 515001</p>
          <p style="margin-top: 8px;">📞 <a href="tel:+919XXXXXXXXX">+91 9XXX XXX XXX</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 NagaLawChambers. All rights reserved.</p>
        <a href="#disclaimer">Disclaimer</a>
      </div>
    </div>
  </footer>`;
}

/* ─── Routing ─── */
const routes = {
  '':               renderHome,
  'practice-areas': renderPracticeAreas,
  'case-studies':   renderCaseStudies,
  'about-contact':  renderAboutContact,
  'disclaimer':     renderDisclaimer
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

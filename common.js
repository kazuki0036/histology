// フッターを挿入
function insertFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <p class="dept">神戸常盤大学 医療検査学科</p>
    <p>組織学実習資料 ／ Histology Reference</p>
  `;
  document.querySelector('.container').appendChild(footer);
}

// アコーディオン共通ロジック
function buildAccordion(items, tabKey) {
  const openOrgans = {}, openSections = {};

  function toggleOrgan(key) { openOrgans[key] = !openOrgans[key]; render(); }
  function toggleSection(key) { openSections[key] = !openSections[key]; render(); }
  window.toggleOrgan = toggleOrgan;
  window.toggleSection = toggleSection;

  function render() {
    let html = '';
    items.forEach((organ, oi) => {
      const oKey = `${tabKey}-${oi}`, isOpen = !!openOrgans[oKey];
      html += `
        <div class="organ-card ${isOpen ? 'open' : ''}">
          <button class="organ-header ${isOpen ? 'open' : ''}" onclick="toggleOrgan('${oKey}')">
            <div>
              <span class="organ-name">${organ.organ}</span>
              <span class="organ-en">${organ.en}</span>
            </div>
            <span class="organ-arrow ${isOpen ? 'open' : ''}">▾</span>
          </button>
          <div class="organ-body ${isOpen ? 'open' : ''}">
      `;
      organ.sections.forEach((sec, si) => {
        const sKey = `${oKey}-${si}`, secOpen = !!openSections[sKey];
        html += `
          <div class="section-card ${secOpen ? 'open' : ''}">
            <button class="section-header ${secOpen ? 'open' : ''}" onclick="toggleSection('${sKey}')">
              <span class="section-title ${secOpen ? 'open' : ''}">${sec.title}</span>
              <span class="section-arrow ${secOpen ? 'open' : ''}">▶</span>
            </button>
            <ul class="section-body ${secOpen ? 'open' : ''}">
              ${sec.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        `;
      });
      html += `</div></div>`;
    });
    document.getElementById('content').innerHTML = html;
  }

  render();
}

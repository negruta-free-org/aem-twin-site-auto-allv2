export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'score-grid';
  rows.forEach((row) => {
    const [label, before, after] = [...row.children].map((c) => c.textContent.trim());
    const card = document.createElement('div');
    card.className = 'score-card-item';
    card.innerHTML = `<div class="score-label">${label}</div><div class="score-values"><span class="score-before">${before}</span> → <span class="score-after">${after}</span></div>`;
    grid.appendChild(card);
  });
  block.appendChild(grid);
}

export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  const table = document.createElement('table');
  table.className = 'error-table';
  const categories = { docs_gap: '#f0c40f', product_issue: '#cf222e', permission_gap: '#e36209', env_issue: '#0969da' };
  rows.forEach((row) => {
    const [cat, action, fix] = [...row.children].map((c) => c.textContent.trim());
    const tr = document.createElement('tr');
    const color = categories[cat] || '#666';
    tr.innerHTML = `<td><span class="badge" style="background:${color};color:#fff;padding:2px 8px;border-radius:4px">${cat}</span></td><td>${action}</td><td>${fix}</td>`;
    table.appendChild(tr);
  });
  block.appendChild(table);
}

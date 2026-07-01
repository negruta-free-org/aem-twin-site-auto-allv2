export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';
  const ol = document.createElement('ol');
  ol.className = 'timeline-list';
  rows.forEach((row) => {
    const [status, label, detail] = [...row.children].map((c) => c.textContent.trim());
    const li = document.createElement('li');
    li.className = `timeline-item timeline-${status.toLowerCase()}`;
    li.innerHTML = `<span class="timeline-label">${label}</span><span class="timeline-detail">${detail}</span>`;
    ol.appendChild(li);
  });
  block.appendChild(ol);
}

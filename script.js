const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(link => {
  const href = link.getAttribute('href');
  if ((current === '' && href === 'index.html') || href === current) link.classList.add('active');
});

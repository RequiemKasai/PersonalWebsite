function navigate(direction) {
  const pages = ['index.html', 'projects.html', 'About.html'];
  const current = window.location.pathname.split('/').pop();
  const idx = pages.indexOf(current);

  let newIdx;
  if (direction === 'left') {
    newIdx = (idx - 1 + pages.length) % pages.length;
  } else {
    newIdx = (idx + 1) % pages.length;
  }
  window.location.href = pages[newIdx];
}

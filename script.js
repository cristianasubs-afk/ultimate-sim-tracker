function saveProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const progress = {};
  checkboxes.forEach(cb => {
    progress[cb.dataset.id] = cb.checked;
  });
  localStorage.setItem('simTrackerProgress', JSON.stringify(progress));
  alert('Progress saved!');
}

function loadProgress() {
  const saved = localStorage.getItem('simTrackerProgress');
  if (!saved) return;
  const progress = JSON.parse(saved);
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => {
    cb.checked = progress[cb.dataset.id] || false;
  });
  alert('Progress loaded!');
}

window.onload = loadProgress;
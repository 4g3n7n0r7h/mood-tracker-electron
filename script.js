// Get elements
const moodInput = document.getElementById('mood');
const reflectionInput = document.getElementById('reflection');
const saveBtn = document.getElementById('saveBtn');
const logList = document.getElementById('logList');
const darkModeToggle = document.getElementById('darkModeToggle');

// Load logs and dark mode on page load
window.addEventListener('DOMContentLoaded', () => {
  loadLogs();
  const isDark = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark', isDark);
  darkModeToggle.checked = isDark;
});

// Save button handler
saveBtn.addEventListener('click', () => {
  const mood = moodInput.value;
  const reflection = reflectionInput.value.trim();

  if (reflection === '') {
    alert('Please write a reflection.');
    return;
  }

  const now = new Date().toLocaleString();
  const entry = { mood, reflection, time: now };

  const logs = getLogs();
  logs.unshift(entry); // Add new at the top
  localStorage.setItem('moodLogs', JSON.stringify(logs));

  renderLogs(); // Refresh UI
  reflectionInput.value = '';
});

// Toggle dark mode
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', darkModeToggle.checked);
});

// Get logs from localStorage
function getLogs() {
  const logs = localStorage.getItem('moodLogs');
  return logs ? JSON.parse(logs) : [];
}

// Load and render all logs
function loadLogs() {
  renderLogs();
}

// Render logs in the UI
function renderLogs() {
  const logs = getLogs();
  logList.innerHTML = '';
  logs.forEach((entry, index) => {
    addLogToList(entry, index);
  });
}

// Add a single entry to the list
function addLogToList(entry, index) {
  const listItem = document.createElement('li');
  listItem.classList.add('fade-in'); // 👈 fade-in effect
  listItem.textContent = `${entry.time} - ${entry.mood}: ${entry.reflection} `;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.addEventListener('click', () => {
    deleteLog(index);
  });

  listItem.appendChild(deleteBtn);
  logList.appendChild(listItem);
}

// Delete a log immediately
function deleteLog(index) {
  const logs = getLogs();
  logs.splice(index, 1);
  localStorage.setItem('moodLogs', JSON.stringify(logs));
  renderLogs();
}
// tabs
function changeTab(tabId) {
  // Hide all content divs
  document
    .querySelectorAll(".content")
    .forEach((content) => content.classList.remove("active"));

  // Show the selected content
  document.getElementById(tabId).classList.add("active");
}
// ===================== //
function changeSecTab(tabId) {
  // Hide all content divs
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("tab-active"));

  // Show the selected content
  document.getElementById(tabId).classList.add("tab-active");
}
// ========================
function toggleCalendar() {
  const calendarContainer = document.getElementById("calendar-container");
  calendarContainer.style.display =
    calendarContainer.style.display === "none" ? "block" : "none";
}

// calendar
let currentYear = 2024;
let currentMonth = 1; // January is 0, February is 1, ..., December is 11

function generateCalendar(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const calendarBody = document.getElementById("calendar-body");
  calendarBody.innerHTML = "";

  // Create header row
  const headerRow = document.createElement("tr");
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  calendarBody.appendChild(headerRow);

  // Create days
  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (i === 0 && j < firstDayOfMonth) {
        cell.textContent = "";
      } else if (date > daysInMonth) {
        break;
      } else {
        cell.textContent = date;
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }

  // Update current month and year display
  const monthSelector = document.getElementById("month-selector");
  monthSelector.value = month;
  document.getElementById("current-year").textContent = year;
}

function nextMonth() {
  currentMonth = (currentMonth + 1) % 12;
  generateCalendar(currentYear, currentMonth);
}

function previousMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12;
  generateCalendar(currentYear, currentMonth);
}

function nextYear() {
  currentYear++;
  generateCalendar(currentYear, currentMonth);
}

function previousYear() {
  currentYear--;
  generateCalendar(currentYear, currentMonth);
}

function changeMonth() {
  const monthSelector = document.getElementById("month-selector");
  currentMonth = parseInt(monthSelector.value);
  // mon.innerHTML = monthSelector.textContent;
  generateCalendar(currentYear, currentMonth);
}

// Initial calendar generation
generateCalendar(currentYear, currentMonth);
// ======================

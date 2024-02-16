// tabs
function changeTab(tabId) {
  // Hide all content divs
  document
    .querySelectorAll(".content")
    .forEach((content) => content.classList.remove("active"));

  // Show the selected content
  document.getElementById(tabId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const headerMenuToggle = document.getElementById("mobile-menu-toggle"),
    headerMenu = document.getElementById("header-menu");

  const searchContainer = document.getElementById("search-container"),
    toggleSearch = document.getElementById("toggle-search");

  if (headerMenuToggle && headerMenu) {
    headerMenuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (headerMenu.classList.contains("open")) {
        headerMenu.classList.remove("open");
        headerMenuToggle.classList.remove("open");
      } else {
        headerMenu.classList.add("open");
        headerMenuToggle.classList.add("open");
      }
    });
  }

  if (searchContainer && toggleSearch) {
    toggleSearch.addEventListener("click", (e) => {
      e.preventDefault();

      if (searchContainer.classList.contains("open")) {
        searchContainer.classList.remove("open");
      } else {
        searchContainer.classList.add("open");
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (searchContainer && toggleSearch)
      if (
        !searchContainer.contains(e.target as Node) &&
        !toggleSearch.contains(e.target as Node)
      ) {
        searchContainer.classList.remove("open");
      }
  });
});

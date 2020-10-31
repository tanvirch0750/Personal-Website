// ///////////////////////////////
// ABOUT SECTION TABS
(() => {
  const aboutSection = document.querySelector(".about-section");
  const tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item")
    && !e.target.classList.contains("active")){
      const target = e.target.getAttribute("data-target");

      // deactivate existing active 'tab-item
      tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

      // activate new 'tab-item
      e.target.classList.add("active", "outer-shadow");

      // Deactivate existing 'tab-content
      aboutSection.querySelector(".tab-content.active").classList.remove("active");

      // activate tab content
      aboutSection.querySelector(target).classList.add("active");

    }
  })
})();
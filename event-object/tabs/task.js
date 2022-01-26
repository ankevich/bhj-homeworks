let tabs = Array.from(document.getElementsByClassName("tab"));
let tabsContent = Array.from(document.getElementsByClassName("tab__content"));

let hideAllTabsAndContent = () => {
  tabs.map((tab) => {
    tab.classList.remove("tab_active");
  });
  tabsContent.map((tab) => {
    tab.classList.remove("tab__content_active");
  });
};

tabs.map((tab, currentTabIndex) => {
  tab.onclick = () => {
    hideAllTabsAndContent();
    tab.classList.add("tab_active");
    tabsContent[currentTabIndex].classList.add("tab__content_active");
  };
});

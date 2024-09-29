document.addEventListener('DOMContentLoaded', () => {
console.log('click');

 function removeActiveClasses(elements, className) {
    for (el of elements) {
      el.classList.remove(className);
    };
  };

  const tabsNavTeam = document.querySelector('.team__nav'),
        tabsContentTeam = document.querySelector('.team__content');

  function clickOnTeamTabHandler(target) {
    
    
    removeActiveClasses(tabsNavTeam.children, 'active');
    removeActiveClasses(tabsContentTeam.children, 'active');
    console.log(tabsContentTeam.children);
    target.classList.add('active');
    const contentItemTeam = tabsContentTeam.querySelector(`[data-content="${target.dataset.id}"]`);
    contentItemTeam.classList.add('active');
  };

  tabsNavTeam?.addEventListener('click', (e) => {
    if (e.target.classList.contains('team__nav-item')) {
      clickOnTeamTabHandler(e.target);
    }
  });
})
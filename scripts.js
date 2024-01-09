// JavaScript to handle scroll and show/hide the arrow
window.addEventListener("scroll", function () {
    var scrollArrow = document.querySelector(".scroll-arrow");
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.clientHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
  
    if ((fullHeight - windowHeight - scrollPosition) <= 0) {
      scrollArrow.classList.add("show-arrow");
    } else {
      scrollArrow.classList.remove("show-arrow");
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-links a');
    const portfolioItems = document.querySelectorAll('.portfolio-box');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

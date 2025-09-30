// Base JS: navigation toggle and blog search placeholder
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var searchInput = document.getElementById('blog-search');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      var q = (e.target.value || '').toLowerCase();
      var posts = document.querySelectorAll('[data-post]');
      posts.forEach(function (el) {
        var text = (el.textContent || '').toLowerCase();
        el.style.display = text.indexOf(q) > -1 ? '' : 'none';
      });
    });
  }
})();



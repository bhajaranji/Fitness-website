// Base JS: navigation toggle and blog search placeholder
(function () {
  // Hamburger menu functionality
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('site-nav');
  
  if (hamburger && nav) {
    console.log('Hamburger menu initialized'); // Debug log
    
    hamburger.addEventListener('click', function () {
      console.log('Hamburger clicked'); // Debug log
      var isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      
      console.log('Menu is open:', isOpen); // Debug log
      
      // Prevent body scroll when menu is open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on overlay
    nav.addEventListener('click', function (e) {
      if (e.target === nav) {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on nav links
    var navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Legacy nav toggle (keeping for compatibility)
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Disclosure toggles (used on Services and Blog)
  var disclosureButtons = document.querySelectorAll('.disclosure-toggle');
  disclosureButtons.forEach(function (btn) {
    var panel = btn.parentElement && btn.parentElement.querySelector('.disclosure-panel');
    if (!panel) return;
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        panel.hidden = true;
      } else {
        panel.hidden = false;
      }
    });
  });

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



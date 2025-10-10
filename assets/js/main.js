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
    
    // Close menu when clicking on nav links, EXCEPT dropdown toggles
    var navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var isDropBtn = link.classList.contains('dropbtn');
        
        // If it's a dropdown button, let the dropdown handler manage it
        if (isDropBtn) {
          return;
        }

        // For regular nav links, close the mobile menu
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

 //page functionality

  document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById('site-nav');
    var dropdownParents = document.querySelectorAll('.site-nav .dropdown');
    var mobileMq = window.matchMedia('(max-width: 991px)');

    dropdownParents.forEach(function (parent) {
      var btn = parent.querySelector('.dropbtn');
      var menu = parent.querySelector('.dropdown-content');
      if (!btn || !menu) return;

      // Toggle this submenu on click (desktop and mobile)
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Close other open submenus
        dropdownParents.forEach(function (other) {
          if (other !== parent) {
            var otherMenu = other.querySelector('.dropdown-content');
            if (otherMenu) otherMenu.classList.remove('show-dropdown');
          }
        });

        menu.classList.toggle('show-dropdown');
      });
    });

    // Close any open submenus when clicking outside (mobile or desktop)
    document.addEventListener('click', function (e) {
      dropdownParents.forEach(function (parent) {
        var btn = parent.querySelector('.dropbtn');
        var menu = parent.querySelector('.dropdown-content');
        if (!btn || !menu) return;
        if (!parent.contains(e.target)) {
          menu.classList.remove('show-dropdown');
        }
      });
    });

    // Reset submenus on breakpoint changes
    function resetSubmenus() {
      dropdownParents.forEach(function (parent) {
        var menu = parent.querySelector('.dropdown-content');
        if (menu) menu.classList.remove('show-dropdown');
      });
    }

    if (mobileMq.addEventListener) {
      mobileMq.addEventListener('change', resetSubmenus);
    } else if (mobileMq.addListener) {
      // Safari/older browsers
      mobileMq.addListener(resetSubmenus);
    }
  });




  //loader function //

  document.getElementById('y').textContent = new Date().getFullYear();

    document.querySelectorAll('.site-nav a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        // Skip dropdown buttons - they should not trigger the loader
        if (link.classList.contains('dropbtn')) {
          return;
        }
        
        e.preventDefault();
        var loader = document.getElementById('logo-loader');
        loader.style.display = 'flex';
        setTimeout(function() {
          window.location.href = link.href;
        }, 1000);
      });
    });


// scrolling and moving pricing funbction//


 



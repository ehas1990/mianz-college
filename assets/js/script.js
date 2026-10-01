


// $(document).ready(function () {
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     smoothMobile: true
// });


// window.addEventListener("load", function () {
//     scroll.update();
// });


// window.addEventListener("resize", function () {
//     scroll.update();
// });

// scroll.on('scroll', function(instance) {

//     if (instance.scroll.y > 50) {
//         $('header').addClass('scrolled');
//     } else {
//         $('header').removeClass('scrolled');
//     }

// });
// });

$(document).ready(function () {
  const heighox = document.querySelector(".heighox");
const dropdowns = document.querySelectorAll(".drpbp");

dropdowns.forEach(drop => {
  const menu = drop.querySelector(".submenuox");

  drop.addEventListener("mouseenter", () => {
    const menuHeight = menu.offsetHeight;
    heighox.style.height = menuHeight + 150 + "px";
    $(".list_nav_a").css("color","black");
    $(".header_flex").addClass("brdadd");
  });

  drop.addEventListener("mouseleave", () => {
    heighox.style.height = "0px";
        $(".list_nav_a").css("color","white");
            $(".header_flex").removeClass("brdadd");
  });
});



});


$(".ham").click(function(){
  $(".mobile-menu").addClass("showmbmenu")
})


$(".close-items").click(function(){
  $(".mobile-menu").removeClass("showmbmenu")
})





$(document).ready(function () {
  if ($(window).width() <= 1200) {
    $(".dprelativemob").click(function (e) {
      // Prevent default anchor behavior

      // Find the submenu inside the clicked .drparent
      let submenu = $(this).children(".submenu");

      // Close all other submenus except the one being clicked
      $(".submenu").not(submenu).slideUp();

      // Toggle the clicked submenu
      submenu.slideToggle();
    });
  }
});




$(document).ready(function(){

    $(".loginform-active").click(function(){
    $(".login-form-panel").removeClass("hidelogin")
  })

  $(".overlayshadow").click(function(){
    $(".login-form-panel").addClass("hidelogin")
  })


  document.querySelectorAll('path').forEach((p,i)=>{
  console.log(`Path ${i}:`, p.getTotalLength());
});
  
})




// filter box


document.querySelectorAll('.filter-title').forEach(title => {
  title.addEventListener('click', () => {
    title.nextElementSibling.classList.toggle('hidden');
  });
});



document.querySelectorAll('.styled-scrollbar').forEach(el => {
  el.addEventListener('wheel', e => {
    e.stopPropagation();
  }, { passive: false });
});

const toggle = document.querySelector('.filter-toggle');
const filterBox = document.querySelector('.filter-box');

toggle.addEventListener('click', () => {
  filterBox.classList.toggle('active');

  // Tell Locomotive to recalc layout
  if (window.scroll) {
    setTimeout(() => scroll.update(), 300);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.querySelector('.clear-btn');
  const filterBox = document.querySelector('.filter-box');

  if (!clearBtn) return;

  clearBtn.addEventListener('click', () => {
    // 1️⃣ Uncheck all checkboxes inside filter box
    filterBox.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });

    // 2️⃣ (Optional) Close dropdown on mobile
    if (window.innerWidth <= 991) {
      filterBox.classList.remove('active');
    }

    // 3️⃣ Update Locomotive Scroll layout
    if (window.scroll && typeof scroll.update === 'function') {
      setTimeout(() => scroll.update(), 200);
    }
  });
});






// rc slider ==================

$(document).ready(function(){
window.addEventListener("load", () => {

  document.querySelectorAll(".news-slider").forEach(slider => {
    const track = slider.querySelector(".news-track");
    const duration = slider.dataset.duration || 30;
    const visible = slider.dataset.visible || 3;

    const items = Array.from(track.children);
    if (items.length === 0) return;

    /* AUTO DUPLICATE CONTENT (invisible, backend untouched) */
    items.forEach(item => {
      track.appendChild(item.cloneNode(true));
    });

    const itemHeight = items[0].offsetHeight;
    slider.style.height = itemHeight * visible + "px";

    /* TOTAL HEIGHT OF ORIGINAL ITEMS */
    const totalHeight = itemHeight * items.length;

    /* CREATE KEYFRAMES DYNAMICALLY */
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll-${Date.now()} {
        from { transform: translateY(0); }
        to   { transform: translateY(-${totalHeight}px); }
      }
    `;
    document.head.appendChild(style);

    const animName = style.innerHTML.match(/scroll-\d+/)[0];

    track.style.animation = `${animName} ${duration}s linear infinite`;

    /* PAUSE ON HOVER */
    slider.addEventListener("mouseenter", () => {
      track.style.animationPlayState = "paused";
    });

    slider.addEventListener("mouseleave", () => {
      track.style.animationPlayState = "running";
    });
  });

});

});
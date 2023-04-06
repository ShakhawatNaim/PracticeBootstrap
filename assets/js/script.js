//nav bg color after scroll
let nav = document.querySelector("nav");
      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
          nav.classList.add("nav-background", "shadow");
        } else {
          nav.classList.remove("nav-background", "shadow");
        }
      });

      //price range
      let priceRange = document.getElementById("priceRange");
      let priceValue = document.getElementById("priceValue");

      priceRange.oninput = function () {
        priceValue.innerHTML = "$" + this.value;
      };

      //scroll top button
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })
    toTop.addEventListener("click", () => {
        window.scrollTo({top: 0});
    })
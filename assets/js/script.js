let nav = document.querySelector("nav");
      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
          nav.classList.add("nav-background", "shadow");
        } else {
          nav.classList.remove("nav-background", "shadow");
        }
      });

      let priceRange = document.getElementById("priceRange");
      let priceValue = document.getElementById("priceValue");

      priceRange.oninput = function () {
        priceValue.innerHTML = "$" + this.value;
      };
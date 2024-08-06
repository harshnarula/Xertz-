function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /* Search for elements with a certain attribute: */
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
  

document.addEventListener("DOMContentLoaded", includeHTML);



document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("form input, form textarea");
    const form = document.querySelector("form");

    inputs.forEach(input => {
        input.addEventListener("click", function(event) {
            event.stopPropagation(); 
            this.classList.toggle("active");
        });
    });

    document.addEventListener("click", function() {
        inputs.forEach(input => {
            input.classList.remove("active");
        });
    });

    form.addEventListener("click", function(event) {
        event.stopPropagation(); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });
});

function showMessage() {
    var confirmation = confirm("Eu já sabia, mas obrigado por confirmar ❤️");

    if (confirmation) {
        window.location.href = "https://imgur.com/a/3T4Xc1Z";
    }
}

window.addEventListener("DOMContentLoaded", function() {
    var buttonNo = document.querySelector(".buttonNo");
    var originalTransform = buttonNo.style.transform;
    var isTransformed = false;
  
    buttonNo.addEventListener("click", function() {
      if (isTransformed) {
        buttonNo.style.transform = originalTransform;
      } else {
        buttonNo.style.transform = "translateY(200px)";
      }
      isTransformed = !isTransformed;
    });
  });
  
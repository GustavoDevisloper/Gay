function showMessage() {
    var confirmation = confirm("Eu já sabia, mas obrigado por confirmar ❤️");

    if (confirmation) {
        window.location.href = "https://www.tiktok.com/@sillas_xs/video/7240592303998422278?is_from_webapp=1&sender_device=pc";
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
  
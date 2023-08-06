function showMessage() {
    var confirmation = confirm("Eu já sabia, mas obrigado por confirmar ❤️");

    if (confirmation) {
        window.location.href = "https://www.tiktok.com/@th1agoribeir0/video/7232812756762643717?q=vai%20ficar%20comigo%20nao%20%3F%20&t=1691355363311";
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
  
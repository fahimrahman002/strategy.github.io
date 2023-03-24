function pauseVideo() {
  var introVideo = document.getElementById("introVideo");
  introVideo.pause();
}
function playVideo() {
  var introVideo = document.getElementById("introVideo");
  introVideo.play();
}

function closeNavbar() {
  const handler = document.getElementById("body");
  handler.classList.toggle("opened-nav");
}

// const handler = document.getElementById("handler");
// if (handler != null) {
//   handler.onclick = function () {
//     uLogo = document.getElementById("u-logo");
//     uLogo.classList.toggle("hide");
//   };
// }

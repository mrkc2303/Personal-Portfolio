function show_certificate(num) {
  var cerificate_links = [
    "./media/files/geekahertz.jpg",
    "./media/files/raspberry-pi.png",
    "./media/files/icys.jpg",
    "./media/files/istconf.jpg",
    "./media/files/android-training.png",
    "./media/files/coursera-web.png",
    "./media/files/ai-for-india.png",
    "./media/files/lgmsoc.png",
    "./media/files/30-days-of-google-cloud.png",
    "./media/files/live-the-code.png",
    "./media/files/gwoc-participant.png",
    "./media/files/gwoc-achievement.png",
  ];

  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = cerificate_links[num];
  check();
}

function close_modal() {
  document.getElementById("myModal").style.display = "none";
}

// document.querySelector("#myModal").addEventListener("keyup", function () {
//   console.log(window.event.keyCode);
//   if (window.event.keyCode == 27) {
//     close_modal();
//   }
// });

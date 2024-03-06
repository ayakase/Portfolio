let t = 0
function animate() {
  requestAnimationFrame(animate);
  render();
  if (touchedBottom) {
    bottomAnimate();
  }
}
function bottomAnimate() {
  if (spaceBoi) {
    spaceBoi.rotation.y += 0.001;
  }
}
let touchedBottom = false;
window.onscroll = function () {
  const difference = document.documentElement.scrollHeight - window.innerHeight;
  const scrollposition = document.documentElement.scrollTop;
  if (difference - scrollposition <= 2) {
    // alert("Bottom of Page!");
    touchedBottom = true;
  } else {
    touchedBottom = false;
  }
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function loadImage(image) {
  var src = image.getAttribute("data-src");
  if (!src) return;
  var newImage = new Image();
  newImage.src = src;
  newImage.onload = () => {
    image.src = src;
    image.removeAttribute("data-src");
    image.setAttribute("data-loaded", true);
  };
}
function unloadImage(image) {
  image.src = "";

  image.removeAttribute("data-loaded");
}
function lazyUnloadImages() {
  var lazyImages = document.querySelectorAll("img[data-src][data-loaded]");

  lazyImages.forEach(function (img) {
    if (!isInViewport(img)) {
      unloadImage(img);
    }
  });
}

window.addEventListener("scroll", lazyUnloadImages);
window.addEventListener("resize", lazyUnloadImages);
document.addEventListener("DOMContentLoaded", function () {
  lazyLoadImages();
  lazyUnloadImages();
});
document.addEventListener("scroll", () => {
  lazyUnloadImages();
});

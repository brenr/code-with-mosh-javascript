function isLandscape(width, height) {
  return width > height;
}

let monitor1 = isLandscape(800, 600);
let monitor2 = isLandscape(1080, 1920);
console.log(monitor1);
console.log(monitor2);

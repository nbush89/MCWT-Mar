function getAreaOfCircle(radius) {
  return Math.PI * radius ** 2;
}
function getCircumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}
function getAreaOfSquare(side) {
  return side ** 2;
}
function getAreaOfTriangle(base, height) {
  return (1 / 2) * (base * height);
}
console.log(getAreaOfCircle(4));
console.log(getCircumferenceOfCircle(4));
console.log(getAreaOfSquare(4));
console.log(getAreaOfTriangle(4, 2));

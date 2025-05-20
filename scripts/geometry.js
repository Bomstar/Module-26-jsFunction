function geometryAreaCalculator() {
  const b = document.getElementById("triangle-base");
  const h = document.getElementById("triangle-hight");

  const triangleArea = 0.5 * b.value * h.value;
  console.log(triangleArea);
}

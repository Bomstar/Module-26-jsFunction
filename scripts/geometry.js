function geometryAreaCalculator() {
  const b = document.getElementById("triangle-base");
  const h = document.getElementById("triangle-hight");

  const triangleArea = 0.5 * b.value * h.value;
  console.log(triangleArea);
}

function rectangleAreaCalculator() {
  const width = document.getElementById("rectangle-width");
  const lenght = document.getElementById("rectangle-lenght");

  const rectangleArea = width.value * lenght.value;
  console.log(rectangleArea);
}

function parallelogramAreaCalculator() {
  const b = document.getElementById("parallelogram-base");
  const h = document.getElementById("parallelogram-hight");

  const parallelogramArea = b.value * h.value;
  console.log(parallelogramArea);
}

function calculateParallelogramArea() {
  //get parallelogram base value
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBaseInput.value;
  const base = parseFloat(parallelogramBaseText);
  console.log(base);

  //get parallelogram height value
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramHeightText = parallelogramHeightInput.value;
  const height = parseFloat(parallelogramHeightText);
  console.log(height);
  //calculate the area of parallelogram
  const area = base * height;
  console.log("area of the parallelogram is", area);

  //display parallelogram area
  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = area;
}

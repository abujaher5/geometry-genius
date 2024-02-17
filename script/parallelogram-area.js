// function calculateParallelogramArea() {
//   //get parallelogram base value
//   const parallelogramBaseInput = document.getElementById("parallelogram-base");
//   const parallelogramBaseText = parallelogramBaseInput.value;
//   const base = parseFloat(parallelogramBaseText);
//   console.log(base);

//   //get parallelogram height value
//   const parallelogramHeightInput = document.getElementById(
//     "parallelogram-height"
//   );
//   const parallelogramHeightText = parallelogramHeightInput.value;
//   const height = parseFloat(parallelogramHeightText);
//   console.log(height);
//   //calculate the area of parallelogram
//   const area = base * height;
//   console.log("area of the parallelogram is", area);

//   //display parallelogram area
//   const parallelogramAreaSpan = document.getElementById("parallelogram-area");
//   parallelogramAreaSpan.innerText = area;
//

//   const base = getParallelogramBase();

//   console.log(base);
// }

// function getParallelogramBase() {
//   const baseInput = document.getElementById("parallelogram-base");
//   const baseText = baseInput.value;
//   const base = parseFloat(baseText);
//   return base;
// }

function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  console.log("base value", base);

  const height = getInputValueById("parallelogram-height");
  console.log("height value", height);
  const area = base * height;
  console.log("area of parallelogram is", area);
  setInnerTextById("parallelogram-area", area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  //   console.log(inputValue);
  return inputValue;
}
function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function calculate() {

  let num1 = document.querySelector("#num1").value;

  let num2 = document.querySelector("#num2").value;

  let num3 = document.querySelector("#num3").value;

  let num4 = document.querySelector("#num4").value;

  let num5 = document.querySelector("#num5").value;

  let num6 = document.querySelector("#num6").value;

  let num7 = document.querySelector("#num7").value;

  let num8 = document.querySelector("#num8").value;

  let num9 = document.querySelector("#num9").value;

  let num10 = document.querySelector("#num10").value;

  let nenum1 = Number(num1);
  let nenum2 = Number(num2);
  let nenum3 = Number(num3);
  let nenum4 = Number(num4);
  let nenum5 = Number(num5);
  let nenum6 = Number(num6);
  let nenum7 = Number(num7);
  let nenum8 = Number(num8);
  let nenum9 = Number(num9);
  let nenum10 = Number(num10);

  let avg = parseFloat((nenum1 + nenum2 + nenum3 + nenum4 + nenum5 + nenum6 + nenum7 + nenum8 + nenum9 + nenum10)/10);

  let anz = parseInt(avg);

  document.querySelector("#averagenum").innerHTML =`Average is: ${anz}%`;
}
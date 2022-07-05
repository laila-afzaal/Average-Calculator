function calculate() {

  let num1 = document.getElementById("num1").value;

  let num2 = document.getElementById("num2").value;

  let num3 = document.getElementById("num3").value;

  let num4 = document.getElementById("num4").value;

  let num5 = document.getElementById("num5").value;

  let num6 = document.getElementById("num6").value;

  let num7 = document.getElementById("num7").value;

  let num8 = document.getElementById("num8").value;

  let num9 = document.getElementById("num9").value;

  let num10 = document.getElementById("num10").value;

  let averagenum = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;

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

  document.getElementById("averagenum").innerHTML =`Average is: ${anz}%`;
}
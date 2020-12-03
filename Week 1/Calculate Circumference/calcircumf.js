function circumference() {
  let r = document.getElementById("radius").value;
  let pi = Math.PI; //value of pi.

  if (r <= 0) {
    alert("Please enter the radius.");
  } else {
    let circumf = 2 * pi * r; //circumference of circle formula.
    circumf = circumf.toFixed(2); //takes only 2 decimal places.
    circumf =
      // `<p>The Circumference of circle with radius ` +
      // r +
      // `cm is: ` +
      // circumf +
      // ` cm </p>`;

      `<p>The circumference of circle with radius ${r} cm is : ${circumf} cm</p>`;

    document.getElementById("radius").value = "";
    document.getElementById("circ").innerHTML = circumf;
  }
}

function circumference() {
  let r = document.getElementById("radius").value;
  let pi = Math.PI;

  let circumf = 2 * pi * r;

  circumf =
    `<p>The Circumference of circle with radius ` +
    r +
    `cm is:
    </p>` +
    circumf;

  document.getElementById("radius").value = "";
  document.getElementById("circ").innerHTML = circumf;
}

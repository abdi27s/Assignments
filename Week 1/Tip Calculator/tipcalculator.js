function tipCalculation() {
  let amount = document.getElementById("totalAmount").value;
  let percent = document.getElementById("percentage").value;

  if (amount <= 0) {
    alert("Please enter the Bill Amount.");
    
  } else if (percent <= 0) {
    alert("Please enter the tip percentage.");
    
  } else {
    let tipAmount = (amount * percent) / 100;

    tipAmount = `<p>Total Amount: Rs ${amount} <br>
    Tip Percentage: ${percent} %<br>
    Tip Amount: Rs ${tipAmount}.</p>`;

    document.getElementById("totalAmount").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("result").innerHTML = tipAmount;
  }
}
// Defining all the id and classes

const loanForm = document.querySelector("#loan-form");

loanForm.addEventListener("submit", (e) => {
  document.getElementById("result").style.display = "none";

  document.getElementById("loader").style.display = "block";

  setTimeout(calRes, 1500);

  e.preventDefault();
});

function calRes() {
  //Defining Input field
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");

  //Defining resultant ouptput field
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const interestPayment = document.querySelector("#interest-payment");

  //For the input given
  const principalAmount = parseFloat(amount.value);

  const calculatedInterest = parseFloat(interest.value) / 100 / 12;

  const calculatedPayment = parseFloat(years.value) * 12;

  //For the calculation
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principalAmount * x * calculatedInterest) / (x - 1);

  //Checking if the value given is finite or not
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    interestPayment.value = (
      monthly * calculatedPayment -
      principalAmount
    ).toFixed(2);

    document.getElementById("result").style.display = "block";

    document.getElementById("loader").style.display = "none";
  } else {
    showError("Please Enter Valid Numbers");
  }
}

//Error alert if the input field is null or infinite
function showError(error) {
  document.getElementById("result").style.display = "none";

  document.getElementById("loader").style.display = "none";
  //Grabing the element of the card
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  const err = document.createElement("div");
  err.className = "alert alert-danger";
  err.appendChild(document.createTextNode(error));

  card.insertBefore(err, heading);

  setTimeout(clearError, 2000);
}

function clearError() {
  document.querySelector(".alert").remove();
}

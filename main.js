//create event function
function contentReplace() {
  //get input from user
  var nameOfPerson = document.querySelector("#nameInput").value;
  var addressOfPerson = document.querySelector("#addressInput").value;
  var actualAddressOfPerson = document.querySelector("#actualAddressInput")
    .value;
  var birthDateOfPerson = document.querySelector("#birthDateInput").value;
  var birthLocationOfPerson = document.querySelector("#birthLocationInput")
    .value;

  //create rule for time
  var timeOfGoing = document.querySelector("#timeOfGoingOut").value;
  var timeOutput;
  if (timeOfGoing == "V") {
    timeOutput = "20:00 - 5:00";
  } else if (timeOfGoing == "L") {
    timeOutput = "22:00 - 5:00";
  }

  //create output enviroment
  document.querySelector(".container").style.display = "none";
  document.querySelector(".output").style.display = "block";
  document.querySelector("button").style.display = "none";

  //place input from user into output enviroment
  document.querySelector("#nameOf").innerHTML = " " + nameOfPerson;
  document.querySelector("#placeOf").innerHTML = " " + addressOfPerson;
  document.querySelector("#actualPlaceOf").innerHTML =
    " " + actualAddressOfPerson;
  document.querySelector("#dateOf").innerHTML = " " + birthDateOfPerson;
  document.querySelector("#birthOf").innerHTML = " " + birthLocationOfPerson;
  document.querySelector("#timeOf").innerHTML = timeOutput;

  //--------------------------------------------------

  //get reason Input
  var workOutV = document.getElementById("work").checked;
  var medicalOutV = document.getElementById("medical").checked;
  var rideOutV = document.getElementById("ride").checked;
  var assistanceOutV = document.getElementById("assistance").checked;

  //create condition for reason
  if (workOutV === true) {
    document.getElementById("workOut").checked = true;
  } else if (workOutV === false) {
    document.getElementById("workOut").checked = false;
  }

  if (medicalOutV === true) {
    document.getElementById("medicalOut").checked = true;
  } else if (medicalOutV === false) {
    document.getElementById("medicalOut").checked = false;
  }

  if (rideOutV === true) {
    document.getElementById("rideOut").checked = true;
  } else if (rideOutV === false) {
    document.getElementById("rideOut").checked = false;
  }

  if (assistanceOutV === true) {
    document.getElementById("assistanceOut").checked = true;
  } else if (assistanceOutV === false) {
    document.getElementById("assistanceOut").checked = false;
  }

  var dateOfDeclaration = document.getElementById("dateOfStatement").value;
  document.getElementById(
    "dateOfDeclarationOutput"
  ).innerHTML = dateOfDeclaration;
}

//----------------------------------------------------
// PRINT BUTTON

function printButton() {
  var getPrintButton = document.querySelector(".printButton");
  getPrintButton.style.display = "none";
  window.print();
}

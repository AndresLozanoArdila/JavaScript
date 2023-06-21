function checkInstructor() {
    var name = document.getElementById("nameSelect").value;
    var lastName = document.getElementById("lastNameSelect").value;
    var activity = document.getElementById("activitySelect").value;
  
    if (
      name === "Jennifer" &&
      lastName === "Fajardo" &&
      activity === "JavaScript"
    ) {

      document.getElementById("result5").innerHTML = "La respuesta es correcta";
    } else {

      document.getElementById("result5").innerHTML = "La respuesta es incorrecta";
    }
  }
  
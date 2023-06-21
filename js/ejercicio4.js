
function checkTriangleType() {
    var side1 = parseFloat(document.getElementById("side1Input").value);
    var side2 = parseFloat(document.getElementById("side2Input").value);
    var side3 = parseFloat(document.getElementById("side3Input").value);

    if (side1 === side2 && side2 === side3) {
        alert("Triángulo equilátero");
        document.getElementById("result4").innerHTML = "Triángulo equilátero";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("Triángulo isósceles");
        document.getElementById("result4").innerHTML = "Triángulo isósceles";
    } else {
        alert("Triángulo escaleno");
        document.getElementById("result4").innerHTML = "Triángulo escaleno";
    }
}


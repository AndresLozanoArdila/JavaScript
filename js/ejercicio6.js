function openModal(shape) {
    var modal = document.getElementById("modal");
    var shapeTitle = document.getElementById("shapeTitle");
    var resultContainer = document.getElementById("resultContainer");
    var inputs = document.getElementsByTagName("input");

    // Limpiar valores anteriores
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    resultContainer.innerText = "";

    // Mostrar el modal y establecer el título de la figura
    modal.style.display = "block";
    shapeTitle.innerText = shape;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function openCalculationModal(shape, calculationType) {
    openModal(shape);
    var input3 = document.getElementById("input3");
    var input3Label = document.querySelector("label[for='input3']");

    // Ocultar o mostrar el tercer input según el tipo de cálculo
    if (calculationType === "perimeter" || shape === "circle" || shape === "square") {
        input3.style.display = "none";
        input3Label.style.display = "none";
    } else {
        input3.style.display = "block";
        input3Label.style.display = "block";
    }
}

function calculateResult() {
    var shapeTitle = document.getElementById("shapeTitle").innerText;
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var input3 = parseFloat(document.getElementById("input3").value);
    var resultContainer = document.getElementById("resultContainer");
    var result;

    if (shapeTitle === "Círculo") {
        result = calculateCircleResult(input1, input2);
    } else if (shapeTitle === "Triángulo") {
        result = calculateTriangleResult(input1, input2, input3);
    } else if (shapeTitle === "Rectángulo") {
        result = calculateRectangleResult(input1, input2);
    } else if (shapeTitle === "Cuadrado") {
        result = calculateSquareResult(input1);
    }

    resultContainer.innerText = "Resultado: " + result;
}

function calculateCircleResult(radius, calculationType) {
    if (calculationType === "perimeter") {
        return 2 * Math.PI * radius;
    } else if (calculationType === "area") {
        return Math.PI * Math.pow(radius, 2);
    }
}

function calculateTriangleResult(side1, side2, side3) {
    var perimeter = side1 + side2 + side3;
    var s = perimeter / 2; // Semiperimeter
    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return "Perímetro: " + perimeter.toFixed(2) + ", Área: " + area.toFixed(2);
}

function calculateRectangleResult(length, width) {
    var perimeter = 2 * (length + width);
    var area = length * width;
    return "Perímetro: " + perimeter.toFixed(2) + ", Área: " + area.toFixed(2);
}

function calculateSquareResult(side) {
    var perimeter = 4 * side;
    var area = Math.pow(side, 2);
    return "Perímetro: " + perimeter.toFixed(2) + ", Área: " + area.toFixed(2);
}

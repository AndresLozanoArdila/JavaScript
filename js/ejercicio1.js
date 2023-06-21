function consultProperties() {
    var word = document.getElementById("wordInput").value;
    var option = document.getElementById("optionSelect").value;
    var result;

    if (option === "length") {
        result = word.length;
    } else if (option === "uppercase") {
        result = word.toUpperCase();
    } else if (option === "lowercase") {
        result = word.toLowerCase();
    } else if (option === "firstcharacter") {
        result = word.charAt(0);
    }

    alert("El resultado es: " + result);
}

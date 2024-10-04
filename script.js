document.getElementById("calculateBtn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; 
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!weight || !height || age < 2) {
        alert("Please enter valid data.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById("bmiValue").innerText = bmi;

    let category = "";
    let indicatorPosition = 0;

    if (bmi < 18.5) {
        category = "Underweight";
        indicatorPosition = 0;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        indicatorPosition = 25;
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        indicatorPosition = 50;
    } else {
        category = "Obese";
        indicatorPosition = 75;
    }

    document.getElementById("bmiCategory").innerText = category;
    document.getElementById("bmiIndicator").style.left = `${indicatorPosition}%`;
    document.getElementById("bmiResult").style.display = "block";
});

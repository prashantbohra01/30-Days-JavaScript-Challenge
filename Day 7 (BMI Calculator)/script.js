function calculate() {
    let weight = parseFloat(document.getElementById("weight").value); 
    let height = parseFloat(document.getElementById("height").value); 
    let bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);

    let weightStatus;
    if (bmi < 18.5) {
        weightStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        weightStatus = "Normal weight";
    } else {
        weightStatus = "Overweight";
    }

    let resultText = `Your BMI is ${bmi}. You are ${weightStatus}.`;
    document.getElementById("results").innerText = resultText;
}

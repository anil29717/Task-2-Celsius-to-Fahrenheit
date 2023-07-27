// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Get DOM elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");
const convertBtn2 = document.getElementById("convertBtn2");
const resultDiv = document.getElementById("result");

// Celsius to Fahrenheit conversion
convertBtn.addEventListener("click", () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    fahrenheitInput.value = fahrenheitValue.toFixed(1);
  } else {
    fahrenheitInput.value = "";
  }
});

// Fahrenheit to Celsius conversion
convertBtn2.addEventListener("click", () => {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitValue)) {
    const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
    celsiusInput.value = celsiusValue.toFixed(1);
  } else {
    celsiusInput.value = "";
  }
});

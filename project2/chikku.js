const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const bmiValue = parseFloat(bmi); // Convert to number for comparison

    let message = `Your BMI is <strong>${bmi}</strong><br>`;

    if (bmiValue < 18.6) {
      message += 'You are Underweight';
    } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
      message += 'You are in the Normal Range';
    } else {
      message += 'You are Overweight';
    }

    results.innerHTML = message;
  }
});

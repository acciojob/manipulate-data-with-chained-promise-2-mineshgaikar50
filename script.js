// Function to simulate getting user input
function getUserNumbers() {
  const input = document.getElementById("numbers").value;
  if (input.trim() === "") {
    return Promise.reject("Input cannot be empty");
  }
  // Parse the user input string into an array of numbers
  const numbers = input.split(",").map(num => parseInt(num.trim())).filter(num => !isNaN(num));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers); // Resolve the promise with the user input after 3 seconds
    }, 3000);
  });
}

// Function to start the promise chaining
function startChaining() {
  const outputElement = document.getElementById("output");
  outputElement.innerText = "Processing..."; // Show initial message

  getUserNumbers()
    .then((numbers) => {
      // First promise: Filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter(num => num % 2 === 0); // Keep even numbers
          outputElement.innerText = `Even Numbers: ${evenNumbers.join(", ")}`;
          resolve(evenNumbers); // Pass even numbers to the next promise
        }, 1000); // Wait 1 second before resolving
      });
    })
    .then((evenNumbers) => {
      // Second promise: Multiply even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubledNumbers = evenNumbers.map(num => num * 2); // Double the numbers
          outputElement.innerText = `Doubled Numbers: ${doubledNumbers.join(", ")}`;
          resolve(doubledNumbers); // Pass doubled numbers
        }, 2000); // Wait 2 seconds before resolving
      });
    })
    .catch((error) => {
      // Handle any errors
      outputElement.innerText = `Error: ${error}`;
    });
}

// Event listener for the start button
document.getElementById("startBtn").addEventListener("click", startChaining);

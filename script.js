//your JS code here. If required.

// Function to simulate getting numbers with a promise
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Resolve the promise with the array after 3 seconds
    }, 3000);
  });
}

// Add the logic for promise chaining
getNumbers()
  .then((numbers) => {
    // First promise: Filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0); // Keep even numbers
        document.getElementById("output").innerText = evenNumbers.join(", ");
        resolve(evenNumbers); // Pass even numbers to the next promise
      }, 1000); // Wait 1 second before resolving
    });
  })
  .then((evenNumbers) => {
    // Second promise: Multiply even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map(num => num * 2); // Double the numbers
        document.getElementById("output").innerText = doubledNumbers.join(", ");
        resolve(doubledNumbers); // Pass doubled numbers
      }, 2000); // Wait 2 seconds before resolving
    });
  })
  .catch((error) => {
    // Handle any errors
    document.getElementById("output").innerText = `Error: ${error.message}`;
  });

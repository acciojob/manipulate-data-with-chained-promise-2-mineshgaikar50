function delayedNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

delayedNumbers()
  .then(numbers => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        console.log("Even numbers:", evenNumbers); // Log for debugging
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledEvenNumbers = evenNumbers.map(num => num * 2);
        console.log("Doubled even numbers:", doubledEvenNumbers); // Log for debugging
        document.getElementById("output").textContent = doubledEvenNumbers.join(", ");
        resolve(doubledEvenNumbers);
      }, 2000);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
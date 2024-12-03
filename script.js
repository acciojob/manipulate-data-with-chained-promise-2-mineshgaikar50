//your JS code here. If required.
 function getNumbers() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      });
    }

    // Chain the promises to transform the data
    getNumbers()
      .then((numbers) => {
        // Filter out odd numbers after 1 second
        return new Promise((resolve) => {
          setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById("output").innerText = `Even Numbers: ${evenNumbers.join(", ")}`;
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        // Multiply even numbers by 2 after 2 seconds
        return new Promise((resolve) => {
          setTimeout(() => {
            const doubledNumbers = evenNumbers.map(num => num * 2);
            document.getElementById("output").innerText = `Doubled Numbers: ${doubledNumbers.join(", ")}`;
            resolve(doubledNumbers);
          }, 2000);
        });
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });

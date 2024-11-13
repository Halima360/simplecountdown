function startCountdown() {
    const input = document.getElementById("timeInput").value;
    let timeLeft = parseInt(input);

    // Validate the input
    if (isNaN(timeLeft) || timeLeft <= 0) {
      document.getElementById("countdown").textContent = "Please enter a valid positive number.";
      return;
    }

    const countdownElement = document.getElementById("countdown");

    // Clear previous countdown if any
    countdownElement.textContent = `${timeLeft} seconds remaining`;
    
    const timer = setInterval(() => {
      timeLeft--;
      countdownElement.textContent = `${timeLeft} seconds remaining`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        countdownElement.textContent = "Time's up!";
      }
    }, 1000); // Update every second
  }
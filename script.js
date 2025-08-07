//your JS code here. If required.
// Function to update the time every second
    function updateTimer() {
      const timerElement = document.getElementById("timer");

      // Get current date and time
      const now = new Date();

      // Format date and time as: YYYY-MM-DD HH:MM:SS
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();

      // Set the content of the timer element
      timerElement.textContent = `${date} ${time}`;
    }

    // Initial call to display time immediately on page load
    updateTimer();

    // Update the timer every 1000 milliseconds (1 second)
    setInterval(updateTimer, 1000);
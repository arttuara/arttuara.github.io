function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";
    noButton.style.opacity = 0.8;

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("text").textContent = "Ei-nappula on vain illuusio";
    document.getElementById("title").style.display = "none";

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  if (response === "Yes") {
    // Remove message and buttons
    document.getElementById("title").remove();
    document.getElementById("buttons").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("text");
    yesMessage.textContent = "JEE! Nähdään 14. päivä pookie 😚🩷";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/happycat.gif";

  }
}

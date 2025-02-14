let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.addEventListener("load", addWeekDays);

// Function to write weekday names into the calendar
function addWeekDays() {
    let i = 0; // Initial counter value
    // Reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");
  
    // Write each of the seven days into a heading cell
    while (i < 7) {
      if (headingCells[i]) { // Prevents possible errors if there are fewer than 7 <th> elements
        headingCells[i].innerHTML = weekDays[i];
      }
      // Increase the counter by 1
      i++;
    }
}
    
window.addEventListener("load", showGames);

// Function to write game information into the calendar
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
      let gameInfo = "";

      // Determine result class
      switch (gameResults[i]) {
        case "W":
          gameInfo += "<p class='win'>";
          break;
        case "L":
          gameInfo += "<p class='lose'>";
          break;
        case "S":
          gameInfo += "<p class='suspended'>";
          break;
        case "P":
          gameInfo += "<p class='postponed'>";
          break;
        default:
          gameInfo += "<p>"; // Default case for unknown results
      }

      // Display the game location
      if (gameLocations[i] === "h") {
          gameInfo += "vs. ";
      } else if (gameLocations[i] === "a") {
          gameInfo += "@ ";
      }

      // Include the opponent
      gameInfo += gameOpponents[i] + "<br>";

      // Include the result and score
      gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ") ";

      // Display innings played for suspended, shortened, or extra-inning games
      if (gameInnings[i] < 5) {
          gameInfo += " [" + gameInnings[i] + "]***";
      } else if (gameInnings[i] < 9) {
          gameInfo += " [" + gameInnings[i] + "]*";
      } else if (gameInnings[i] > 9) {
          gameInfo += " [" + gameInnings[i] + "]";
      }

      // Close the paragraph
      gameInfo += "</p>";

      // Write the information into a table cell
      let tableCell = document.getElementById(gameDates[i]);
      if (tableCell) {
        tableCell.insertAdjacentHTML("beforeend", gameInfo);
      }
    }
}

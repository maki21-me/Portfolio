// Array of fun facts
const funFacts = [
    "Did you know? The first computer programmer was Ada Lovelace.",
    "Fun fact: The term 'bug' in programming came from a real moth!",
    "Did you know? There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "Fun fact: The first website ever created is still online: info.cern.ch.",
    "Did you know? Google was originally called 'Backrub'!",
];

// Event listener for the "Show More" button
document.getElementById("moreInfoBtn").addEventListener("click", function() {
    const moreInfoDiv = document.getElementById("moreInfo");
    if (moreInfoDiv.style.display === "none") {
        moreInfoDiv.style.display = "block"; // Show more info
        this.textContent = "Show Less"; // Change button text
    } else {
        moreInfoDiv.style.display = "none"; // Hide more info
        this.textContent = "Show More"; // Reset button text
    }
});

// Event listener for the "Show Fun Fact" button
document.getElementById("funFactBtn").addEventListener("click", function() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("funFact").textContent = randomFact; // Display random fact
});
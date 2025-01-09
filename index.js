function changePhoto() {
    // Get the image element by its ID
    const imgElement = document.getElementById('myPhoto');
    
    // Check the current image source and change it
    if (imgElement.src.includes('photo1.jpg')) {
        imgElement.src = 'image copy 7.png'; // Change to the second photo
    } else {
        imgElement.src = 'image copy 5.png'; // Change back to the first photo
    }
}


// Fun Fact Generator
const facts = [
    "I can code for 10 hours straight while listening to classical music.",
    "I built my first website at age 16!",
    "I love solving algorithmic challenges during my free time.",
    "I’m obsessed with learning new tech stacks."
];

function showFunFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact-display').textContent = randomFact;
}

// Projects Counter
let count = 0;
const counterElement = document.getElementById('project-count');

function updateCounter() {
    if (count < 20) {
        count++;
        counterElement.textContent = count;
        setTimeout(updateCounter, 50);
    }
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        updateCounter();
    }
});
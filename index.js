
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
    if (count < 3) {
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
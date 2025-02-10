const factButton = document.getElementById('factButton');
const factDisplay = document.getElementById('factDisplay');

const facts = [
  "I can touch my nose with my tongue.",
  "I have 3 cats.",
  "My favorite food is pizza.",
  "I was born in June.",
  "I have never broken a bone."
];

factButton.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
});

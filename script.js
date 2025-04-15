let points = 0;
const pointsDisplay = document.getElementById('points');
const messageBox = document.getElementById('message');

function watchAd() {
  // Simulate rewarded ad
  points += 10;
  updatePoints();
  messageBox.textContent = 'You earned 10 points!';
}

function withdrawPoints() {
  const wallet = document.getElementById('wallet').value;
  const amount = parseInt(document.getElementById('withdrawAmount').value);

  if (!wallet || isNaN(amount) || amount <= 0 || amount > points) {
    messageBox.textContent = 'Invalid wallet or amount.';
    messageBox.style.color = 'red';
    return;
  }

  points -= amount;
  updatePoints();
  messageBox.textContent = `Withdrawn ${amount} points to ${wallet}`;
  messageBox.style.color = 'green';
}

function updatePoints() {
  pointsDisplay.textContent = `Points: ${points}`;
}

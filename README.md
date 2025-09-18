# 🎮 Rock Paper Scissors Game

A simple, fun, and interactive **Rock–Paper–Scissors** game built with **HTML, CSS, and JavaScript**.  
The game keeps track of your wins, losses, draws, and total games played using **localStorage** so your progress remains even if you refresh the page.

## Features

- Classic **Rock, Paper, Scissors** gameplay.
- Keeps track of:
  - Wins
  - Losses
  - Draws
  - Total games played
- **Game Over logic**: after 10 rounds, the game:
  - Shows a **"GAME OVER!"** message.
  - Disables gameplay for **5 seconds** and restarts after **6 seconds**.
  - Resets your score and total rounds.
- **Persistent storage**: scores and games played are stored in your browser (localStorage).
- **Reset button**: manually reset your game progress at any time.

## How to Play

1. Open `index.html` in your browser, select `start game` to start playing.
2. Click one of the three icons:
   - 🪨 Rock
   - 📄 Paper
   - ✂️ Scissors
3. The computer makes a random choice.
4. The result is displayed on the screen.
5. Keep playing until you reach **10 rounds**.
6. After 10 rounds → _GAME OVER!_ message appears, the game pauses for 5 seconds, and then resets.

## Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling
- **JavaScript (ES6+)** – Game logic & localStorage

---

## Setup & Usage

1. Clone the repository or download the project folder:
   ```bash
   git clone https://github.com/cyprianchux/rps-game.git
   ```
2. Open the folder in your code editor.
3. Launch index.html in a browser.
4. Play and enjoy

## Future Improvements

- Add sound effects for each move.
- Implement a scoreboard with highest streak.
- Add multiplayer (player vs player).
- Improve mobile responsiveness.

## 👨‍💻 Developer

Developed by Cypee
Feel free to fork, contribute, or suggest improvements!

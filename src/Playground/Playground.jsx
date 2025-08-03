import { Link } from "react-router-dom";

function Playground() {
  return (
    <main className="container py-4 text-center">
      <div className="text-center">
        <h1>Welcome to Markuply Playground</h1>
        <p>
          📂 What's inside? A collection of lighthearted mini web projects to
          make you and your friends smile!
        </p>
      </div>

      <section>
        <h2>Ready to Play</h2>
        <div className="grid">
          <Link to="birthday_letter/index.html" className="card">
            <span>💌</span>
            <h2>Birthday Letter</h2>
          </Link>
          <Link to="date_request.html" className="card">
            <span>❤️</span>
            <h2>Ask on a Date</h2>
          </Link>
          <Link to="cat_confetti_loop.html" className="card">
            <span>🎉</span>
            <h2>Confetti Cat</h2>
          </Link>
          <Link to="coin_flip/coin_flip.html" className="card">
            <span>🪙</span>
            <h2>Coin Flip</h2>
          </Link>
          <Link to="roller.html" className="card">
            <span>🎲</span>
            <h2>Dice Roller</h2>
          </Link>
          <Link to="piano_keys.html" className="card">
            <span>🎹</span>
            <h2>Piano Keys</h2>
          </Link>
          <Link to="sounboard/index.html" className="card">
            <span>🎵</span>
            <h2>Soundboard</h2>
          </Link>
          <Link to="Snake.html" className="card">
            <span>🐍</span>
            <h2>Snake Game</h2>
          </Link>
          <Link to="RPS.html" className="card">
            <span>✂️</span>
            <h2>Rock Paper Scissors</h2>
          </Link>
          <Link to="fruit_ninja/index.html" className="card">
            <span>🍉</span>
            <h2>Fruit Ninja</h2>
          </Link>
        </div>
      </section>

      <section>
        <h2>Upcoming</h2>
        <div className="grid">
          {[
            ["♟", "Chess"],
            ["🐱", "Dancing Cat Meme"],
            ["🥠", "Fortune Cookie"],
            ["🎱", "Magic 8-Ball"],
            ["🧽", "Scratch Card"],
            ["🧩", "Memory Match"],
            ["🎰", "Slot Machine"],
            ["🎟️", "Random Name Picker"],
            ["❓", "Quick Quiz"],
            ["⚡", "Reaction Timer"],
            ["🌈", "Color Picker Game"],
            ["🪄", "Level Up"],
          ].map(([emoji, title], i) => (
            <div key={i} className="card">
              <span>{emoji}</span>
              <h2>{title}</h2>
              <div className="badge">Coming Soon</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Playground;
